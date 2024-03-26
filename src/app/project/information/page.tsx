import { Metadata } from "next";
import Image from "next/image";
import ColorAnimation from "../../ui/color-animation";
import Popup from "../../ui/popup";
import { lato } from '@/app/ui/fonts';
import Link from "next/link";
import Buttons from "@/app/ui/buttons";
import Column from "@/app/ui/column";

export const metadata: Metadata = {
    title: 'Information'
};

export default function Page() {
    const colors: string[] = ['bg-gray1', 'bg-gray2', 'bg-gray3', 'bg-gray4', 'bg-gray5']

    return (
        <div className="wrapper theme theme-darkblue">
            <Popup />

            <div className="js-autoplay-show wrapper__content animate fade-in delay-last grid">
                <div className="col-span-2 col-start-1 flex flex-col justify-start items-start w-full h-full">
                    <div
                        className="js-autoplay-true1 absolute col-span-2 col-start-1 row-span-3 p-30 flex flex-col justify-start items-start">
                        <h1 className="font-bold font-latoblack xl:text-6xl md:text-5xl text-4xl text-white opacity-10">
                            project definition</h1>
                    </div>

                    <div className="js-estimation-col estimation-col grid grid-cols-2 grid-flow-col h-full">
                        {/* This block shows the first column (01: Project) */}
                        <Column
                            step={1}
                            stepInWord='one'
                            section='Area breakdown'
                            navigation="/project/information" >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your project
                                and letting the system know what you have in mind so we can come up with a cost together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a
                                cost together.</p>
                        </Column>
                        {/* This block shows the second column (02: Area breakdown) */}
                        <Column
                            step={2}
                            stepInWord='two'
                            section='Area breakdown'
                            navigation="/project/area-breakdown" >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your project
                                and letting the system know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                    </div>
                </div>

                <div className="col-span-3 col-start-3 flex flex-col justify-start items-start w-full h-full">
                    <div
                        className="js-autoplay-true1 absolute col-span-2 col-start-3 row-span-3 p-30 flex flex-col justify-start items-start">
                        <h1 className="font-bold font-latoblack xl:text-6xl md:text-5xl text-4xl text-white opacity-10">
                            project estimation</h1>
                    </div>


                    <div className="close-btn opacity-0 absolute top-0 right-0 flex flex-col items-end p-30 z-30">
                        <a href="#" className="js-close-project">
                            <Image
                                src="/images/icon-close.svg"
                                width={50}
                                height={50}
                                alt="close"
                            />
                        </a>
                    </div>

                    <div className="js-estimation-col estimation-col grid grid-cols-3 grid-flow-col h-full">
                    {/* This block shows the third column (03: Requirements) */}
                        <Column
                            step={3}
                            stepInWord='three'
                            section='Requirements'
                            navigation="/project/requirements" >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your project
                                and letting the system know what you have in mind so we can come up with a cost together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                        {/* This block shows the fourth column (04: Refinements) */}
                        <Column
                            step={4}
                            stepInWord='four'
                            section='Refinements'
                            navigation="/project/refinements" >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                project and letting the system know what you have in mind so we can come up with a cost together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                        {/* This block shows the fifth column (05: Estimate Summary) */}
                        <Column
                            step={5}
                            stepInWord='five'
                            section='Estimate summary'
                            navigation="/project/estimate-summary">
                            <p className="text-white">Here is where you will add ingot to start shaping your project and letting the system 
                            know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                    </div>
                </div>
            </div>
            <div className="js-wrapper__cover wrapper__cover introduction">
                <div className="js-linear-anim linear-anim el">
                    <div className="js-el el bg-gray1"></div>
                    <div className="js-el el bg-gray2"></div>
                    <div className="js-el el bg-gray3 border-left-dashed relative"></div>
                    <div className="js-el el bg-gray4"></div>
                    <div className="js-el el bg-gray5"></div>
                </div>
            </div>
            <div className="js-wrapper__cover wrapper__cover main hidden">
                <div className="js-staggering-anim staggering-anim">
                    <div className="js-el el bg-blue"></div>
                    <div className="js-el el bg-gray2"></div>
                    <div className="js-el el bg-gray3 border-left-dashed relative"></div>
                    <div className="js-el el bg-gray4"></div>
                    <div className="js-el el bg-gray5"></div>
                </div>
            </div>
            {/* <ColorAnimation colors={colors} target={2} /> */}
        </div>
    )
}