'use client';


import { ChangeEvent } from "react";
import { useRefinementStore } from "@/app/lib/store/refinementStore";
import RefinementLevelOption from "@/app/ui/level-option/refinement-level-option";


type Props = {
    tabiIndex: number
}

export default function Furniture({
    tabiIndex
}: Props) {
    const updateEstimateRefinement = useRefinementStore(state => state.updateEstimateRefinement);
    
    const estimates = useRefinementStore(state => state.estimates);
   
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currentEstimateIndex = estimates.findIndex((estimate) => estimate.id === tabiIndex);
        const newEstimates = [...estimates];
        newEstimates[currentEstimateIndex].refinement = { ...estimates[currentEstimateIndex].refinement, furniture: event.target.value };
        updateEstimateRefinement(newEstimates);
    }

    return <RefinementLevelOption refinement="furniture" hasRefinement={estimates[tabiIndex].refinement.furniture} onChange={handleRadioChange}/>
    
}