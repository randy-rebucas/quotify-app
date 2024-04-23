import { ProjectRequirementContextProvider } from "@/app/context/ProjectRequirementMenuContext";
import { fetchMenus } from "@/app/lib/data";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import Popup from "@/app/ui/estimation/popup";
import Form from "@/app/ui/estimation/requirement/form";
import TabForm from "@/app/ui/estimation/requirement/tab-form";
import LinearCover from "@/app/ui/linear-cover";
import StaggerCover from "@/app/ui/stagger-cover";

export default async function Page() {
    const menus = await fetchMenus('requirement');

    const introductionColors: string[] = ['bg-green1', 'bg-green2', 'bg-green3', 'bg-green4', 'bg-green5'];

    const mainColors: string[] = ['bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-white', 'bg-green'];

    return (
        <ProjectRequirementContextProvider>
            <div className="wrapper theme theme-green">

                <Popup />

                <IntroWrapper>
                    <div className="intro-menu col-start-3">
                        <div className="h-full">
                            <div className="p-30 pt-col3">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <h1 className="font-latobold text-white">
                                            03:
                                        </h1>
                                        <h4 className="font-latolight mt-3 text-white">
                                            Requirements
                                        </h4>
                                        <div className="estimation-col__bar bg-white mt-6 mb-6"></div>
                                        <div className="estimation-col__content">
                                            <div className="step-indicator">
                                                <span className="font-latoblack">03.1:</span> <br />
                                                finish and certifications
                                            </div>
                                            <div className="step-indicator">
                                                <span className="font-latoblack">03.2:</span> <br />
                                                MEP features
                                            </div>
                                            <div className="step-indicator">
                                                <span className="font-latoblack">03.3:</span> <br />
                                                base building conditions
                                            </div>
                                            <div className="step-indicator">
                                                <span className="font-latoblack">03.4:</span> <br />
                                                technology
                                            </div>
                                            <div className="step-indicator">
                                                <span className="font-latoblack">03.5:</span> <br />
                                                furniture and furnishing
                                            </div>
                                            <div className="step-indicator">
                                                <span className="font-latoblack">03.6</span> <br />
                                                review
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </IntroWrapper>

                <MainWrapper>
                    <div data-col="1" className="js-tabs absolute top-[52px] z-30 right-20">
                        <div className="bg-darkgreen mb-1 h-[55px] w-[43px] flex items-center justify-center rotate-180">
                            <a href="#" className="js-tabs__toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none">
                                    <path d="M11 2L3 10L11 18" stroke="#99B9B6" stroke-width="3" />
                                </svg>
                            </a>
                        </div>
                        <h3>
                            <a data-menu="A" className="js-tabs-tab tabs-tab active">
                                A:
                            </a>
                        </h3>
                        <TabForm />
                    </div>


                    <Form menus={menus} />

                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />
            </div>
        </ProjectRequirementContextProvider>
    )
}