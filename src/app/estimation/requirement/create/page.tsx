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
                        <h3>
                            <a data-menu="A" className="js-tabs-tab tabs-tab active">
                                A:
                            </a>
                        </h3>
                        <TabForm />
                        {/* <div className="bg-darkgreen relative">
                            <a href="#" className="js-new-estimate new-estimate h-[55px] w-[43px] flex items-center justify-center">
                                <span className="new-estimate__icon p-2">&nbsp;</span>
                            </a>
                            <div className="hidden flex-col absolute right-0 top-[55px] px-30 pt-30 pb-4 text-md bg-darkgreen">
                                <h3 className="text-green mb-3">new variation</h3>

                                <form action="navigation-green-cols-2.html" className="flex flex-col justify-end items-end">
                                    <div className="flex mb-1 text-white items-center justify-start w-full">
                                        <span className="text-green">from</span>
                                        <button id="custom-dropdown" data-dropdown-toggle="dropdown"
                                            className="text-white border-green border-solid border-b-2 border-l-0 border-r-0 border-t-0 font-medium text-md px-5 py-2 text-center flex justify-stretch items-center w-full outline-none"
                                            type="button">
                                            estimate A
                                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                    strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        <div id="dropdown"
                                            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="custom-dropdown">
                                                <li>
                                                    <a href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">estimate
                                                        A</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="js-count-chars flex flex-col items-end w-full mb-3">
                                        <div
                                            className="text-white flex border-b-2 border-l-0 border-r-0 border-t-0 outline-none border-solid border-green w-full">
                                            <h3 className="text-green py-2">B:</h3>
                                            <input className="js-count-chars__field bg-transparent px-3 py-2 outline-none text-white placeholder-green"
                                                maxLength={40} type="text" placeholder="name" />
                                        </div>
                                        <div className="js-count-chars__status text-[10px] font-lato text-green mt-1">0/40</div>
                                    </div>

                                    <div className="js-count-chars flex flex-col items-end w-full mb-3">
                                        <textarea
                                            className="js-count-chars__field bg-transparent h-[80px] py-2 text-white placeholder-green border-b-2 border-l-0 border-r-0 border-t-0 outline-none border-solid border-green w-full"
                                            name="description" maxLength={250} placeholder="description"></textarea>
                                        <div className="js-count-chars__status text-[10px] font-lato text-green mt-1">0/250</div>
                                    </div>

                                    <button type="submit">
                                        <h3 className="text-green">create</h3>
                                    </button>
                                </form>
                            </div>
                        </div> */}
                    </div>


                    <Form menus={menus}/>

                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />
            </div>
        </ProjectRequirementContextProvider>
    )
}