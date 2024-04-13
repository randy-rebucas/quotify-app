import { ProjectRequirementContextProvider } from "@/app/context/ProjectRequirementMenuContext";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import Popup from "@/app/ui/estimation/popup";
import Form from "@/app/ui/estimation/refinement/form";
import TabForm from "@/app/ui/estimation/refinement/tab-form";
import LinearCover from "@/app/ui/linear-cover";
import StaggerCover from "@/app/ui/stagger-cover";

export default function Page() {

    const introductionColors: string[] = ['bg-yellow1', 'bg-yellow2', 'bg-yellow3', 'bg-yellow4', 'bg-yellow5'];

    const mainColors: string[] = ['bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-white', 'bg-yellow'];

    return (
        <ProjectRequirementContextProvider>
            <div className="wrapper theme theme-yellow">

                <Popup />

                <IntroWrapper>
                    <div className="intro-menu col-start-4">
                        <div className="h-full">
                            <div className="p-30 pt-col3">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <h1 className="font-latobold text-black">
                                            04:
                                        </h1>
                                        <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-black">
                                            Refinements
                                        </h4>
                                        <div className="estimation-col__bar bg-black mt-6 mb-6"></div>
                                        <div className="estimation-col__content">
                                            <div className="step-indicator">
                                                <span className="font-latoblack">04.1:</span> <br />
                                                flooring
                                            </div>
                                            <div className="step-indicator">
                                                <span className="font-latoblack">04.2:</span> <br />
                                                furniture
                                            </div>
                                            <div className="step-indicator">
                                                <span className="font-latoblack">04.3:</span> <br />
                                                partitions
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </IntroWrapper>

                <MainWrapper>
                    <div data-col="1" className="js-tabs absolute top-[7.037vh] z-30 right-20">
                        <h3>
                            <a data-menu="A" className="js-tabs-tab tabs-tab active">
                                A:
                            </a>
                        </h3>

                        <TabForm />
                    </div>

                    <div data-menu="A" className="js-main-menu menu col-start-5 animate fade-in-2 bg-yellow flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
                        <div className="h-full flex flex-col justify-between">

                            <div className="estimation-col__header px-30">
                                <div className="flex items-end justify-start mt-[7.593vh]">
                                    <h2 className="opacity-60">Main estimation</h2>
                                </div>
                                <p className="mt-3 font-latolight">this is a short description for this estimate.</p>
                            </div>

                            <div className="flex flex-col justify-between h-full mt-[8.519vh]">
                                <div className="p-30">
                                    <div className="js-main-menu__header">
                                        <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-black">
                                            04:
                                        </h2>
                                        <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-black">
                                            Refinements
                                        </h4>
                                        <div className="estimation-col__bar bg-black mt-6 mb-6"></div>
                                    </div>
                                    <div className="js-main-menu__content estimation-col__content">
                                        <div className="js-step-indicator step-indicator js-has-sub-step active">
                                            <span className="font-latoblack">04.1:</span> <br />
                                            flooring
                                            <div className="js-sub-step hidden pt-3">
                                                <div className="js-step-indicator step-indicator pl-3" data-category="office space"></div>
                                                <div className="js-step-indicator step-indicator pl-3" data-category="reception"></div>
                                            </div>
                                        </div>
                                        <div className="js-step-indicator step-indicator js-has-sub-step">
                                            <span className="font-latoblack">04.2:</span> <br />
                                            furniture
                                            <div className="js-sub-step hidden pt-3">
                                                <div className="js-step-indicator step-indicator pl-3" data-category="office space"></div>
                                                <div className="js-step-indicator step-indicator pl-3" data-category="reception"></div>
                                            </div>
                                        </div>
                                        <div className="js-step-indicator step-indicator js-has-sub-step">
                                            <span className="font-latoblack">04.3:</span> <br />
                                            partitions
                                            <div className="js-sub-step hidden pt-3">
                                                <div className="js-step-indicator step-indicator pl-3" data-category="office space"></div>
                                                <div className="js-step-indicator step-indicator pl-3" data-category="reception"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-darkyellow p-30 flex items-center sticky w-full bottom-0 justify-between text-white">
                                    <span className="text-[18px] leading-[24px] font-lato">cost estimate <br />per square foot</span>
                                    <span className="text-[53px] font-latoblack">$55</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper__inner col-span-4 h-full w-full relative overflow-y-scroll overflow-x-hidden">
                        <Form />
                    </div>
                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />
            </div>
        </ProjectRequirementContextProvider>
    )
}