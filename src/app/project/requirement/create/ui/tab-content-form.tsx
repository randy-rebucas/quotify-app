'use client';

import { useMultistepForm } from "@/app/custom-hooks/useMultistepForm";
import FinishAndCertification from "./steps/finish-and-certifications";
import MepFeatures from "./steps/mep-features";
import Wrapper from "./wrapper";
import { FormEvent, useState } from "react";
import { INITIAL_DATA } from "./entities";

export default function TabContentForm() {
    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <FinishAndCertification {...data} updateFields={updateFields} key={1} />,
            // <MepFeatures {...data} updateFields={updateFields} key={2} />
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

    return (
        <form onSubmit={onSubmit} className="h-full" >
            {/* onClick={back} isFirstStep */}
            {/* { onClick }: { onClick: MouseEventHandler<HTMLAnchorElement> } */}
            <Wrapper stepIndex={currentStepIndex} isFirstStep={isFirstStep} onClick={back}>
                {/* finish and certifications */}
                {/* MEP features */}
                {/* base building conditions */}
                {/* technology */}
                {/* furniture and furnishing */}
                {/* review */}
                {step}
            </Wrapper>
        </form >
    )
}