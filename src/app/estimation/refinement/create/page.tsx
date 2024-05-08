import { ProjectRequirementContextProvider } from "@/app/context/ProjectRequirementMenuContext";
import { fetchMenuByPageHandled } from "@/app/lib/data";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import Popup from "@/app/ui/estimation/popup";
import Form from "@/app/ui/estimation/refinement/form";
import TabForm from "@/app/ui/estimation/refinement/tab-form";
import LinearCover from "@/app/ui/linear-cover";
import StaggerCover from "@/app/ui/stagger-cover";

export default async function Page() {

    const menus = await fetchMenuByPageHandled('refinement');

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
                                            {menus.map((menu, index) => (
                                                <div key={index} className='step-indicator'>
                                                    <span className="font-latoblack">04.{index + 1}:</span> <br />
                                                    {menu.title}
                                                </div>
                                            ))}
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

                    <Form menus={menus}/>

                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />
            </div>
        </ProjectRequirementContextProvider>
    )
}