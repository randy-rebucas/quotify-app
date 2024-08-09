"use client";

import { ChangeEvent, useEffect } from "react";
import { useRequirementStore } from "@/app/lib/store/requirementStore";
import RequirementLevelOption from "../requirement-level-option";

type Props = {
  requirements_groups: any[];
};

export default function FinishAndCertification({
  requirements_groups,
}: Props) {
  const activeTab = useRequirementStore((state) => state.activeTab);
  const requirements = useRequirementStore((state) => state.requirements);
  const updateRequirements = useRequirementStore(
    (state) => state.updateRequirements
  );

  useEffect(() => {
    const data = requirements_groups.find(
      (requirements_group) =>
        requirements_group._id === "finish and certifications"
    );
    if (requirements_groups) {
      updateRequirements(data.requirements);
    }
  }, [requirements_groups, updateRequirements]);

  const requirementId = useRequirementStore(
    (state) => state.requirementId
  );

  const getRequirementByName = useRequirementStore(
    (state) => state.getRequirementByName
  );

  useEffect(() => {
    getRequirementByName('finish and certifications');
  }, [getRequirementByName]);

  return (
    <>
      {requirements &&
        requirements.map(
          (requirement: { id: string; name: string; question: string; sort: string }) => (
            <OptionWrapper
              key={requirement.id}
              requirementId={requirement.id} // requirements [...dynamic]                                  // project amenity id
              requirementName={requirement.name} // requirement name
              requirementQuestion={requirement.question}
              tabIndex={activeTab}
            />
          )
        )}
    </>
  );
}

export function OptionWrapper({
  requirementId,
  requirementName,
  requirementQuestion,
  tabIndex,
}: {
  requirementId: string;
  requirementName: string;
  requirementQuestion: string;
  tabIndex: number;
}) {
  const updateEstimateRequirement = useRequirementStore(
    (state) => state.updateEstimateRequirement
  );
  const estimates = useRequirementStore((state) => state.estimates);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentEstimateIndex = estimates.findIndex(
      (estimate) => estimate.id === tabIndex
    );

    const newEstimates = [...estimates];

    const nextRequirement = newEstimates[currentEstimateIndex].requirement.find(
      (requirement: { requirementId: string }) =>
        requirement.requirementId === requirementId
    );

    if (nextRequirement) {
      // update nested array
      newEstimates[currentEstimateIndex].requirement.map(
        (refinement: { requirementId: string; requirementLevelId: string }) => {
          if (refinement.requirementId === requirementId) {
            return (refinement.requirementLevelId = event.target.value);
          } else {
            return refinement;
          }
        }
      );
      updateEstimateRequirement(newEstimates);
    } else {
      // set new refinement array
      newEstimates[currentEstimateIndex].requirement = [
        ...estimates[currentEstimateIndex].requirement,
        {
          requirementId: requirementId,
          requirementLevelId: event.target.value,
        },
      ];
      updateEstimateRequirement(newEstimates);
    }
  };

  return (
    <div data-col="1" className="col-start-1 col-span-4">
      <div className="p-30 pt-[74px]">
        <h5 className="col-start-1 xl:text-2xl text-1xl text-black font-latobold mt-1">
          {requirementName}
        </h5>
        <p>{requirementQuestion}</p>
      </div>
      <div className="grid grid-cols-4">
        <RequirementLevelOption
          requirementId={requirementId}
          requirementName={requirementName}
          selectedRequirement={estimates[tabIndex].requirement.find(
            (requirement: {
              requirementId: string;
              requirementLevelId: string;
            }) => requirement.requirementId === requirementId
          )}
          onChange={handleRadioChange}
        />
      </div>
    </div>
  );
}
