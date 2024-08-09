"use client";

import { useMultistepForm } from "@/app/hooks/useMultistepForm";
import Flooring from "./steps/flooring";
import Furniture from "./steps/furniture";
import Partition from "./steps/partition";
import { v4 as uuid } from "uuid";
import Form from "./form";
import TabWrapper from "./tab-wrapper";
import MenuWrapper from "./menu-wrapper";

type Props = {
    refinements: any[];
    project_id: string;
};

export default function FormWrapper({
    refinements,
    project_id,
}: Props) {

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <Flooring
                key={uuid()}
                projectId={project_id}
                refinements={refinements}
            />,
            <Furniture
                key={uuid()}
                projectId={project_id}
                refinements={refinements}
            />,
            <Partition
                key={uuid()}
                projectId={project_id}
                refinements={refinements}
            />,
        ]);

    return (
        <>
            <TabWrapper />

            <MenuWrapper refinements={refinements} currentStepIndex={currentStepIndex} projectId={project_id} />

            <Form projectId={project_id} currentStepIndex={currentStepIndex} isFirstStep={isFirstStep} isLastStep={isLastStep} back={back} next={next}>
                {step}
            </Form>
        </>
    );
}