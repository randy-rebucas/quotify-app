'use client';

import { useRefinementStore } from "@/app/lib/store/refinementStore";
import { useEffect, useState } from "react";

type Props = {
    estimateId: number;
}
export default function Cost({ estimateId }: Props) {
    const [refinementUnitRate, setRefinementUnitRate] = useState<number>(0);
    const estimates = useRefinementStore((state) => state.estimates);

    useEffect(() => {
        setRefinementUnitRate(0);
        const estimate = estimates.find((estimate) => estimate.id === estimateId)
        estimate?.refinement.map(async (refinement: any) => {
            const response = await fetch(`/api/refinement-level/${refinement.refinementLevelId}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            let refinementLabelResponse = await response.json();
            console.log(refinementLabelResponse.unitRate);
            setRefinementUnitRate((prev) => prev + refinementLabelResponse.unitRate);
        });
    }, [estimateId, estimates])

    return (
        <div className="bg-darkyellow p-30 flex items-center sticky w-full bottom-0 justify-between text-white">
            <span className="text-[18px] leading-[24px] font-lato">
                cost estimate <br />
                per square foot
            </span>
            <span className="text-[53px] font-latoblack">${refinementUnitRate}</span>
        </div>
    )
}