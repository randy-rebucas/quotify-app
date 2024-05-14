import Actions from "@/app/ui/estimation/estimate-summary/actions";
import Column from "@/app/ui/estimation/estimate-summary/column";
import Form from "@/app/ui/estimation/estimate-summary/form";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import Popup from "@/app/ui/estimation/popup";
import LinearCover from "@/app/ui/linear-cover";
import StaggerCover from "@/app/ui/stagger-cover";

export default function Summary() {

    const introductionColors: string[] = ['bg-red1', 'bg-red2', 'bg-red3', 'bg-red4', 'bg-red5'];

    const mainColors: string[] = ['bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-white', 'bg-red'];

    return (
        <div className="wrapper theme theme-red">
            <Popup />

            <IntroWrapper>
                <div className="intro-menu lg:col-start-5">
                    <div className="h-full">
                        <div className="p-30 lg:pt-col3">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <h1 className="font-latobold">
                                        05:
                                    </h1>
                                    <h4 className="font-latolight mt-3">
                                        Estimate summary
                                    </h4>
                                    <div className="estimation-col__bar mt-6 mb-6"></div>
                                    <div className="estimation-col__content">
                                        <p>Here is where you will add ingot to start shaping your project and leting the system know what you have in mind so we can come up with a cost together</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IntroWrapper>

            <MainWrapper>
                <div className="js-main-column lg:col-start-5 flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
                    <div className="estimation-col w-full h-full">
                        <div className="p-30 flex flex-col justify-between relative z-10 w-full h-full">
                            <div className="pt-[52px]">

                                <h2 className="font-bold font-latoblack xl:text-4xl md:text-3xl text-2xl text-white mb-10">
                                    Project<br />MMoser</h2>

                                <div className="file__border bg-white"></div>

                                <div className="text-white mt-4 pt-2">
                                    510 W Hastings St.<br />
                                    Suite 1300<br />
                                    Vancouver, BC<br />
                                    V6B 1L8
                                </div>

                                <div className="text-white mt-2 pt-[44px]">
                                    <Form />
                                </div>
                            </div>
                            <Actions />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 col-span-12 h-full w-full relative overflow-y-scroll overflow-x-hidden">
                    <div className="grid grid-cols-4 overflow-y-visible">
                        <Column id={1}>
                            <div className="estimation-col__header pt-[70px] pb-[20px] px-[30px]">
                                <div className="flex items-end justify-start">
                                    <h2 className="opacity-60 font-latobold"><span className="font-latoblack">A:</span>&nbsp; Main<br />estimate</h2>
                                </div>
                                <p className="mt-3 font-latolight text-black text-opacity-60">this is a short description for this estimate.</p>
                            </div>

                            <div className="flex flex-col justify-between text-white relative">
                                <svg className="absolute top-[20px] left-[30px]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M6.15878 12.3176C2.74777 12.3176 0 9.5698 0 6.15878C0 2.74777 2.74777 0 6.15878 0C9.5698 0 12.3176 2.74777 12.3176 6.15878C12.3176 9.5698 9.5698 12.3176 6.15878 12.3176ZM6.15878 0.947505C3.26889 0.947505 0.947505 3.26889 0.947505 6.15878C0.947505 9.04868 3.26889 11.3701 6.15878 11.3701C9.04868 11.3701 11.3701 9.04868 11.3701 6.15878C11.3701 3.26889 9.04868 0.947505 6.15878 0.947505Z" fill="#505050" />
                                    <path d="M10.7461 10.0732L15.0004 14.3275L14.3305 14.9974L10.0762 10.7431L10.7461 10.0732Z" fill="#505050" />
                                </svg>
                                <input className="pl-[50px] w-full bg-black bg-opacity-10 !text-[#505050] placeholder:!text-[#505050] p-[15px] outline-none border-none" value="" placeholder="search" />
                            </div>
                        </Column>

                        <Column id={2}>
                            <div className="estimation-col__header pt-[70px] pb-[20px] px-[30px]">
                                <div className="flex items-end justify-start">
                                    <h2 className="opacity-60 font-latobold"><span className="font-latoblack">B:</span>&nbsp; High-End<br />estimate</h2>
                                </div>
                                <p className="mt-3 font-latolight text-black text-opacity-60">this is a short description for this estimate.</p>
                            </div>

                            <div className="flex flex-col justify-between text-white relative">
                                <svg className="absolute top-[20px] left-[30px]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M6.15878 12.3176C2.74777 12.3176 0 9.5698 0 6.15878C0 2.74777 2.74777 0 6.15878 0C9.5698 0 12.3176 2.74777 12.3176 6.15878C12.3176 9.5698 9.5698 12.3176 6.15878 12.3176ZM6.15878 0.947505C3.26889 0.947505 0.947505 3.26889 0.947505 6.15878C0.947505 9.04868 3.26889 11.3701 6.15878 11.3701C9.04868 11.3701 11.3701 9.04868 11.3701 6.15878C11.3701 3.26889 9.04868 0.947505 6.15878 0.947505Z" fill="#505050" />
                                    <path d="M10.7461 10.0732L15.0004 14.3275L14.3305 14.9974L10.0762 10.7431L10.7461 10.0732Z" fill="#505050" />
                                </svg>
                                <input className="pl-[50px] w-full bg-black bg-opacity-10 !text-[#505050] placeholder:!text-[#505050] p-[15px] outline-none border-none" value="" placeholder="search" />
                            </div>
                        </Column>

                        <Column id={3}>
                            <div className="estimation-col__header pt-[70px] pb-[20px] px-[30px]">
                                <div className="flex items-end justify-start">
                                    <h2 className="opacity-60 font-latobold"><span className="font-latoblack">C:</span>&nbsp; Low<br />estimate</h2>
                                </div>
                                <p className="mt-3 font-latolight text-black text-opacity-60">this is a short description for this estimate.</p>
                            </div>

                            <div className="flex flex-col justify-between text-white relative">
                                <svg className="absolute top-[20px] left-[30px]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M6.15878 12.3176C2.74777 12.3176 0 9.5698 0 6.15878C0 2.74777 2.74777 0 6.15878 0C9.5698 0 12.3176 2.74777 12.3176 6.15878C12.3176 9.5698 9.5698 12.3176 6.15878 12.3176ZM6.15878 0.947505C3.26889 0.947505 0.947505 3.26889 0.947505 6.15878C0.947505 9.04868 3.26889 11.3701 6.15878 11.3701C9.04868 11.3701 11.3701 9.04868 11.3701 6.15878C11.3701 3.26889 9.04868 0.947505 6.15878 0.947505Z" fill="#505050" />
                                    <path d="M10.7461 10.0732L15.0004 14.3275L14.3305 14.9974L10.0762 10.7431L10.7461 10.0732Z" fill="#505050" />
                                </svg>
                                <input className="pl-[50px] w-full bg-black bg-opacity-10 !text-[#505050] placeholder:!text-[#505050] p-[15px] outline-none border-none" value="" placeholder="search" />
                            </div>
                        </Column>

                        <Column id={4}>
                            <div className="estimation-col__header pt-[70px] pb-[20px] px-[30px]">
                                <div className="flex items-end justify-start">
                                    <h2 className="opacity-60 font-latobold"><span className="font-latoblack">D:</span>&nbsp; Not as<br />env. friendly</h2>
                                </div>
                                <p className="mt-3 font-latolight text-black text-opacity-60">this is a short description for this estimate.</p>
                            </div>

                            <div className="flex flex-col justify-between text-white relative">
                                <svg className="absolute top-[20px] left-[30px]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M6.15878 12.3176C2.74777 12.3176 0 9.5698 0 6.15878C0 2.74777 2.74777 0 6.15878 0C9.5698 0 12.3176 2.74777 12.3176 6.15878C12.3176 9.5698 9.5698 12.3176 6.15878 12.3176ZM6.15878 0.947505C3.26889 0.947505 0.947505 3.26889 0.947505 6.15878C0.947505 9.04868 3.26889 11.3701 6.15878 11.3701C9.04868 11.3701 11.3701 9.04868 11.3701 6.15878C11.3701 3.26889 9.04868 0.947505 6.15878 0.947505Z" fill="#505050" />
                                    <path d="M10.7461 10.0732L15.0004 14.3275L14.3305 14.9974L10.0762 10.7431L10.7461 10.0732Z" fill="#505050" />
                                </svg>
                                <input className="pl-[50px] w-full bg-black bg-opacity-10 !text-[#505050] placeholder:!text-[#505050] p-[15px] outline-none border-none" value="" placeholder="search" />
                            </div>
                        </Column>

                    </div>
                </div>
            </MainWrapper>

            <LinearCover colors={introductionColors} target={2} className="introduction" />

            <StaggerCover colors={mainColors} target={2} className="main" />
        </div>
    )
}