'use client';

import { ChangeEvent } from "react";
import { useRequirementStore } from "@/app/lib/store/requirementStore"
import FinishLevelOption from "@/app/ui/level-option/finish-level-option";

type Props = {
    tabiIndex: number
}

export default function FurnitureAndFurnishing({
    tabiIndex
}: Props) {

    const updateEstimateRequirement = useRequirementStore(state => state.updateEstimateRequirement);
 
    const estimates = useRequirementStore(state => state.estimates);

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currentEstimateIndex = estimates.findIndex((estimate) => estimate.id === tabiIndex);
        const newEstimates = [...estimates];
        newEstimates[currentEstimateIndex].requirement = { ...estimates[currentEstimateIndex].requirement, furniture: event.target.value };
        updateEstimateRequirement(newEstimates);
    }

    return <FinishLevelOption requirement="furniture and furnishing" hasRequirement={estimates[tabiIndex].requirement.furniture} onChange={handleRadioChange}/>

}