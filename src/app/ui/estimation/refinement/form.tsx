"use client";

import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import { FormEvent, useEffect, useState } from "react";
import { menuMapping, tabMapping } from "./entities";
import Wrapper from "./wrapper";
import Flooring from "./steps/flooring";
import Furniture from "./steps/furniture";
import Partition from "./steps/partition";
import clsx from "clsx";
import TabForm from "./tab-form";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";
import { IRefinement } from "@/app/models/Refinement";
import { Estimate, useRefinementStore } from "@/app/lib/store/refinementStore";

export type StimateData = {
  id: number;
  name: string;
  refinement: any | null;
};

export default function Form({
  refinements,
  project_id,
}: {
  refinements: any[];
  project_id: string;
}) {
  const router = useRouter();

  const estimates = useRefinementStore((state) => state.estimates);
  const addEstimate = useRefinementStore((state) => state.addEstimate);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Flooring
        key={uuid()}
        tabiIndex={activeTab}
        projectId={project_id}
        refinements={refinements}
      />,
      <Furniture
        key={uuid()}
        tabiIndex={activeTab}
        projectId={project_id}
        refinements={refinements}
      />,
      <Partition
        key={uuid()}
        tabiIndex={activeTab}
        projectId={project_id}
        refinements={refinements}
      />,
    ]);

  // clone estimates data
  const handleTabFormSubmit = (e: any) => {
    e.preventDefault();
    let sourceId = e.target.source.value;

    let source = estimates.find((estimate) => estimate.id == sourceId);

    const initialRefinement = {
      id: estimates.length,
      name: e.target.title.value,
      refinement: source?.refinement,
    };

    addEstimate(initialRefinement);
  };

  let last_stimate = estimates.length - 1;

  // update this to action and implement dispatch
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    if (!isLastStep) return next();
    try {
      let form_data = {
        estimates,
        ...{
          projectId: project_id,
          section: "refinement",
        },
      };

      const response = await fetch("/api/project/refinement", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form_data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      let projectResponse = await response.json();

      if (response.status === 200) {
        router.push(`/estimation/estimate-summary/${projectResponse.id}`);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <>
      <div
        data-col={last_stimate + 1}
        className={clsx(
          `js-tabs absolute z-30 ${
            isExpanded ? `right-${estimates.length * 2}0` : "right-20"
          }`,
          {
            "top-[52px]": estimates.length == 1,
            "top-[14px]": estimates.length > 1,
          }
        )}
      >
        {estimates.length > 1 && (
          <div
            className={clsx(
              "bg-darkyellow mb-1 h-[55px] w-[43px] flex items-center justify-center",
              {
                "rotate-180": isExpanded,
              }
            )}
          >
            <a
              href="#"
              className="js-tabs__toggle"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="20"
                viewBox="0 0 13 20"
                fill="none"
              >
                <path d="M11 2L3 10L11 18" stroke="#99B9B6" strokeWidth="3" />
              </svg>
            </a>
          </div>
        )}
        <h3>
          {estimates.map((stimate: StimateData, index: number) => (
            <a
              key={index}
              data-menu={tabMapping.get(stimate.id)}
              className={clsx("js-tabs-tab tabs-tab", {
                active: activeTab == stimate.id,
                "cursor-pointer": activeTab != stimate.id,
              })}
              onClick={() => setActiveTab(stimate.id)}
            >
              {tabMapping.get(stimate.id)}:
            </a>
          ))}
        </h3>

        {estimates.length < 4 && (
          <TabForm stimates={estimates} onSubmit={handleTabFormSubmit} />
        )}
      </div>
      {estimates.map((stimate: StimateData, index: number) => (
        <div
          key={index}
          data-menu={tabMapping.get(stimate.id)}
          className={clsx(
            `menu animate fade-in-2 bg-yellow flex flex-col justify-start items-start w-full h-full overflow-y-scroll`,
            {
              "col-start-5": !isExpanded,
              "z-30 active": activeTab == stimate.id,
              "z-10": activeTab != stimate.id,
              "js-main-menu col-start-5 bg-yellow6 bg-yellow1 ": index == 0, // A
              "absolute col-span-1 col-start-4 bg-yellow2 ": index == 1, // B
              "absolute col-span-1 col-start-3 bg-yellow3 ": index == 2, // C
              "absolute col-span-1 col-start-2 bg-yellow4 ": index == 3, // D
            }
          )}
        >
          <div className="h-full flex flex-col justify-between">
            <div className="estimation-col__header px-30">
              <div className="flex items-end justify-start mt-[7.593vh]">
                <h2 className="opacity-60">{stimate.name}</h2>
              </div>
              <p className="mt-3 font-latolight">
                this is a short description for this estimate.
              </p>
            </div>

            <div className="flex flex-col justify-between h-full mt-[8.519vh]">
              <div className="p-30">
                <div
                  className={clsx(`js-main-menu__header`, {
                    invisible: activeTab != stimate.id,
                  })}
                >
                  <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-black">
                    04:
                  </h2>
                  <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-black">
                    Refinements
                  </h4>
                  <div className="estimation-col__bar bg-black mt-6 mb-6"></div>
                </div>
                <div className="js-main-menu__content estimation-col__content">
                  {refinements.map((refinement: IRefinement, index: number) => (
                    <div
                      key={index}
                      className={clsx(
                        "js-step-indicator step-indicator js-has-sub-step",
                        {
                          active:
                            index === currentStepIndex &&
                            activeTab === stimate.id,
                        }
                      )}
                    >
                      <span className="font-latoblack">04.{index + 1}:</span>{" "}
                      <br />
                      {refinement.name}
                      <SubMenu
                        projectId={project_id}
                        estimates={estimates}
                        estimateId={stimate.id}
                        refinementId={refinement._id?.toString()}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-darkyellow p-30 flex items-center sticky w-full bottom-0 justify-between text-white">
                <span className="text-[18px] leading-[24px] font-lato">
                  cost estimate <br />
                  per square foot
                </span>
                <span className="text-[53px] font-latoblack">$55</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="wrapper__inner col-span-4 h-full w-full relative overflow-y-scroll overflow-x-hidden">
        <form onSubmit={onSubmit} className="h-full">
          <Wrapper
            stepIndex={currentStepIndex}
            isFirstStep={isFirstStep}
            onClick={back}
          >
            {step}
          </Wrapper>
        </form>
      </div>
    </>
  );
}

export interface ProjectAmenities {
  _id: string;
  amenityName: string;
}

/**
 *
 * @param param
 * project id
 *
 *
 * @returns
 */
export function SubMenu({
  projectId,
  estimates,
  estimateId,
  refinementId,
}: {
  projectId: string;
  estimateId: number;
  estimates: Estimate[];
  refinementId?: string;
}) {
  const [projectAmenities, setProjectAmenities] = useState<ProjectAmenities[]>(
    []
  );

  useEffect(() => {
    const getProjectAmenitiesLabel = async (id?: string) => {
      if (id) {
        const response = await fetch(
          `/api/project/amenities/by-project/${id}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        let projectAmenitiesResponse = await response.json();
        setProjectAmenities(projectAmenitiesResponse);
      }
    };

    getProjectAmenitiesLabel(projectId);
  }, [projectId]);

  const getSelectedRefinementProjectAmenity = (
    index: number,
    projectAmenityId?: string
  ) => {
    let a = estimates[index].refinement.some(
      (refinement: {
        projectAmenityId: string;
        refinementId: string;
        refinementLevel: string;
      }) => {
        return (
          refinement.projectAmenityId === projectAmenityId &&
          refinement.refinementId === refinementId
        );
      }
    );
    return a;
  };

  return (
    <>
      <div className="js-sub-step pt-3">
        {projectAmenities.length &&
          projectAmenities.map((projectAmenity: any, index: number) => (
            <div
              key={projectAmenity._id}
              className={clsx(
                `js-step-indicator pl-3`,
                getSelectedRefinementProjectAmenity(
                  estimateId,
                  projectAmenity._id
                )
                  ? "flex step-indicator "
                  : "hidden"
              )}
              style={{ justifyContent: "space-between" }}
              data-category={projectAmenity.amenityName}
            >
              {/* <span>{projectAmenity.amenityName}</span> */}
              {getSelectedRefinementProjectAmenity(
                estimateId,
                projectAmenity._id
              ) && (
                <>
                  <Indicator
                    refinementId={refinementId}
                    projectAmenityId={projectAmenity._id}
                    estimateId={estimateId}
                  />

                  <div
                    className="js-step-indicator step-indicator pl-3 checked"
                    style={{
                      paddingBottom: "unset",
                    }}
                    data-category="03.1.1"
                  ></div>
                </>
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export function Indicator({
  refinementId,
  projectAmenityId,
  estimateId,
}: {
  refinementId?: string;
  projectAmenityId: string;
  estimateId: number;
}) {
  const [refinementName, setRefinementname] = useState<string>("");
  const estimates = useRefinementStore((state) => state.estimates);

  const nextRefinements = estimates[estimateId].refinement.find(
    (refinement: { projectAmenityId: string; refinementId: string }) =>
      refinement.projectAmenityId === projectAmenityId &&
      refinement.refinementId === refinementId
  );

  useEffect(() => {
    const getRequirementLabel = async (id?: string) => {
      if (id) {
        const response = await fetch(`/api/refinement-level/${id}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        let refinementLabelResponse = await response.json();

        setRefinementname(refinementLabelResponse.level);
      }
    };

    if (nextRefinements.refinementLevelId) {
      getRequirementLabel(nextRefinements.refinementLevelId);
    }
  }, [nextRefinements]);

  return refinementName.toLowerCase();
}
