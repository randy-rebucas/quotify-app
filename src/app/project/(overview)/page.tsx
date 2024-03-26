import { Metadata } from "next";
import Image from "next/image";
import Popup from "../../ui/popup";
import { lato } from '@/app/ui/fonts';
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Estimation'
};

export default function Page() {
    
    const estimationNav = {
        zIndex: 99999
    };

    return (
        <>
            <Link href="/project/information" id="js-enable-estimation-nav" style={estimationNav} className="js-autoplay-show enable-estimation-nav hidden">
                <Image
                    src="/images/icon-enable.png"
                    width={167}
                    height={167}
                    alt="next"
                />
            </Link>

            <Popup />

            <div className="js-autoplay-show wrapper__content animate fade-in delay-100 grid">
                <div className="col-span-2 col-start-1 flex flex-col justify-start items-start w-full h-full">
                    <div
                        className="js-autoplay-true absolute col-span-2 col-start-1 row-span-3 p-30 flex flex-col justify-start items-start">
                        <h1 className="pt-[168px] font-bold font-latoblack xl:text-6xl md:text-5xl text-4xl text-white">
                            project definition</h1>
                    </div>
                    <div className="js-autoplay-show js-estimation-col estimation-col grid grid-cols-2 grid-flow-col h-full">
                        <div className="js-estimation-col__one estimation-col__one p-30 lg:pt-col1">
                            <div className="flex flex-col justify-center h-full">
                                <div>
                                    <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">01:</h2>
                                    <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">Project
                                        information
                                    </h4>
                                    <div className="estimation-col__bar mt-6 mb-6"></div>
                                    <div className="estimation-col__content animate fade-in delay-0">
                                        <p className={`${lato.className} text-white pb-3`}>Here is where you will add ingot to start shaping your
                                            project
                                            and letting the system know what you have in mind so we can come up with a cost
                                            together.</p>
                                        <p className="text-white">system know what you have in mind so we can come up with a
                                            cost
                                            together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="js-estimation-col__two estimation-col__two p-30 lg:pt-col2">
                            <div className="flex flex-col justify-center h-full">
                                <div>
                                    <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">02:</h2>
                                    <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">Area
                                        breakdown</h4>
                                    <div className="estimation-col__bar mt-6 mb-6"></div>
                                    <div className="estimation-col__content animate fade-in delay-0">
                                        <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                            project
                                            and letting the system know what you have in mind so we can come up with a cost
                                            together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 col-start-3 flex flex-col justify-start items-start w-full h-full">
                    <div
                        className="js-autoplay-true absolute col-span-2 col-start-3 row-span-3 p-30 flex flex-col justify-start items-start">
                        <h1 className="pt-[168px] font-bold font-latoblack xl:text-6xl md:text-5xl text-4xl text-white">
                            project estimation</h1>
                    </div>


                    <div className="absolute top-0 right-0 pulsate flex flex-col items-end w-full p-30">
                        <button data-tooltip-target="tooltip-step-1" data-tooltip-trigger="click" type="button"
                            className="outline-none">
                            <div className="tooltip pulsate flex flex-col items-end">
                                <Image
                                    src="/images/icon-tooltip.svg"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="tooltip__icon w-full h-auto"
                                    alt="tooltip"
                                />
                            </div>
                        </button>

                        <div id="tooltip-step-1" role="tooltip"
                            className="tooltip__content pl-30 pr-10 py-2 z-10 invisible opacity-0 w-full">
                            Throughout your experience, you can toggle the tips to help guide you through each
                            section.
                        </div>
                    </div>

                    <div className="js-autoplay-show close-btn hidden opacity-0 absolute top-0 right-0 flex-col items-end p-30 z-30">
                        <a href="#" className="js-close-project">
                            <Image
                                src="/images/icon-close.svg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto"
                                alt="close"
                            />
                        </a>
                    </div>

                    <div className="js-estimation-col estimation-col js-autoplay-show grid grid-cols-3 grid-flow-col h-full">
                        <div className="js-estimation-col__three estimation-col__three p-30 lg:pt-col3">
                            <div className="flex flex-col justify-center h-full">
                                <div>
                                    <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">03:</h2>
                                    <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">Requirements
                                    </h4>
                                    <div className="estimation-col__bar mt-6 mb-6"></div>
                                    <div className="estimation-col__content animate fade-in delay-0">
                                        <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                            project
                                            and letting the system know what you have in mind so we can come up with a cost
                                            together.</p>
                                        <p className="text-white">system know what you have in mind so we can come up with a
                                            cost
                                            together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="js-estimation-col__four estimation-col__four p-30 lg:pt-col4">
                            <div className="flex flex-col justify-center h-full">
                                <div>
                                    <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">04:</h2>
                                    <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">Refinements
                                    </h4>
                                    <div className="estimation-col__bar mt-6 mb-6"></div>
                                    <div className="estimation-col__content animate fade-in delay-0">
                                        <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                            project
                                            and letting the system know what you have in mind so we can come up with a cost
                                            together.</p>
                                        <p className="text-white">system know what you have in mind so we can come up with a
                                            cost
                                            together.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="js-estimation-col__five estimation-col__five p-30 lg:pt-col5">
                            <div className="flex flex-col justify-center h-full">
                                <div>
                                    <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">05:</h2>
                                    <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">Estimate
                                        summary
                                    </h4>
                                    <div className="estimation-col__bar mt-6 mb-6"></div>
                                    <div className="estimation-col__content animate fade-in delay-0">
                                        <p className="text-white">Here is where you will add ingot to start shaping your project
                                            and
                                            letting the system know what you have in mind so we can come up with a cost
                                            together.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}