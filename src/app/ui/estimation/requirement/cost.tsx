'use client';

import { useRequirementLevelStore } from "@/app/lib/store/requirementLevelStore";

export default function Cost() {
    const requirementLevelUnitRate = useRequirementLevelStore(
        (state) => state.requirementLevelUnitRate
    );

    return (
        <div className="bg-darkgreen2 p-30 flex items-center sticky w-full bottom-0 justify-between text-white">
            <span className="text-[18px] leading-[24px] font-lato">
                cost estimate <br />
                per square foot
            </span>
            <span className="text-[53px] font-latoblack">
                ${requirementLevelUnitRate ?? 0}
            </span>
        </div>
    )
}