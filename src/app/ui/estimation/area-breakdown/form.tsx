'use client';

import { FormEvent, useState } from "react";
import { FormData, INITIAL_DATA } from "./entities";
import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import Wrapper from "./wrapper";
import AreaDefination from "./steps/area-defination";
import ProportionBreakdown from "./steps/proportion-breakdown";
import clsx from "clsx";
import { v4 as uuid } from 'uuid'
import { useRouter } from "next/navigation";

export default function Form({ menus, amenities, custom_spaces, project_id }: { menus: any[]; amenities: any[]; custom_spaces: any[], project_id: string }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>) {
        setData((prev: any) => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <AreaDefination {...data} updateFields={updateFields} amenities={amenities} custom_spaces={custom_spaces} key={uuid()} />,
            <ProportionBreakdown {...data} updateFields={updateFields} key={uuid()} />
        ])

    // update this to action and implement dispatch
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

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
            setError(error.message)
        } finally {
            setIsLoading(false) // Set loading to false when the request completes
        }
    }

    return (
        <>
            <div className="lg:col-start-1 flex flex-col justify-start items-start w-full h-full">
                <div className="h-full">
                    <div className="absolute top-0 left-0 flex flex-col items-end p-30">
                        <a href="estimation-blue.html" className="js-prevbtn focus:shadow-outline focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="62" viewBox="0 0 77 62" fill="none">
                                <path opacity="0.3" d="M30.8994 61.1465L32.9858 59.0886L5.56387 31.9448L77 31.9449L77 29.0051L5.96129 29.0051L33.1845 2.15526L31.0981 -0.000564773L2.66426e-06 30.6709L30.8994 61.1465Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                    <div className="p-30 lg:pt-col2">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h1 className="font-latobold text-white">
                                    02.{currentStepIndex + 1}:
                                </h1>
                                <h4 className="font-latolight mt-3 text-white">
                                    Area breakdown
                                </h4>
                                <div className="estimation-col__bar mt-6 mb-6"></div>
                                {menus.length && <div className="estimation-col__content">
                                    {menus.map((menu: any, index: number) => (
                                        <div key={menu._id} className={clsx(
                                            'js-step-indicator step-indicator',
                                            {
                                                'active': index === currentStepIndex,
                                            },
                                        )}>
                                            <span className="font-latoblack">02.{index + 1}:</span> <br />
                                            {menu.title}
                                        </div>
                                    ))}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="lg:col-span-4 col-span-12 h-full w-full overflow-y-scroll overflow-x-hidden">
                {!isFirstStep && (
                    <div className="absolute top-0 left-0 flex flex-col items-end p-30">
                        <button type="button" onClick={back} className="focus:shadow-outline focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="62" viewBox="0 0 77 62" fill="none">
                                <path opacity="0.3" d="M30.8994 61.1465L32.9858 59.0886L5.56387 31.9448L77 31.9449L77 29.0051L5.96129 29.0051L33.1845 2.15526L31.0981 -0.000564773L2.66426e-06 30.6709L30.8994 61.1465Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                )}
                <Wrapper stepIndex={currentStepIndex}>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {step}
                </Wrapper>
            </form>
        </>
    );
}