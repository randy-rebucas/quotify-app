'use client';

import { ProjectRequirementMenuContext } from "@/app/context/ProjectRequirementMenuContext";
import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import { FormEvent, useContext, useState } from "react";
import Wrapper from "./wrapper";
import FinishAndCertification from "./steps/finish-and-certifications";
import MepFeatures from "./steps/mep-features";
import BaseBuildingConditions from "./steps/base-building-conditions";
import Technology from "./steps/technology";
import FurnitureAndFurnishing from "./steps/furniture-and-furnishing";
import Review from "./steps/review";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { INITIAL_DATA, RequirementData } from "./entities";

export default function Form({ menus, project_id }: { menus: any[], project_id: string }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const [data, setData] = useState(INITIAL_DATA)
    const { projectRequirementMenu, setProjectRequirementMenu } = useContext(ProjectRequirementMenuContext);

    function updateFields(fields: Partial<RequirementData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <FinishAndCertification {...data} updateFields={updateFields} key={1} />,
            <MepFeatures {...data} updateFields={updateFields} key={2} />,
            <BaseBuildingConditions {...data} updateFields={updateFields} key={3} />,
            <Technology {...data} updateFields={updateFields} key={4} />,
            <FurnitureAndFurnishing {...data} updateFields={updateFields} key={5} />,
            <Review {...data} updateFields={updateFields} key={6} />
        ])

    // update this to action and implement dispatch
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        setProjectRequirementMenu({
            menu: currentStepIndex + 1
        });

        if (!isLastStep) return next()
        try {
            let form_data = { ...data, ...{ projectId: project_id } };

            const response = await fetch('/api/project/area-definition', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form_data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }

            let projectResponse = await response.json();

            if (response.status === 200) {
                router.push(`/estimation/project-definition/${projectResponse.id}`)
            }
        } catch (error: any) {
            console.log(error);
            setError(error.message)
        } finally {
            setIsLoading(false) // Set loading to false when the request completes
        }

    }

    return (
        <>
            <div data-menu="A" className="js-main-menu menu col-start-5 animate fade-in-2 bg-green5 flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
                <div className="h-full flex flex-col justify-between">
                    <div className="estimation-col__header px-30">
                        <div className="flex items-end justify-start mt-[7.593vh]">
                            <h2 className="opacity-60">Main estimation</h2>
                        </div>
                        <p className="mt-3 font-latolight">this is a short description for this estimate.</p>
                    </div>

                    <div className="flex flex-col justify-between h-full mt-[8.519vh]">
                        <div className="px-30">
                            <div className="js-main-menu__header">
                                <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">
                                    03:
                                </h2>
                                <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">
                                    Requirements
                                </h4>
                                <div className="estimation-col__bar bg-white mt-6 mb-6"></div>
                            </div>
                            <div className="js-main-menu__content estimation-col__content">
                                {menus.map((menu, index) => (
                                    <div key={index} className={clsx(
                                        'js-step-indicator step-indicator',
                                        {
                                            'active': index === currentStepIndex,
                                        },
                                    )}>
                                        <span className="font-latoblack">03.{index + 1}:</span> <br />
                                        {menu.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-darkgreen2 p-30 flex items-center sticky w-full bottom-0 justify-between text-white">
                            <span className="text-[18px] leading-[24px] font-lato">cost estimate <br />per square foot</span>
                            <span className="text-[53px] font-latoblack">$55</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-4 h-full w-full relative overflow-y-scroll overflow-x-hidden">

                <form onSubmit={onSubmit} className="h-full" >
                    <Wrapper stepIndex={currentStepIndex} isFirstStep={isFirstStep} onClick={back}>
                        {step}
                    </Wrapper>
                </form >
            </div>
        </>
    )
}