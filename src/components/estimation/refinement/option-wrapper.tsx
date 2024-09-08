"use client";

import { ChangeEvent } from "react";
import { useRefinementStore } from "@/lib/store/refinementStore";
import Option from "./option";

type Props = {
    refinementId: string;
    id: string;
    name: string;
    type: string;
    tabiIndex: number;
}
export default function OptionWrapper({
    refinementId,
    id,
    name,
    type,
    tabiIndex,
}: Props) {
    const updateEstimateRefinement = useRefinementStore(
        (state) => state.updateEstimateRefinement
    );
    const estimates = useRefinementStore((state) => state.estimates);

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {

        const newEstimates = [...estimates];

        const nextRefinements = newEstimates[tabiIndex].refinement.find(
            (refinement: {
                id: string;
                refinementId: string;
            }) =>
                refinement.id === id &&
                refinement.refinementId === refinementId
        );

        if (nextRefinements) {
            // update nested array
            newEstimates[tabiIndex].refinement.map(
                (refinement: {
                    id: string;
                    refinementId: string;
                    refinementLevelId: string;
                }) => {
                    if (
                        refinement.id === id &&
                        refinement.refinementId === refinementId
                    ) {
                        return (refinement.refinementLevelId = event.target.value);
                    } else {
                        return refinement;
                    }
                }
            );
            updateEstimateRefinement(newEstimates);
        } else {
            // set new refinement array
            newEstimates[tabiIndex].refinement = [
                ...estimates[tabiIndex].refinement,
                {
                    id: id,
                    type: type,
                    refinementId: refinementId,
                    refinementLevelId: event.target.value,
                },
            ];
            updateEstimateRefinement(newEstimates);
        }
    };

    return (
        <div data-col="1" className="col-start-1 col-span-4">
            <h3 className="px-30 col-start-1 font-weight font-latobold mt-2">
                {name} <span className="font-light text-gray-400 text-sm">({type})</span>
            </h3>
            <div className="grid grid-cols-4">
                <Option
                    refinement="partitions"
                    amenityName={name}
                    id={id}
                    refinementId={refinementId}
                    selectedRefinement={estimates[tabiIndex].refinement.find(
                        (refinement: {
                            id: string;
                            refinementId: string;
                            refinementLevelId: string;
                        }) => refinement.id === id && refinement.refinementId === refinementId
                    )}
                    onChange={handleRadioChange}
                />
            </div>
        </div>
    );
}