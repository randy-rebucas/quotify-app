"use client";

import { useMultistepForm } from "@/hooks/useMultistepForm";
import FinishAndCertification from "./steps/finish-and-certifications";
import MepFeatures from "./steps/mep-features";
import BaseBuildingConditions from "./steps/base-building-conditions";
import Technology from "./steps/technology";
import FurnitureAndFurnishing from "./steps/furniture-and-furnishing";
import Review from "./steps/review";
import { v4 as uuid } from "uuid";
import Form from "./form";
import TabWrapper from "./tab-wrapper";
import MenuWrapper from "./menu-wrapper";

type Props = {
    requirementGroups: any[];
    project_id: string;
}

export default function FormWrapper({
    requirementGroups,
    project_id,
}: Props) {
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <FinishAndCertification key={uuid()} requirementGroups={requirementGroups} />,
            <MepFeatures key={uuid()} requirementGroups={requirementGroups} />,
            <BaseBuildingConditions key={uuid()} requirementGroups={requirementGroups} />,
            <Technology key={uuid()} requirementGroups={requirementGroups} />,
            <FurnitureAndFurnishing key={uuid()} requirementGroups={requirementGroups} />,
            <Review key={uuid()} requirementGroups={requirementGroups} />,
        ]);

    return (
        <>
            <TabWrapper />

            <MenuWrapper requirementsGroups={requirementGroups} currentStepIndex={currentStepIndex} />

            <Form projectId={project_id} currentStepIndex={currentStepIndex} isFirstStep={isFirstStep} isLastStep={isLastStep} back={back} next={next} >
                {step}
            </Form >
        </>
    );
}