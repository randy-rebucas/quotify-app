"use client";

import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import Wrapper from "./wrapper";
import FinishAndCertification from "./steps/finish-and-certifications";
import MepFeatures from "./steps/mep-features";
import BaseBuildingConditions from "./steps/base-building-conditions";
import Technology from "./steps/technology";
import FurnitureAndFurnishing from "./steps/furniture-and-furnishing";
import Review from "./steps/review";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { tabMapping } from "./entities";
import { v4 as uuid } from "uuid";
import TabForm from "./tab-form";
import { useRequirementStore } from "@/app/lib/store/requirementStore";
import Menu from "./menu";
import Cost from "./cost";
import { useAppStore } from "@/app/lib/store/appStore";

export type StimateData = {
  id: number;
  name: string;
  requirement: any | null;
};

export default function Form({
  requirements_groups,
  project_id,
}: {
  requirements_groups: any[];
  project_id: string;
}) {

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <FinishAndCertification key={uuid()} requirements_groups={requirements_groups} />,
      <MepFeatures key={uuid()} requirements_groups={requirements_groups} />,
      <BaseBuildingConditions key={uuid()} requirements_groups={requirements_groups} />,
      <Technology key={uuid()} requirements_groups={requirements_groups} />,
      <FurnitureAndFurnishing key={uuid()} requirements_groups={requirements_groups} />,
      <Review key={uuid()} requirements_groups={requirements_groups} />,
    ]);

  return (
    <>
      <TabWrapper />

      <MenuWrapper requirementsGroups={requirements_groups} currentStepIndex={currentStepIndex} />

      <FormWrapper projectId={project_id} currentStepIndex={currentStepIndex} isFirstStep={isFirstStep} isLastStep={isLastStep} back={back} next={next} >
        {step}
      </FormWrapper >
    </>
  );
}

export function TabWrapper() {

  const estimates = useRequirementStore((state) => state.estimates);
  const lastEstimate = useRequirementStore((state) => state.lastEstimate);
  const isExpanded = useRequirementStore((state) => state.isExpanded);
  const activeTab = useRequirementStore((state) => state.activeTab);

  const updateLastEstimate = useRequirementStore((state) => state.updateLastEstimate);
  const updateIsExpanded = useRequirementStore((state) => state.updateIsExpanded);
  const updateActiveTab = useRequirementStore((state) => state.updateActiveTab);
  const addEstimate = useRequirementStore((state) => state.addEstimate);

  useEffect(() => {

    updateLastEstimate(estimates);

  }, [estimates, updateLastEstimate])

  //
  const handleTabFormSubmit = (e: any) => {
    e.preventDefault();
    let sourceId = e.target.source.value;

    let source = estimates.find((stimate) => stimate.id == sourceId);

    const initialRequirement = {
      id: estimates.length,
      name: e.target.title.value,
      requirement: source?.requirement,
    };

    addEstimate(initialRequirement);
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
            "bg-darkgreen mb-1 h-[55px] w-[43px] flex items-center justify-center",
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
        {estimates.map((stimate: StimateData) => (
          <a
            key={stimate.id}
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

export function MenuWrapper({ requirementsGroups, currentStepIndex }: { requirementsGroups: any[], currentStepIndex: any }) {
  const estimates = useRequirementStore((state) => state.estimates);
  const isExpanded = useRequirementStore((state) => state.isExpanded);
  const activeTab = useRequirementStore((state) => state.activeTab);

  return (
    <>
      {estimates.map((estimate: StimateData) => (
        <div
          key={estimate.id}
          data-menu={tabMapping.get(estimate.id)}
          className={clsx(
            `menu animate fade-in-2 bg-green1 flex flex-col justify-start items-start w-full h-full overflow-y-scroll`,
            {
              "col-start-5": !isExpanded,
              "z-30 active": activeTab == estimate.id,
              "z-10": activeTab != estimate.id,
              "js-main-menu col-start-5 bg-green6 bg-green1 ": estimate.id == 0, // A
              "absolute col-span-1 col-start-4 bg-green2 ": estimate.id == 1, // B
              "absolute col-span-1 col-start-3 bg-green3 ": estimate.id == 2, // C
              "absolute col-span-1 col-start-2 bg-green4 ": estimate.id == 3, // D
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

              <Menu menus={requirementsGroups} estimateId={estimate.id} currentStepIndex={currentStepIndex} activeTab={activeTab} />

              <Cost />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export function FormWrapper({
  projectId, currentStepIndex, isFirstStep, isLastStep, back, next, children
}: {
  projectId: string, currentStepIndex: number, isFirstStep: boolean, isLastStep: boolean, back: () => void, next: () => void, children: ReactNode
}) {
  const router = useRouter();
  const estimates = useRequirementStore((state) => state.estimates);
  const reset = useRequirementStore((state) => state.reset);
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
          section: "requirement",
        },
      };

      const response = await fetch("/api/project/requirement", {
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
        router.push(`/estimation/refinement/${projectResponse.id}`);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      updateIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <div className="col-span-4 h-full w-full relative overflow-y-scroll overflow-x-hidden">
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