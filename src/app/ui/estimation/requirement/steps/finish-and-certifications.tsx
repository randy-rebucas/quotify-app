
'use client';

import { ChangeEvent } from "react";
import { useRequirementStore } from "@/app/lib/store/requirementStore";
import RequirementLevelOption from "@/app/ui/level-option/requirement-level-option";


type Props = {
    tabiIndex: number
}

export default function FinishAndCertification({
    tabiIndex,
}: Props) {

    const updateEstimateRequirement = useRequirementStore(state => state.updateEstimateRequirement);

    const estimates = useRequirementStore(state => state.estimates);
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currentEstimateIndex = estimates.findIndex((estimate) => estimate.id === tabiIndex);
        const newEstimates = [...estimates];
        newEstimates[currentEstimateIndex].requirement = { ...estimates[currentEstimateIndex].requirement, finish: event.target.value };
        updateEstimateRequirement(newEstimates);
    }

    return <RequirementLevelOption requirement="finish and certifications" hasRequirement={estimates[tabiIndex].requirement.finish} onChange={handleRadioChange}/>
    
}