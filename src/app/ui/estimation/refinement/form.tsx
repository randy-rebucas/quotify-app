'use client';

import { ProjectRequirementMenuContext } from "@/app/context/ProjectRequirementMenuContext";
import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import { FormEvent, useContext, useState } from "react";
import { INITIAL_DATA } from "./entities";
import Wrapper from "./wrapper";
import Flooring from "./steps/flooring";
import Furniture from "./steps/furniture";
import Partition from "./steps/partition";
import clsx from "clsx";

export default function Form({ menus }: { menus: any[] }) {
    const [data, setData] = useState(INITIAL_DATA)
    const { projectRequirementMenu, setProjectRequirementMenu } = useContext(ProjectRequirementMenuContext);

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <Flooring {...data} updateFields={updateFields} key={1} />,
            <Furniture {...data} updateFields={updateFields} key={2} />,
            <Partition {...data} updateFields={updateFields} key={3} />
        ])

    // update this to action and implement dispatch
    function onSubmit(e: FormEvent) {
        e.preventDefault()

        setProjectRequirementMenu({
            menu: currentStepIndex + 1
        });

        if (!isLastStep) return next()
        alert("Successful Account Creation")

        // revalidatePath('/project') // Update cached posts
        // redirect(`/project/breakdown`) 
    }

    return (
        <>
            <div data-menu="A" className="js-main-menu menu col-start-5 animate fade-in-2 bg-yellow flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
                <div className="h-full flex flex-col justify-between">

                    <div className="estimation-col__header px-30">
                        <div className="flex items-end justify-start mt-[7.593vh]">
                            <h2 className="opacity-60">Main estimation</h2>
                        </div>
                        <p className="mt-3 font-latolight">this is a short description for this estimate.</p>
                    </div>

                    <div className="flex flex-col justify-between h-full mt-[8.519vh]">
                        <div className="p-30">
                            <div className="js-main-menu__header">
                                <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-black">
                                    04:
                                </h2>
                                <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-black">
                                    Refinements
                                </h4>
                                <div className="estimation-col__bar bg-black mt-6 mb-6"></div>
                            </div>
                            <div className="js-main-menu__content estimation-col__content">
                                {menus.map((menu, index) => (
                                    <div key={index} className={clsx(
                                        'js-step-indicator step-indicator js-has-sub-step',
                                        {
                                            'active': index === currentStepIndex,
                                        },
                                    )}>
                                        <span className="font-latoblack">04.{index + 1}:</span> <br />
                                        {menu.title}
                                    </div>
                                ))}
                                {/* <div className="js-step-indicator step-indicator js-has-sub-step active">
                                    <span className="font-latoblack">04.1:</span> <br />
                                    flooring
                                    <div className="js-sub-step hidden pt-3">
                                        <div className="js-step-indicator step-indicator pl-3" data-category="office space"></div>
                                        <div className="js-step-indicator step-indicator pl-3" data-category="reception"></div>
                                    </div>
                                </div>
                                <div className="js-step-indicator step-indicator js-has-sub-step">
                                    <span className="font-latoblack">04.2:</span> <br />
                                    furniture
                                    <div className="js-sub-step hidden pt-3">
                                        <div className="js-step-indicator step-indicator pl-3" data-category="office space"></div>
                                        <div className="js-step-indicator step-indicator pl-3" data-category="reception"></div>
                                    </div>
                                </div>
                                <div className="js-step-indicator step-indicator js-has-sub-step">
                                    <span className="font-latoblack">04.3:</span> <br />
                                    partitions
                                    <div className="js-sub-step hidden pt-3">
                                        <div className="js-step-indicator step-indicator pl-3" data-category="office space"></div>
                                        <div className="js-step-indicator step-indicator pl-3" data-category="reception"></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="bg-darkyellow p-30 flex items-center sticky w-full bottom-0 justify-between text-white">
                            <span className="text-[18px] leading-[24px] font-lato">cost estimate <br />per square foot</span>
                            <span className="text-[53px] font-latoblack">$55</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper__inner col-span-4 h-full w-full relative overflow-y-scroll overflow-x-hidden">

                <form onSubmit={onSubmit} className="h-full" >
                    <Wrapper stepIndex={currentStepIndex} isFirstStep={isFirstStep} onClick={back}>
                        {step}
                    </Wrapper>

                </form >
            </div>
        </>
    )
}