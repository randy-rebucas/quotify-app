'use client';

import { ProjectRequirementMenuContext } from "@/app/context/ProjectRequirementMenuContext";
import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import { FormEvent, useContext, useState } from "react";
import { INITIAL_DATA } from "./entities";
import Wrapper from "./wrapper";
import FinishAndCertification from "./steps/finish-and-certifications";
import MepFeatures from "./steps/mep-features";
import BaseBuildingConditions from "./steps/base-building-conditions";
import Technology from "./steps/technology";
import FurnitureAndFurnishing from "./steps/furniture-and-furnishing";
import Review from "./steps/review";

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
            <FinishAndCertification {...data} updateFields={updateFields} key={1} />,
            <MepFeatures {...data} updateFields={updateFields} key={2} />,
            <BaseBuildingConditions {...data} updateFields={updateFields} key={3} />,
            <Technology {...data} updateFields={updateFields} key={4} />,
            <FurnitureAndFurnishing {...data} updateFields={updateFields} key={5} />,
            <Review {...data} updateFields={updateFields} key={6} />
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