'use client';

import { useRefinementStore } from "@/app/lib/store/refinementStore";
import { useEffect, useMemo, useState } from "react";

type Props = {
    estimateId: number;
}
export default function Cost({ estimateId }: Props) {
    const [refinementUnitRate, setRefinementUnitRate] = useState<number>(0);
    const estimates = useRefinementStore((state) => state.estimates);

    useMemo(() => {
        setRefinementUnitRate(0);
        estimates[estimateId].refinement.map(async (refinement: any) => {
            const response = await fetch(`/api/refinement-level/${refinement.refinementLevelId}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            let refinementLabelResponse = await response.json();
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