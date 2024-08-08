"use client";

import { useMultistepForm } from "@/app/hooks/useMultistepForm";
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

export default function FormWrapper({
    requirements_groups,
    project_id,
}: {
    requirements_groups: any[];
    project_id: string;
}) {
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <FinishAndCertification key={uuid()} requirements_groups={requirements_groups} />,
            <MepFeatures key={uuid()} requirements_groups={requirements_groups} />,
            <BaseBuildingConditions key={uuid()} requirements_groups={requirements_groups} />,
            <Technology key={uuid()} requirements_groups={requirements_groups} />,
            <FurnitureAndFurnishing key={uuid()} requirements_groups={requirements_groups} />,
            <Review key={uuid()} requirements_groups={requirements_groups} />,
        ]);

    return (
        <>
            <TabWrapper />

            <MenuWrapper requirementsGroups={requirements_groups} currentStepIndex={currentStepIndex} />

            <Form projectId={project_id} currentStepIndex={currentStepIndex} isFirstStep={isFirstStep} isLastStep={isLastStep} back={back} next={next} >
                {step}
            </Form >
        </>
    );
}