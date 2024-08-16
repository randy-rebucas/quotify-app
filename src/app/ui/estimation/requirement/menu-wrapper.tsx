"use client";

import { useRequirementStore } from "@/app/lib/store/requirementStore";
import { StimateData, tabMapping } from "./entities";
import clsx from "clsx";
import Menu from "./menu";
import Cost from "./cost";

type Props = {
    requirementsGroups: any[];
    currentStepIndex: any;
}
export default function MenuWrapper({ requirementsGroups, currentStepIndex }: Props) {
    const estimates = useRequirementStore((state) => state.estimates);
    const isExpanded = useRequirementStore((state) => state.isExpanded);
    const activeTab = useRequirementStore((state) => state.activeTab);

    return (
        <>
            {estimates.map((estimate: StimateData) => (
                <div
                    key={estimate.id}
                    data-menu={tabMapping.get(estimate.id)}
                    className={clsx(
                        `menu animate fade-in-2 bg-green1 flex flex-col justify-start items-start w-full h-full overflow-y-scroll`,
                        {
                            "col-start-5": !isExpanded,
                            "z-30 active": activeTab == estimate.id,
                            "z-10": activeTab != estimate.id,
                            "js-main-menu col-start-5 bg-green6 bg-green1 ": estimate.id == 0, // A
                            "absolute col-span-1 col-start-4 bg-green2 ": estimate.id == 1, // B
                            "absolute col-span-1 col-start-3 bg-green3 ": estimate.id == 2, // C
                            "absolute col-span-1 col-start-2 bg-green4 ": estimate.id == 3, // D
                        }
                    )}
                >
                    <div className="h-full flex flex-col justify-between">
                        <div className="estimation-col__header px-30">
                            <div className="flex items-end justify-start mt-[7.593vh]">
                                <h2 className="opacity-60">{estimate.name}</h2>
                            </div>
                            <p className="mt-3 font-latolight">
                                this is a short description for this estimate.
                            </p>
                        </div>

                        <div className="flex flex-col justify-between h-full mt-[8.519vh]">

                            <Menu menus={requirementsGroups} estimateId={estimate.id} currentStepIndex={currentStepIndex} activeTab={activeTab} />

                            <Cost estimateId={estimate.id}/>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}