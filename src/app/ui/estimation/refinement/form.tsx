"use client";

import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import { FormEvent, ReactNode, useEffect, useState } from "react";
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
import { useAppStore } from "@/app/lib/store/appStore";

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

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <Flooring
        key={uuid()}
        projectId={project_id}
        refinements={refinements}
      />,
      <Furniture
        key={uuid()}
        projectId={project_id}
        refinements={refinements}
      />,
      <Partition
        key={uuid()}
        projectId={project_id}
        refinements={refinements}
      />,
    ]);

  return (
    <>
      <TabWrapper />

      <MenuWrapper refinements={refinements} currentStepIndex={currentStepIndex} projectId={project_id} />

      <FormWrapper projectId={project_id} currentStepIndex={currentStepIndex} isFirstStep={isFirstStep} isLastStep={isLastStep} back={back} next={next}>
        {step}
      </FormWrapper>
    </>
  );
}

/**
 * 
 * @returns 
 */
export function TabWrapper() {

  const estimates = useRefinementStore((state) => state.estimates);
  const lastEstimate = useRefinementStore((state) => state.lastEstimate);
  const isExpanded = useRefinementStore((state) => state.isExpanded);
  const activeTab = useRefinementStore((state) => state.activeTab);

  const updateLastEstimate = useRefinementStore((state) => state.updateLastEstimate);
  const updateIsExpanded = useRefinementStore((state) => state.updateIsExpanded);
  const updateActiveTab = useRefinementStore((state) => state.updateActiveTab);
  const addEstimate = useRefinementStore((state) => state.addEstimate);

  useEffect(() => {

    updateLastEstimate(estimates);

  }, [estimates, updateLastEstimate])

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

  return (
    <div
      data-col={lastEstimate + 1}
      className={clsx(
        `js-tabs absolute z-30 ${isExpanded ? `right-${estimates.length * 2}0` : "right-20"
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
            onClick={() => updateIsExpanded(!isExpanded)}
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
            onClick={() => updateActiveTab(stimate.id)}
          >
            {tabMapping.get(stimate.id)}:
          </a>
        ))}
      </h3>

      {estimates.length < 4 && (
        <TabForm stimates={estimates} onSubmit={handleTabFormSubmit} />
      )}
    </div>
  )
}

/**
 * 
 * @param param0 
 * @returns 
 */
export function MenuWrapper({
  refinements, currentStepIndex, projectId
}: {
  refinements: any[], currentStepIndex: number, projectId: string
}) {

  const estimates = useRefinementStore((state) => state.estimates);
  const isExpanded = useRefinementStore((state) => state.isExpanded);
  const activeTab = useRefinementStore((state) => state.activeTab);

  return (
    <>
      {estimates.map((estimate: StimateData) => (
        <div
          key={estimate.id}
          data-menu={tabMapping.get(estimate.id)}
          className={clsx(
            `menu animate fade-in-2 bg-yellow flex flex-col justify-start items-start w-full h-full overflow-y-scroll`,
            {
              "col-start-5": !isExpanded,
              "z-30 active": activeTab == estimate.id,
              "z-10": activeTab != estimate.id,
              "js-main-menu col-start-5 bg-yellow6 bg-yellow1 ": estimate.id == 0, // A
              "absolute col-span-1 col-start-4 bg-yellow2 ": estimate.id == 1, // B
              "absolute col-span-1 col-start-3 bg-yellow3 ": estimate.id == 2, // C
              "absolute col-span-1 col-start-2 bg-yellow4 ": estimate.id == 3, // D
            }
          )}
        >
          <div className="h-full flex flex-col justify-between">
            <div className="estimation-col__header px-30">
              <div className="flex items-end justify-start mt-[7.593vh]">
                <h2 className="opacity-60">{estimate.name}</h2>
              </div>
              <p className="mt-3 font-latolight">
                this is a short description for this estimate.
              </p>
            </div>

            <div className="flex flex-col justify-between h-full mt-[8.519vh]">
              <div className="p-30">
                <div
                  className={clsx(`js-main-menu__header`, {
                    invisible: activeTab != estimate.id,
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
                            activeTab === estimate.id,
                        }
                      )}
                    >
                      <span className="font-latoblack">04.{index + 1}:</span>{" "}
                      <br />
                      {refinement.name}
                      <SubMenu
                        projectId={projectId}
                        estimates={estimates}
                        estimateId={estimate.id}
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
    </>
  )
}

/**
 * 
 * @param param0 
 * @returns 
 */
export function FormWrapper({
  projectId, currentStepIndex, isFirstStep, isLastStep, back, next, children
}: {
  projectId: string, currentStepIndex: number, isFirstStep: boolean, isLastStep: boolean, back: () => void, next: () => void, children: ReactNode
}) {
  const router = useRouter();

  const estimates = useRefinementStore((state) => state.estimates);
  const reset = useRefinementStore((state) => state.reset);

  const isExpanded = useRefinementStore((state) => state.isExpanded);
  const activeTab = useRefinementStore((state) => state.activeTab);
  const isLoading = useAppStore(state => state.isLoading);
  const updateIsLoading = useAppStore(state => state.updateIsLoading);

  const [error, setError] = useState<string | null>(null);

  // update this to action and implement dispatch
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isLastStep) return next();

    updateIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      let form_data = {
        estimates,
        ...{
          projectId: projectId,
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
        reset();
        router.push(`/estimation/estimate-summary/${projectResponse.id}`);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      updateIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <div className="wrapper__inner col-span-4 h-full w-full relative overflow-y-scroll overflow-x-hidden">
      <form onSubmit={onSubmit} className="h-full">
        <Wrapper
          stepIndex={currentStepIndex}
          isFirstStep={isFirstStep}
          onClick={back}
        >
          {children}
        </Wrapper>
      </form>
    </div>
  )
}

export interface ProjectAmenities {
  _id: string;
  amenityName: string;
}

export interface ProjectAreaDefination {
  _id: string;
  name: string;
  type: string;
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
  const [projectAmenities, setProjectAmenities] = useState<ProjectAreaDefination[]>(
    []
  );
  const [projectCustomSpaces, setProjectCustomSpaces] = useState<ProjectAreaDefination[]>(
    []
  );
  const [projectAreaDefinations, setProjectAreaDefinations] = useState<ProjectAreaDefination[]>([]);

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

    const getProjectCustomSpaces = async (id: string) => {
      const response = await fetch(
        `/api/project/custom-space/by-project/${id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      let projectCustomSpaceResponse = await response.json();

      setProjectCustomSpaces(projectCustomSpaceResponse);
    }

    getProjectAmenitiesLabel(projectId);
    getProjectCustomSpaces(projectId);
  }, [projectId]);

  useEffect(() => {
    setProjectAreaDefinations([...projectCustomSpaces, ...projectAmenities]);
  }, [projectAmenities, projectCustomSpaces]);

  const getSelectedRefinementProjectAmenity = (
    index: number,
    id?: string
  ) => {
    let a = estimates[index].refinement.some(
      (refinement: {
        id: string;
        refinementId: string;
        refinementLevel: string;
      }) => {
        return (
          refinement.id === id &&
          refinement.refinementId === refinementId
        );
      }
    );
    return a;
  };

  console.log(projectAreaDefinations);
  return (
    <>
      <div className="js-sub-step pt-3">
        {projectAreaDefinations &&
          projectAreaDefinations.map((projectAreaDefination: { _id: string; name: string, type: string }, index: number) => (
            <div
              key={projectAreaDefination._id}
              className={clsx(
                `js-step-indicator pl-3`,
                getSelectedRefinementProjectAmenity(
                  estimateId,
                  projectAreaDefination._id
                )
                  ? "flex step-indicator "
                  : "hidden"
              )}
              style={{ justifyContent: "space-between" }}
              data-category={projectAreaDefination.name}
            >
              {/* <span>{projectAmenity.amenityName}</span> */}
              {getSelectedRefinementProjectAmenity(
                estimateId,
                projectAreaDefination._id
              ) && (
                  <>
                    <Indicator
                      refinementId={refinementId}
                      id={projectAreaDefination._id}
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
  id,
  estimateId,
}: {
  refinementId?: string;
  id: string;
  estimateId: number;
}) {
  const [refinementName, setRefinementname] = useState<string>("");
  const estimates = useRefinementStore((state) => state.estimates);

  const nextRefinements = estimates[estimateId].refinement.find(
    (refinement: { id: string; refinementId: string }) =>
      refinement.id === id &&
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
