"use client";

import { useMultistepForm } from "@/hooks/useMultistepForm";
import Flooring from "./steps/flooring";
import Furniture from "./steps/furniture";
import Partition from "./steps/partition";
import { v4 as uuid } from "uuid";
import Form from "./form";
import TabWrapper from "./tab-wrapper";
import MenuWrapper from "./menu-wrapper";

type Props = {
    refinements: any[];
    projectId: string;
};

export default function FormWrapper({
    refinements,
    projectId,
}: Props) {

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <Flooring
                key={uuid()}
                projectId={projectId}
                refinements={refinements}
            />,
            <Furniture
                key={uuid()}
                projectId={projectId}
                refinements={refinements}
            />,
            <Partition
                key={uuid()}
                projectId={projectId}
                refinements={refinements}
            />,
        ]);

    return (
        <>
            <TabWrapper projectId={projectId} />

            <MenuWrapper refinements={refinements} currentStepIndex={currentStepIndex} projectId={projectId} />

            <Form projectId={projectId} currentStepIndex={currentStepIndex} isFirstStep={isFirstStep} isLastStep={isLastStep} back={back} next={next}>
                {step}
            </Form>
        </>
    );
}