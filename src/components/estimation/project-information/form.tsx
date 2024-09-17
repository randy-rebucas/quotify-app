'use client';

import Wrapper from "./wrapper";
import clsx from "clsx";
import { FormEvent, ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { useProjectInformationStore } from "@/lib/store/projectInformationStore";
import { useAppStore } from "@/lib/store/appStore";
import toast from "react-hot-toast";

let stepMap = new Map<number, string>();
stepMap.set(0, "Plan");
stepMap.set(1, "Address");
stepMap.set(2, "Area");
stepMap.set(3, "Head Count");

export default function Form({
    currentStepIndex, isFirstStep, isLastStep, back, next, menus, children
}: {
    currentStepIndex: number, isFirstStep: boolean, isLastStep: boolean, back: () => void, next: () => void, menus: any[], children: ReactNode
}) {
    const router = useRouter();
    const project = useProjectInformationStore(state => state.projectInformation);
    const hasFloorPlan = useProjectInformationStore(state => state.hasFloorPlan);
    const hasAddress = useProjectInformationStore(state => state.hasAddress);
    const isBaseOnHeadCount = useProjectInformationStore(state => state.isBaseOnHeadCount);
    const reset = useProjectInformationStore(state => state.reset);

    const isLoading = useAppStore(state => state.isLoading);
    const setIsLoading = useAppStore(state => state.setIsLoading);

    const [error, setError] = useState<string | null>(null);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!isLastStep) {
            toast.success(`${stepMap.get(currentStepIndex)} saved!`); // Displays a success message
            return next();
        }

        setIsLoading(true);
        setError(null); // Clear previous errors when a new request starts

        try {
            const formData = new FormData();

            const size = isBaseOnHeadCount ? +project.targetHeadCount * 1000 : project.approximateSize;
            const address = !hasAddress ? project.address.place : '';

            formData.append('spaceName', project.spaceName);
            formData.append('address', address);
            formData.append('approximateSize', size.toString());
            formData.append('rentableArea', project.rentableArea);
            formData.append('targetHeadCount', project.targetHeadCount);
            formData.append('averageAttendance', project.averageAttendance);
            formData.append('assignedSeat', project.assignedSeat);
            formData.append('hasFloorPlan', hasFloorPlan ? 'yes' : 'no');
  
            if (!hasFloorPlan) {
                for (let index = 0; index < project.floorPlans.length; index++) {
                    const element = project.floorPlans[index];
                    formData.append(element.name, element);
                }
            }

            const response = await fetch('/api/projects', {
                method: 'POST',
                body: formData,
            });

            let projectResponse = await response.json();

            if (response.status === 200) {
                router.push(`/estimation/area-breakdown/${projectResponse.id}`)
                setIsLoading(false) // Set loading to false when the request completes
            }
        } catch (error: any) {
            setError(error.message)
        } finally {
            reset();
        }
    }

    return (
        <>
            <div className="flex flex-col justify-start items-start w-full h-full">
                <div className="h-full">

                    {!isFirstStep && (
                        <div className="absolute top-0 left-0 flex flex-col items-end p-30">
                            <button type="button" onClick={back} className="focus:shadow-outline focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="77" height="62" viewBox="0 0 77 62" fill="none">
                                    <path opacity="0.3" d="M30.8994 61.1465L32.9858 59.0886L5.56387 31.9448L77 31.9449L77 29.0051L5.96129 29.0051L33.1845 2.15526L31.0981 -0.000564773L2.66426e-06 30.6709L30.8994 61.1465Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    )}

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
            <form id="projectForm" onSubmit={onSubmit} className="lg:col-span-4 col-span-12 h-full w-full overflow-y-scroll overflow-x-hidden">
                <Wrapper stepIndex={currentStepIndex}>
                    {children}
                </Wrapper>
            </form>
        </>
    )
}