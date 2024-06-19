import Popup from "@/app/ui/estimation/popup";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import LinearCover from "@/app/ui/linear-cover";
import StaggerCover from "@/app/ui/stagger-cover";
import { fetchMenuByPageHandled } from "@/app/lib/data";
import Menu from "@/app/ui/estimation/project-information/menu";

export default async function Page() {
    const menus = await fetchMenuByPageHandled('project-information');

    const introductionColors: string[] = ['bg-darkblue1', 'bg-darkblue2', 'bg-darkblue3', 'bg-darkblue4', 'bg-darkblue5'];

    const mainColors: string[] = ['bg-darkblue1', 'bg-gray4A', 'bg-gray4A', 'bg-white', 'bg-white'];

    return (

        <div className="wrapper theme theme-darkblue">
            <Popup />

            <IntroWrapper>
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
                                        {menus.map((menu, index) => (
                                            <div key={menu._id} className='step-indicator'>
                                                <span className="font-latoblack">01.{index + 1}:</span> <br />
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

                <Menu menus={menus} />

            </MainWrapper>

            <LinearCover colors={introductionColors} target={2} className="introduction" />

            <StaggerCover colors={mainColors} target={2} className="main" />
        </div>

    )
}