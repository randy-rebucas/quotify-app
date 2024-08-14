'use client';

import { useRequirementStore } from "@/app/lib/store/requirementStore";
import { ChangeEvent } from "react";
import Option from "./option";

type Props = {
    requirementId: string;
    requirementName: string;
    requirementQuestion: string;
    tabIndex: number;
}

export default function OptionWrapper({
    requirementId,
    requirementName,
    requirementQuestion,
    tabIndex,
}: Props) {
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
                <Option
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
