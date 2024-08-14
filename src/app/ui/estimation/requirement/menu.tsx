'use client';

import { useRequirementStore } from "@/app/lib/store/requirementStore";
import clsx from "clsx";
import Indicator from "./indicator";

type Props = {
    menus: any[];
    estimateId: number;
    currentStepIndex: number;
    activeTab: number
}
export default function Menu({ menus, estimateId, currentStepIndex, activeTab }: Props) {

    const estimates = useRequirementStore((state) => state.estimates);

    const getSelectedRequirementLevel = (
        index: number,
        requirementId?: string
    ) => {
        return estimates[index].requirement.some(
            (refinement: { requirementId: string; refinementLevel: string }) =>
                refinement.requirementId === requirementId
        );
    };
    return (
        <div className="px-30">
            <div
                className={clsx(`js-main-menu__header`, {
                    invisible: activeTab != estimateId,
                })}
            >
                <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">
                    03:
                </h2>
                <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">
                    Requirements
                </h4>
                <div className="estimation-col__bar bg-white mt-6 mb-6"></div>
            </div>
            <div className="js-main-menu__content estimation-col__content">
                {menus.map(
                    (
                        menu: {
                            _id: string;
                            requirements: { id: string; name: string }[];
                        },
                        index: number
                    ) => (
                        <div
                            key={menu._id}
                            className={clsx("js-step-indicator step-indicator", {
                                active:
                                    index === currentStepIndex &&
                                    activeTab === estimateId,
                            })}
                        >
                            <span className="font-latoblack">03.{index + 1}:</span>{" "}
                            <br />
                            {menu._id}
                            {menu.requirements.map(
                                (
                                    requirement: { id: string; name: string }
                                ) => (
                                    <div key={requirement.id} className="js-sub-step ">

                                        {getSelectedRequirementLevel(
                                            estimateId,
                                            requirement.id
                                        ) && (
                                                <div
                                                    className="js-step-indicator step-indicator pl-3 pt-3 checked"
                                                    style={{
                                                        paddingBottom: "unset",
                                                    }}
                                                    data-category={`03.1.${index + 1}`}
                                                >
                                                    <Indicator
                                                        estimateId={estimateId}
                                                        requirementId={requirement.id}
                                                    />
                                                </div>
                                            )}
                                    </div>
                                )
                            )}
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

