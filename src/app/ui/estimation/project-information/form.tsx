'use client';

import { FormEvent, useState } from "react";
import Plan from "./steps/plan";
import Address from "./steps/address";
import Area from "./steps/area";
import HeadCount from "./steps/head-count";
import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import Wrapper from "./wrapper";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { v4 as uuid } from 'uuid'
import { useProjectInformationStore } from "@/app/lib/projectInformationStore";


export default function Form({ menus }: { menus: any[] }) {
    const router = useRouter();
    const projectInformation = useProjectInformationStore(state => state.projectInformation);
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)


    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <Plan key={uuid()} />,
            <Address key={uuid()} />,
            <Area key={uuid()} />,
            <HeadCount key={uuid()} />
        ])

    // update this to action and implement dispatch
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts
        if (!isLastStep) return next()
        try {
            const formData = new FormData();
            formData.append('spaceName', projectInformation.spaceName);
            formData.append('address', projectInformation.address.place);
            formData.append('approximateSize', projectInformation.approximateSize);
            formData.append('rentableArea', projectInformation.rentableArea);
            formData.append('targetHeadCount', projectInformation.targetHeadCount);
            formData.append('averageAttendance', projectInformation.averageAttendance);
            formData.append('assignedSeat', projectInformation.assignedSeat);
            formData.append('hasFloorPlan', projectInformation.hasFloorPlan ? 'true' : 'false');
            formData.append('hasAddress', projectInformation.hasAddress ? 'true' : 'false');
            formData.append('isBaseOnHeadCount', projectInformation.isBaseOnHeadCount ? 'true' : 'false');

            for (let index = 0; index < projectInformation.floorPlans.length; index++) {
                const element = projectInformation.floorPlans[index];
                formData.append(element.name, element);
            }

            const response = await fetch('/api/projects', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }

            let projectResponse = await response.json();

            if (response.status === 200) {
                router.push(`/estimation/area-breakdown/${projectResponse.id}`)
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            setIsLoading(false) // Set loading to false when the request completes
        }
    }

    console.log(projectInformation);
    return (
        <>
            <div className="flex flex-col justify-start items-start w-full h-full">
                <div className="h-full">

                    <div className="p-30 lg:pt-col1">
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h1 className="font-latobold text-white">
                                    01.{currentStepIndex + 1}:
                                </h1>
                                <h4 className="font-latolight mt-3 text-white">
                                    Project information
                                </h4>
                                <div className="estimation-col__bar mt-6 mb-6"></div>
                                <div className="estimation-col__content">
                                    {menus.map((menu: any, index: number) => (
                                        <div key={menu._id} className={clsx(
                                            'js-step-indicator step-indicator',
                                            {
                                                'active': index === currentStepIndex,
                                            },
                                        )}>
                                            <span className="font-latoblack">01.{index + 1}:</span> <br />
                                            {menu.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="lg:col-span-4 col-span-12 h-full w-full overflow-y-scroll overflow-x-hidden" encType="multipart/form-data">
                {!isFirstStep && (
                    <div className="absolute top-0 left-0 flex flex-col items-end p-30">
                        <button type="button" onClick={back} className="focus:shadow-outline focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="62" viewBox="0 0 77 62" fill="none">
                                <path opacity="0.3" d="M30.8994 61.1465L32.9858 59.0886L5.56387 31.9448L77 31.9449L77 29.0051L5.96129 29.0051L33.1845 2.15526L31.0981 -0.000564773L2.66426e-06 30.6709L30.8994 61.1465Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                )}

                <Wrapper stepIndex={currentStepIndex} isLoading={isLoading}>
                    {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
                    {step}
                </Wrapper>
            </form>
        </>
    )
}