'use client';

import { useMultistepForm } from "@/app/custom-hooks/useMultistepForm";
import FinishAndCertification from "./steps/finish-and-certifications";
import MepFeatures from "./steps/mep-features";
import Wrapper from "./wrapper";
import { FormEvent, useContext, useState } from "react";
import { INITIAL_DATA } from "./entities";
import BaseBuildingConditions from "./steps/base-building-conditions";
import Technology from "./steps/technology";
import FurnitureAndFurnishing from "./steps/furniture-and-furnishing";
import Review from "./steps/review";
import { ProjectRequirementMenuContext } from "@/app/context/ProjectRequirementMenuContext";

export default function TabContentForm() {
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
        console.log('next');
        setProjectRequirementMenu({
            menu: currentStepIndex
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