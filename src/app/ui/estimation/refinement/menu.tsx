"use client";
import { IRefinement } from "@/app/models/Refinement";
import clsx from "clsx";
import MenuSubLevel from "./menu-sub-level";

type Props = {
    refinements: any[];
    currentStepIndex: number;
    estimateId: number;
    activeTab: number;
    estimates: any[];
    projectId: string;
}
export default function Menu({
    refinements, currentStepIndex, estimateId, activeTab, estimates, projectId
}: Props) {
    return (
        <div className="js-main-menu__content estimation-col__content">
            {refinements.map((refinement: IRefinement, index: number) => (
                <div
                    key={index}
                    className={clsx(
                        "js-step-indicator step-indicator js-has-sub-step",
                        {
                            active:
                                index === currentStepIndex &&
                                activeTab === estimateId,
                        }
                    )}
                >
                    <span className="font-latoblack">04.{index + 1}:</span>{" "}
                    <br />
                    {refinement.name}
                    <MenuSubLevel
                        projectId={projectId}
                        estimates={estimates}
                        estimateId={estimateId}
                        refinementId={refinement._id?.toString()}
                    />
                </div>
            ))}
        </div>
    )
}