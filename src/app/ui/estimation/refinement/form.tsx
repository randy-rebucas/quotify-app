'use client';

import { ProjectRequirementMenuContext } from "@/app/context/ProjectRequirementMenuContext";
import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import { FormEvent, useContext, useState } from "react";
import { INITIAL_DATA } from "./entities";
import Wrapper from "./wrapper";
import Flooring from "./steps/flooring";
import Furniture from "./steps/furniture";
import Partition from "./steps/partition";

export default function Form() {
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
        <form onSubmit={onSubmit} className="h-full" >
            <Wrapper stepIndex={currentStepIndex} isFirstStep={isFirstStep} onClick={back}>
                {step}
            </Wrapper>
            
        </form >
    )
}