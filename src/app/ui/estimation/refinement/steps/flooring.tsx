'use client';

import { ChangeEvent } from "react";
import { useRefinementStore } from "@/app/lib/store/refinementStore";
import RefinementLevelOption from "@/app/ui/level-option/refinement-level-option";

type Props = {
    tabiIndex: number
}

export default function Flooring({
    tabiIndex
}: Props) {
    const updateEstimateRefinement = useRefinementStore(state => state.updateEstimateRefinement);

    const estimates = useRefinementStore(state => state.estimates);
  
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currentEstimateIndex = estimates.findIndex((estimate) => estimate.id === tabiIndex);
        const newEstimates = [...estimates];
        newEstimates[currentEstimateIndex].refinement = { ...estimates[currentEstimateIndex].refinement, flooring: event.target.value };
        updateEstimateRefinement(newEstimates);
    }

    return <RefinementLevelOption refinement="flooring" hasRefinement={estimates[tabiIndex].refinement.flooring} onChange={handleRadioChange}/>
   
}