'use client';

import Plan from "./steps/plan";
import Address from "./steps/address";
import Area from "./steps/area";
import HeadCount from "./steps/head-count";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { v4 as uuid } from 'uuid'
import Form from "./form";

export default function FormWrapper({ menus }: { menus: any[] }) {

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <Plan key={uuid()} />,
            <Address key={uuid()} />,
            <Area key={uuid()} />,
            <HeadCount key={uuid()} />
        ])

    return (
        <Form currentStepIndex={currentStepIndex} isFirstStep={isFirstStep} isLastStep={isLastStep} back={back} menus={menus} next={next}>
            {step}
        </Form>
    )
}
