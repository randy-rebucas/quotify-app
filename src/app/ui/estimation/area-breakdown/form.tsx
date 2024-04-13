'use client';

import { FormEvent, useState } from "react";
import { FormData, INITIAL_DATA } from "./entities";
import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import Wrapper from "./wrapper";
import AreaDefination from "./steps/area-defination";
import ProportionBreakdown from "./steps/proportion-breakdown";

export default function Form() {
    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <AreaDefination {...data} updateFields={updateFields} key={1} />,
            <ProportionBreakdown {...data} updateFields={updateFields} key={2} />
        ])

    // update this to action and implement dispatch
    function onSubmit(e: FormEvent) {
        e.preventDefault()
        console.log('next');
        if (!isLastStep) return next()
        alert("Successful Account Creation")

        // revalidatePath('/project') // Update cached posts
        // redirect(`/project/breakdown`) 
    }

    {/* hidden */ }


    return (
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
                {step}
            </Wrapper>
        </form>
    );
}