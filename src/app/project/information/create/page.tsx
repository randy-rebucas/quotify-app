
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
        if (!isLastStep) return next()
        alert("Successful Account Creation")
    }

    return (
        <div className="wrapper theme theme-darkblue">
            <div className="js-show-on-load wrapper__content navigation animate fade-in delay-last grid">
                <div className="absolute top-0 right-0 flex flex-col items-end p-30">
                    <a href="#" className="js-close-project">
                        <Image
                            src="/images/icon-close-white.svg"
                            width={50}
                            height={50}
                            alt="close"
                        />
                    </a>
                </div>

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

            <div className="js-hide-on-load wrapper__content navigation grid">

                <div className="flex flex-col justify-start items-start w-full h-full">
                    <div className="h-full">
                        <div className="absolute top-0 left-0 flex flex-col items-end p-30">
                            {!isFirstStep && (
                                <button type="button" onClick={back} className="focus:shadow-outline focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="62" viewBox="0 0 77 62" fill="none">
                                        <path opacity="0.3" d="M30.8994 61.1465L32.9858 59.0886L5.56387 31.9448L77 31.9449L77 29.0051L5.96129 29.0051L33.1845 2.15526L31.0981 -0.000564773L2.66426e-06 30.6709L30.8994 61.1465Z" fill="white" />
                                    </svg>
                                </button>
                            )}
                        </div>

                        <InformationNav />
                    </div>
                </div>

                <form onSubmit={onSubmit} id="signUpForm" action="estimation-blue.html" className="lg:col-span-4 col-span-12 h-full w-full overflow-y-scroll overflow-x-hidden">

                    {step}

                    <div
                        className="lg:col-start-4 lg:col-span-1 col-span-12 row-span-3 flex flex-col justify-between items-start w-full h-full relative">
                        <div className="absolute top-0 right-0 pulsate flex flex-col items-end w-full p-30">
                            <button data-tooltip-target="tooltip-step-4" data-tooltip-trigger="click" type="button"
                                className="outline-none">
                                <div className="tooltip pulsate flex flex-col items-end">
                                    <svg className="tooltip__icon" xmlns="http://www.w3.org/2000/svg" width="41" height="35" viewBox="0 0 41 35"
                                        fill="none">
                                        <path opacity="0.4"
                                            d="M33.9 19C34 18.3 34 17.6 34 17C34 7.6 26.4 0 17 0C7.6 0 0 7.6 0 17C0 26.4 7.6 34 17 34C20.4 34 23.6 33 26.2 31.3C27.6 33.5 30.1 35 33 35C37.4 35 41 31.4 41 27C41 22.9 37.9 19.5 33.9 19Z"
                                            fill="#003855" />
                                        <circle cx="17.0002" cy="17.0002" r="7.65649" fill="#003855" />
                                        <circle cx="22.464" cy="22.464" r="1.82143" fill="#003855" />
                                        <path
                                            d="M31.9458 29.0554L32.0886 28.8169L32.0225 28.778H31.9458V29.056V29.0554ZM31.9458 25.7221V26H32.0225L32.0892 25.9606L31.9458 25.7221ZM34.7254 24.0554H35.0034C35.0034 24.0062 34.9904 23.9579 34.9656 23.9154C34.9409 23.8729 34.9053 23.8377 34.8625 23.8135C34.8197 23.7892 34.7712 23.7768 34.7221 23.7774C34.6729 23.778 34.6247 23.7916 34.5826 23.8169L34.7254 24.0554ZM34.7254 30.7221L34.5826 30.9606C34.6247 30.9859 34.6729 30.9995 34.7221 31.0001C34.7712 31.0007 34.8197 30.9883 34.8625 30.964C34.9053 30.9398 34.9409 30.9046 34.9656 30.8621C34.9904 30.8196 35.0034 30.7713 35.0034 30.7221H34.7254ZM36.3599 26.4064L36.1631 26.2102L35.77 26.6032L35.9668 26.8L36.3593 26.4064H36.3599ZM37.5385 28.3711L37.7353 28.5673L38.1283 28.1743L37.9315 27.978L37.5385 28.3711ZM37.9321 26.8L38.1283 26.6032L37.7353 26.2102L37.539 26.4064L37.9321 26.8ZM35.9668 27.978L35.77 28.1743L36.1631 28.5673L36.3599 28.3711L35.9668 27.978ZM31.9458 28.7775H30.8339V29.3334H31.9458V28.7775ZM30.8339 28.7775C30.7974 28.7775 30.7612 28.7704 30.7274 28.7565C30.6937 28.7425 30.663 28.722 30.6372 28.6962C30.6114 28.6704 30.5909 28.6397 30.5769 28.606C30.563 28.5722 30.5559 28.536 30.5559 28.4995H30C30 28.9609 30.373 29.3334 30.8339 29.3334V28.7775ZM30.5559 28.4995V26.278H30V28.5006H30.5559V28.4995ZM30.5559 26.2774C30.5559 26.124 30.6799 26 30.8339 26V25.4441C30.373 25.4441 30 25.8166 30 26.278H30.5559V26.2774ZM30.8339 26H31.9458V25.4441H30.8339V26ZM32.0886 25.9606L34.8683 24.2939L34.5826 23.8169L31.8029 25.4836L32.0886 25.9606ZM34.4475 24.0554V30.7221H35.0034V24.0554H34.4475ZM34.8683 30.4836L32.0886 28.8169L31.8029 29.2939L34.5826 30.9606L34.8683 30.4836ZM35.9668 26.8L37.5385 28.3711L37.9315 27.978L36.3593 26.4064L35.9663 26.8H35.9668ZM37.539 26.4064L35.9668 27.978L36.3599 28.3711L37.9321 26.8L37.539 26.4064Z"
                                            fill="#003855" />
                                    </svg>
                                </div>
                            </button>

                            <div id="tooltip-step-4" role="tooltip"
                                className="tooltip__content absolute right-5 px-3 py-2 w-[211px] text-[14px] z-10 invisible opacity-0 text-[#003855] text-opacity-70">
                                based on the square footage of your space and the average expected occupancy, your space density will be:
                                <span className="font-latolight">12 sqft/person</span>.<br /><br />
                                The industry standard is 10 sqft/person.
                            </div>
                        </div>
                        
                        <div className="p-30 w-full flex items-end justify-end h-full">
                            <button className="js-nextbtn focus:shadow-outline focus:outline-none" type="submit" onClick={next}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="0 0 78 63"
                                    fill="none">
                                    <path
                                        d="M46.4 0L44.3 2.1L71.9 29.8H0V32.8H71.5L44.1 60.2L46.2 62.4L77.5 31.1L46.4 0Z"
                                        fill="#003855" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <ColorAnimation colors={introductionColors} target={2} className='introduction' isLinear={true} />

            <ColorAnimation colors={mainColors} target={2} className='main hidden' isLinear={false} />
        </div>
    )
}