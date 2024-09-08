"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { StimateData, tabMapping } from "./entities";
import TabForm from "./tab-form";
import { useRefinementStore } from "@/lib/store/refinementStore";
import { useEstimateStore } from "@/lib/store/estimateStore";



export default function TabWrapper({ projectId }: { projectId: string }) {
    const estimates = useRefinementStore((state) => state.estimates);
    const lastEstimate = useRefinementStore((state) => state.lastEstimate);
    const isExpanded = useRefinementStore((state) => state.isExpanded);
    const activeTab = useRefinementStore((state) => state.activeTab);

    const updateLastEstimate = useRefinementStore((state) => state.updateLastEstimate);
    const updateIsExpanded = useRefinementStore((state) => state.updateIsExpanded);
    const updateActiveTab = useRefinementStore((state) => state.updateActiveTab);
    const addEstimate = useRefinementStore((state) => state.addEstimate);

    useEffect(() => {

        updateLastEstimate(estimates);

    }, [estimates, updateLastEstimate])

    // clone estimates data
    const handleTabFormSubmit = (e: any) => {
        e.preventDefault();
        let sourceId = e.target.source.value;

        let source = estimates.find((estimate) => estimate.id == sourceId);

        const initialRefinement = {
            id: estimates.length,
            name: e.target.title.value,
            refinement: source?.refinement,
        };

        addEstimate(initialRefinement);
    };

    const requirementCount = useEstimateStore((state) => state.requirementCount);
    const getRequirementCount = useEstimateStore((state) => state.getRequirementCount);

    useEffect(() => {
        getRequirementCount(projectId);
    }, [getRequirementCount, projectId]);


    return (
        <div
            data-col={lastEstimate + 1}
            className={clsx(
                `js-tabs absolute z-30 ${isExpanded ? `right-${estimates.length * 2}0` : "right-20"
                }`,
                {
                    "top-[52px]": estimates.length == 1,
                    "top-[14px]": estimates.length > 1,
                }
            )}
        >
            {estimates.length > 1 && (
                <div
                    className={clsx(
                        "bg-darkyellow mb-1 h-[55px] w-[43px] flex items-center justify-center",
                        {
                            "rotate-180": isExpanded,
                        }
                    )}
                >
                    <a
                        href="#"
                        className="js-tabs__toggle"
                        onClick={() => updateIsExpanded(!isExpanded)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="20"
                            viewBox="0 0 13 20"
                            fill="none"
                        >
                            <path d="M11 2L3 10L11 18" stroke="#99B9B6" strokeWidth="3" />
                        </svg>
                    </a>
                </div>
            )}
            <h3>
                {estimates.map((stimate: StimateData, index: number) => (
                    <a
                        key={index}
                        data-menu={tabMapping.get(stimate.id)}
                        className={clsx("js-tabs-tab tabs-tab", {
                            active: activeTab == stimate.id,
                            "cursor-pointer": activeTab != stimate.id,
                        })}
                        onClick={() => updateActiveTab(stimate.id)}
                    >
                        {tabMapping.get(stimate.id)}:
                    </a>
                ))}
            </h3>

            {estimates.length < requirementCount && (
                <TabForm stimates={estimates} onSubmit={handleTabFormSubmit} />
            )}
        </div>
    )
}