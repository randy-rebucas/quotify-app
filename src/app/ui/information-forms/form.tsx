'use client';

import { FormEvent, useState } from "react";
import Plan from "./wrapper/forms/plan";
import Address from "./wrapper/forms/address";
import Area from "./wrapper/forms/area";
import HeadCount from "./wrapper/forms/head-count";
import { useMultistepForm } from "../../../../useMultistepForm";
import InfoMenu from "./info-menu";
import { FormData, INITIAL_DATA } from "./entities";
import Wrapper from "./wrapper/wrapper";
import { redirect } from "next/navigation";

export default function Form() {
    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <Plan {...data} updateFields={updateFields} key={1} />,
            <Address {...data} updateFields={updateFields} key={2} />,
            <Area {...data} updateFields={updateFields} key={3} />,
            <HeadCount {...data} updateFields={updateFields} key={4} />
        ])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        console.log('next');
        if (!isLastStep) return next()
        alert("Successful Account Creation")

        // redirect('/login')
    }

    return (
        <div className="js-hide-on-load wrapper__content navigation md:grid hidden">
            {/* <!--
                /*  Menu Main
                /*  This block is hidden on page load.
                /*  It will be shown after page introduction animation is finished.
                /--> */}
            <div className="flex flex-col justify-start items-start w-full h-full">
                <div className="h-full">
                    {/* <!--
                        /*  Back Button
                        /*  This block shows the back button
                        /*  that goes back to estimation page
                        /--> */}
                    {!isFirstStep && (
                        <div className="absolute top-0 left-0 flex flex-col items-end p-30">
                            <button type="button" onClick={back} className="focus:shadow-outline focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="77" height="62" viewBox="0 0 77 62" fill="none">
                                    <path opacity="0.3" d="M30.8994 61.1465L32.9858 59.0886L5.56387 31.9448L77 31.9449L77 29.0051L5.96129 29.0051L33.1845 2.15526L31.0981 -0.000564773L2.66426e-06 30.6709L30.8994 61.1465Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    )}

                    <InfoMenu currentIndex={currentStepIndex} />
                </div>
            </div>

            {/* <!--
                /*  Multi-step Form
                /*  This block contains all the steps in the Area Breakdown form            
                /--> */}
            <form onSubmit={onSubmit} className="lg:col-span-4 col-span-12 h-full w-full overflow-y-scroll overflow-x-hidden">

                <Wrapper stepIndex={currentStepIndex}>
                    {step}
                </Wrapper>

            </form>
        </div>
    )
}