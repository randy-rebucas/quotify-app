import Form from "@/app/ui/estimation/area-breakdown/form";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import Popup from "@/app/ui/estimation/popup";
import LinearCover from "@/app/ui/linear-cover";
import StaggerCover from "@/app/ui/stagger-cover";


export default function Page() {

    const introductionColors: string[] = ['bg-blue1', 'bg-blue2', 'bg-blue3', 'bg-blue4', 'bg-blue5'];

    const mainColors: string[] = ['bg-blue2', 'bg-gray4A', 'bg-gray4A', 'bg-white', 'bg-white'];

    return (
        <div className="wrapper theme theme-blue">
            {/* <!--
            /*  Close Popup Block
            /*  This block shows on close popup button click
            /-->  */}
            <Popup />

            <IntroWrapper>
                <div className="intro-menu lg:col-start-2">
                    <div className="h-full">
                        <div className="p-30 lg:pt-col2">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <h1 className="font-latobold text-white">
                                        02:
                                    </h1>
                                    <h4 className="font-latolight mt-3 text-white">
                                        Area breakdown
                                    </h4>
                                    <div className="estimation-col__bar mt-6 mb-6"></div>
                                    <div className="estimation-col__content">
                                        <div className="step-indicator">
                                            <span className="font-latoblack">02.1:</span> <br />
                                            area definition
                                        </div>
                                        <div className="step-indicator">
                                            <span className="font-latoblack">02.2:</span> <br />
                                            proportion breakdown
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IntroWrapper>

            <MainWrapper>
                <div className="lg:col-start-1 flex flex-col justify-start items-start w-full h-full">
                    <div className="h-full">
                        <div className="absolute top-0 left-0 flex flex-col items-end p-30">
                            <a href="estimation-blue.html" className="js-prevbtn focus:shadow-outline focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="77" height="62" viewBox="0 0 77 62" fill="none">
                                    <path opacity="0.3" d="M30.8994 61.1465L32.9858 59.0886L5.56387 31.9448L77 31.9449L77 29.0051L5.96129 29.0051L33.1845 2.15526L31.0981 -0.000564773L2.66426e-06 30.6709L30.8994 61.1465Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className="p-30 lg:pt-col2">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <h1 className="font-latobold text-white">
                                        02:
                                    </h1>
                                    <h4 className="font-latolight mt-3 text-white">
                                        Area breakdown
                                    </h4>
                                    <div className="estimation-col__bar mt-6 mb-6"></div>
                                    <div className="estimation-col__content">
                                        <div className="js-step-indicator step-indicator active">
                                            <span className="font-latoblack">02.1:</span> <br />
                                            area definition
                                        </div>
                                        <div className="js-step-indicator step-indicator">
                                            <span className="font-latoblack">02.2:</span> <br />
                                            proportion breakdown
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Form />
            </MainWrapper>

            <LinearCover colors={introductionColors} target={2} className="introduction" />

            <StaggerCover colors={mainColors} target={2} className="main" />

        </div >
    )
}