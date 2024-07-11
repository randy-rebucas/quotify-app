'use client';

import { ChangeEvent } from "react";
import { useRequirementStore } from "@/app/lib/store/requirementStore";
import FinishLevelOption from "@/app/ui/level-option/finish-level-option";

type Props = {
    tabiIndex: number,
}

export default function Technology({
    tabiIndex
}: Props) {
    const updateEstimateRequirement = useRequirementStore(state => state.updateEstimateRequirement);

    const estimates = useRequirementStore(state => state.estimates);
    
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currentEstimateIndex = estimates.findIndex((estimate) => estimate.id === tabiIndex);
        const newEstimates = [...estimates];
        newEstimates[currentEstimateIndex].requirement = { ...estimates[currentEstimateIndex].requirement, technology: event.target.value };
        updateEstimateRequirement(newEstimates);
    }

    return <FinishLevelOption requirement="technology" hasRequirement={estimates[tabiIndex].requirement.finish} onChange={handleRadioChange}/>
   
}