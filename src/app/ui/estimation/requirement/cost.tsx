'use client';

import { useRequirementStore } from "@/app/lib/store/requirementStore";
import { formatCurrency } from "@/app/lib/utils";
import { useEffect, useMemo, useState } from "react";

type Props = {
    estimateId: number;
}
export default function Cost({ estimateId }: Props) {

    const [requirementUnitRate, setRequirementUnitRate] = useState<number>(0);
    const [isPreload, setIsPreload] = useState<boolean>(true);

    const estimates = useRequirementStore((state) => state.estimates);
    
    useEffect(() => {
        setRequirementUnitRate(0);
        const requirementEstimate = estimates.find((estimate) => estimate.id === estimateId);

        requirementEstimate?.requirement.map(async (requirement: any) => {
            const response = await fetch(`/api/requirement-level/${requirement.requirementLevelId}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            let requirementLabelResponse = await response.json();
            setIsPreload(false)
            setRequirementUnitRate(prev => prev + requirementLabelResponse.unitRate);
        });

    }, [estimateId, estimates])

    return (
        <div className="bg-darkgreen2 p-30 flex items-center sticky w-full bottom-0 justify-between text-white">
            <span className="text-[18px] leading-[24px] font-lato">
                cost estimate <br />
                per square foot
            </span>
            <span className="text-[53px] font-latoblack">
                {!isPreload && `$${requirementUnitRate}`}
                {isPreload && 0}
            </span>
        </div>
    )
}