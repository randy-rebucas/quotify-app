import Popup from "@/app/shared/popup";
import BackgroundAnimation from "@/app/shared/background-animation";
import PageWrapper from "./ui/page-wrapper";
import Form from "./ui/form";

export default function Page() {

    const introductionColors: string[] = [
        "bg-darkblue1",
        "bg-darkblue2",
        "bg-darkblue3",
        "bg-darkblue4",
        "bg-darkblue5",
    ];

    const mainColors: string[] = [
        "bg-darkblue1",
        "bg-gray4A",
        "bg-gray4A",
        "bg-white",
        "bg-white",
    ];

    return (
        <div className="wrapper theme theme-darkblue">
            {/* <!--
            /*  Close Popup Block
            /*  This block shows on close popup button click
            /-->  */}
            <Popup />

            {/* <!--
            /*  Wrapper Content
            /*  This block shows the main content
            /--> */}
            <PageWrapper />

            {/* <!--
            /*  Multi-step Form
            /*  This block contains all the steps in the Area Breakdown form            
            /--> */}
            <Form />

            {/* <!--
            /*  Introduction Navigation Background Animation
            /*  This block is shown on page load.
            /*  This will be hidden once the navigation animation is finished.
            /--> */}
            <BackgroundAnimation colors={introductionColors} target={2} className="introduction" isLinear={true} />
            {/* <!--
            /*  Main Navigation Background
            /*  This block is hidden on page load.
            /*  This will be shown once the introduction navigation background animation is finished.
            /--> */}
            <BackgroundAnimation colors={mainColors} target={2} className="main" isLinear={false} />
        </div>
    )
}