
'use client';

import ColorAnimation from "@/app/ui/color-animation";
import InformationNav from "@/app/ui/information-nav";
import Image from "next/image";
import { useMultistepForm } from "../../../../../useMultistepForm";
import Plan from "@/app/ui/information-forms/wrapper/forms/plan";
import Address from "@/app/ui/information-forms/wrapper/forms/address";
import Area from "@/app/ui/information-forms/wrapper/forms/area";
import HeadCount from "@/app/ui/information-forms/wrapper/forms/head-count";
import { FormEvent, useState } from "react";
import Popup from "@/app/ui/popup";
import Link from "next/link";

type FormData = {
    spaceName: string
    hasFloorPlan: boolean
    address: string
    hasAddress: boolean
    approximateSize: string
    rentableArea: string
    isBaseOnHeadCount: boolean
    targetHeadCount: string
    averageAttendance: string
    assignedSeat: string
}

const INITIAL_DATA: FormData = {
    spaceName: "",
    hasFloorPlan: false,
    address: "",
    hasAddress: false,
    approximateSize: '3000',
    rentableArea: '3000',
    isBaseOnHeadCount: false,
    targetHeadCount: "",
    averageAttendance: "",
    assignedSeat: "30"
}

export default function Page() {
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

    const introductionColors: string[] = ['bg-darkblue1', 'bg-darkblue2', 'bg-darkblue3', 'bg-darkblue4', 'bg-darkblue5'];

    const mainColors: string[] = ['bg-darkblue1', 'bg-gray4A', 'bg-gray4A', 'bg-white', 'bg-white'];

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        console.log('next');
        if (!isLastStep) return next()
        alert("Successful Account Creation")
    }

    return (
        <div className="wrapper theme theme-darkblue">
            {/* <!--
            /*  Close Popup Block
            /*  This block shows on close popup button click
            /-->  */}
            <Popup />

            {/* <!--
            /*  Wrapper Content
            /*  This block shows the main content
            /--> */}
            <div className="js-show-on-load wrapper__content navigation animate fade-in delay-last grid">
                {/* <!--
                /*  Close Popup Button
                /*  This block shows the close popup block
                /--> */}
                <div className="absolute top-0 right-0 flex flex-col items-end p-30">
                    <Link href="#" className="js-close-project">
                        <Image
                            src="/images/icon-close-white.svg"
                            width={50}
                            height={50}
                            alt="close"
                        />
                    </Link>
                </div>

                {/* <!--
                /*  Menu Introduction
                /*  This block shows on page introduction animation.
                /*  It will be hidden once animation is finished.                
                /--> */}
                <div className="intro-menu">
                    <div className="h-full">
                        <div className="p-30 lg:pt-col1">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <h1 className="font-latobold text-white">
                                        01:
                                    </h1>
                                    <h4 className="font-latolight mt-3 text-white">
                                        Project information
                                    </h4>
                                    <div className="estimation-col__bar mt-6 mb-6"></div>
                                    <div className="estimation-col__content">
                                        <div className="step-indicator">
                                            <span className="font-latoblack">01.1:</span> <br />
                                            plan upload
                                        </div>
                                        <div className="step-indicator">
                                            <span className="font-latoblack">01.2:</span> <br />
                                            address
                                        </div>
                                        <div className="step-indicator">
                                            <span className="font-latoblack">01.3:</span> <br />
                                            space size & rentable area
                                        </div>
                                        <div className="step-indicator">
                                            <span className="font-latoblack">01.4:</span> <br />
                                            headcount & staffing
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

                        <InformationNav currentIndex={currentStepIndex}/>
                    </div>
                </div>

                {/* <!--
                /*  Multi-step Form
                /*  This block contains all the steps in the Area Breakdown form            
                /--> */}
                <form onSubmit={onSubmit} className="lg:col-span-4 col-span-12 h-full w-full overflow-y-scroll overflow-x-hidden">
                    
                    {step}

                </form>
            </div>

            {/* <!--
            /*  Introduction Navigation Background Animation
            /*  This block is shown on page load.
            /*  This will be hidden once the navigation animation is finished.
            /--> */}
            <ColorAnimation colors={introductionColors} target={2} className='introduction' isLinear={true} />

            {/* <!--
            /*  Main Navigation Background
            /*  This block is hidden on page load.
            /*  This will be shown once the introduction navigation background animation is finished.
            /--> */}
            <ColorAnimation colors={mainColors} target={2} className='main hidden' isLinear={false} />
        </div>
    )
}