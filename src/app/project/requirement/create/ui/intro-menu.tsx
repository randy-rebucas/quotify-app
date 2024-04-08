'use client';

import { ProjectRequirementMenuContext } from "@/app/context/ProjectRequirementMenuContext"
import clsx from "clsx";
import { useContext } from "react"
import { menus } from "./entities";

export default function IntroMenu() {

    const { projectRequirementMenu } = useContext(ProjectRequirementMenuContext);
    console.log(projectRequirementMenu.menu);

    return (
        <div className="intro-menu col-start-3">
            <div className="h-full">
                <div className="p-30 pt-col3">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h1 className="font-latobold text-white">
                                03:
                            </h1>
                            <h4 className="font-latolight mt-3 text-white">
                                Requirements
                            </h4>
                            <div className="estimation-col__bar bg-white mt-6 mb-6"></div>
                            <div className="estimation-col__content">
                                {/* js-has-sub-step active */}
                                {menus.map((menu, index) => (
                                    <Menu index={index} currentIndex={projectRequirementMenu.menu} title={menu.title} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Menu({ index, currentIndex, title }: {
    index: number;
    currentIndex: number
    title: string
}) {
    console.log(currentIndex)
    return <div className={clsx(
        'step-indicator js-has-sub-step',
        {
            'active': currentIndex === index,
        },
    )}>
        <span className="font-latoblack">01.{index}:</span> <br />
        {title}
    </div>
}