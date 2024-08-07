"use client";

import { useRefinementStore } from "@/app/lib/store/refinementStore";
import { StimateData, tabMapping } from "./entities";
import clsx from "clsx";
import Menu from "./menu";

type Props = {
    refinements: any[];
    currentStepIndex: number;
    projectId: string;
}
export default function MenuWrapper({
    refinements, currentStepIndex, projectId
}: Props) {

    const estimates = useRefinementStore((state) => state.estimates);
    const isExpanded = useRefinementStore((state) => state.isExpanded);
    const activeTab = useRefinementStore((state) => state.activeTab);

    return (
        <>
            {estimates.map((estimate: StimateData) => (
                <div
                    key={estimate.id}
                    data-menu={tabMapping.get(estimate.id)}
                    className={clsx(
                        `menu animate fade-in-2 bg-yellow flex flex-col justify-start items-start w-full h-full overflow-y-scroll`,
                        {
                            "col-start-5": !isExpanded,
                            "z-30 active": activeTab == estimate.id,
                            "z-10": activeTab != estimate.id,
                            "js-main-menu col-start-5 bg-yellow6 bg-yellow1 ": estimate.id == 0, // A
                            "absolute col-span-1 col-start-4 bg-yellow2 ": estimate.id == 1, // B
                            "absolute col-span-1 col-start-3 bg-yellow3 ": estimate.id == 2, // C
                            "absolute col-span-1 col-start-2 bg-yellow4 ": estimate.id == 3, // D
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
                            <div className="p-30">
                                <div
                                    className={clsx(`js-main-menu__header`, {
                                        invisible: activeTab != estimate.id,
                                    })}
                                >
                                    <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-black">
                                        04:
                                    </h2>
                                    <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-black">
                                        Refinements
                                    </h4>
                                    <div className="estimation-col__bar bg-black mt-6 mb-6"></div>
                                </div>
                                {/* menu here  */}
                                <Menu refinements={refinements} currentStepIndex={currentStepIndex} estimateId={estimate.id} activeTab={activeTab} estimates={estimates} projectId={projectId} />
                            </div>
                            <div className="bg-darkyellow p-30 flex items-center sticky w-full bottom-0 justify-between text-white">
                                <span className="text-[18px] leading-[24px] font-lato">
                                    cost estimate <br />
                                    per square foot
                                </span>
                                <span className="text-[53px] font-latoblack">$55</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}