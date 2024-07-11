'use client';

import { ChangeEvent} from "react";
import { useRequirementStore } from "@/app/lib/store/requirementStore";
import FinishLevelOption from "@/app/ui/level-option/finish-level-option";

type buildingConditionFormProps = {
    tabiIndex: number
}

export default function BaseBuildingConditions({
    tabiIndex
}: buildingConditionFormProps) {

    const updateEstimateRequirement = useRequirementStore(state => state.updateEstimateRequirement);
 
    const estimates = useRequirementStore(state => state.estimates);

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currentEstimateIndex = estimates.findIndex((estimate) => estimate.id === tabiIndex);
        const newEstimates = [...estimates];
        newEstimates[currentEstimateIndex].requirement = { ...estimates[currentEstimateIndex].requirement, buildingCondition: event.target.value };
        updateEstimateRequirement(newEstimates);
    }
    
    return <FinishLevelOption requirement="base building conditions" hasRequirement={estimates[tabiIndex].requirement.buildingCondition} onChange={handleRadioChange}/>
    
}