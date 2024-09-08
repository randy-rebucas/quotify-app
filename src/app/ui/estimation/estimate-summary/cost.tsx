'use client';

import { formatCurrency } from "@/lib/utils";
import { useState } from "react";

export default function Cost({ estimateGroups }: { estimateGroups: any[] }) {
    const [requirementSum, setRequirementSum] = useState<number>(0);
    const [refinementAmenitySum, setRefinementAmenitySum] = useState<number>(0);
    const [refinementCustomSpaceSum, setRefinementCustomSpaceSum] = useState<number>(0);

    estimateGroups.map(async (estimate) => {
        if (estimate.section === 'requirement') {
            const response = await fetch(`/api/requirement/by-estimate/${estimate._id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            let estimateRequirementResponse = await response.json();

            const sum = estimateRequirementResponse
                .map((estimateRequirement: any) => estimateRequirement.requirementLevel.unitRate)
                .reduce((sum: number, current: number) => sum + current);

            setRequirementSum(sum)
        }

        if (estimate.section === 'refinement') {

            const amenityRefinementResponse = await fetch(`/api/estimate/amenity/refinement-level/${estimate._id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            let estimateAmenityRefinementResponse = await amenityRefinementResponse.json();
            const amenityRefinementLevelsum = estimateAmenityRefinementResponse
                .map((estimateAmenityRefinement: any) => estimateAmenityRefinement.refinementLevel.unitRate)
                .reduce((sum: number, current: number) => sum + current);
            setRefinementAmenitySum(amenityRefinementLevelsum)

            const customSpaceRefinementResponse = await fetch(`/api/estimate/customspace/refinement-level/${estimate._id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            let estimateCustomSpaceRefinementResponse = await customSpaceRefinementResponse.json();
            const customspaceRefinementLevelsum = estimateCustomSpaceRefinementResponse
                .map((estimateCustomSpaceRefinement: any) => estimateCustomSpaceRefinement.refinementLevel.unitRate)
                .reduce((sum: number, current: number) => sum + current);
            setRefinementCustomSpaceSum(customspaceRefinementLevelsum)
        }
    })

    return (
        <div className="bg-[#595959] p-[15px] sticky w-full min-w-[291px] flex items-end justify-between text-white bottom-0 hide-on-print">
            <span className="text-[14px] leading-[24px] font-lato">total cost</span>
            <span className="text-[36px] font-latoblack">{formatCurrency(requirementSum + refinementAmenitySum + refinementCustomSpaceSum)}</span>
        </div>
    )
}