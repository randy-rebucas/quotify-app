import BackgroundAnimation from "@/app/shared/background-animation";
import Popup from "@/app/shared/popup";
import IntroMenu from "./ui/intro-menu";
import TabForm from "./ui/tab-form";
import TabContentForm from "./ui/tab-content-form";
import TabWrapper from "./ui/tab-wrapper";
import Tab from "./ui/tab";
import IntroMenuWrapper from "./ui/intro-menu-wrapper";
import { ProjectRequirementContextProvider } from "@/app/context/ProjectRequirementMenuContext";

export default function Page() {

    const introductionColors: string[] = ['bg-green1', 'bg-green2', 'bg-green3', 'bg-green4', 'bg-green5'];

    const mainColors: string[] = ['bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-white', 'bg-green'];

    return (
        <ProjectRequirementContextProvider>
            <div className="wrapper theme theme-green">
                {/* <!--
        /*  Close Popup Block
        /*  This block shows on close popup button click
        /-->         */}
                <Popup />

                {/* <!--
        /*  Wrapper Content
        /*  This block shows the main page content
        /--> */}
                <IntroMenuWrapper />

                <TabWrapper />

                <BackgroundAnimation colors={introductionColors} target={2} className="introduction" isLinear={true} />

                <BackgroundAnimation colors={mainColors} target={2} className="main" isLinear={false} />
            </div>
        </ProjectRequirementContextProvider>
    )
}