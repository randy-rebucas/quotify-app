'use client';

import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import AreaDefination from "./steps/area-defination";
import ProportionBreakdown from "./steps/proportion-breakdown";
import { v4 as uuid } from 'uuid'
import Form from "./form";

export default function FormWrapper({
    menus, amenities, custom_spaces, project_id
}: {
    menus: any[];
    amenities: any[];
    custom_spaces: any[],
    project_id: string
}) {

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <AreaDefination amenities={amenities} custom_spaces={custom_spaces} key={uuid()} />,
            <ProportionBreakdown amenities={amenities} custom_spaces={custom_spaces} key={uuid()} />
        ])

    return (
        <Form currentStepIndex={currentStepIndex} isFirstStep={isFirstStep} isLastStep={isLastStep} back={back} next={next} amenities={amenities} projectId={project_id} menus={menus}>
            {step}
        </Form>
    )

}

