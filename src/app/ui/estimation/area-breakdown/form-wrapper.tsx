'use client';

import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import AreaDefination from "./steps/area-defination";
import ProportionBreakdown from "./steps/proportion-breakdown";
import { v4 as uuid } from 'uuid'
import Form from "./form";

export default function FormWrapper({
    menus, amenities, customSpaces, projectId
}: {
    menus: any[];
    amenities: any[];
    customSpaces: any[],
    projectId: string
}) {

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <AreaDefination amenities={amenities} customSpaces={customSpaces} key={uuid()} />,
            <ProportionBreakdown amenities={amenities} customSpaces={customSpaces} key={uuid()} />
        ])

    return (
        <Form currentStepIndex={currentStepIndex} isFirstStep={isFirstStep} isLastStep={isLastStep} back={back} next={next} amenities={amenities} projectId={projectId} menus={menus}>
            {step}
        </Form>
    )

}

