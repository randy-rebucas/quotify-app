import BackgroundAnimation from "@/app/shared/background-animation";
import Popup from "@/app/shared/popup";
import Form from "./ui/form";
import PageWrapper from "./ui/page-wrapper";

export default function Page() {

    const introductionColors: string[] = [
        'bg-blue1',
        'bg-blue2',
        'bg-blue3',
        'bg-blue4',
        'bg-blue5',
    ];

    const mainColors: string[] = [
        'bg-blue2',
        'bg-gray4A',
        'bg-gray4A',
        'bg-white',
        'bg-white',
    ];

    return (
        <div className="wrapper theme theme-blue">
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
            <BackgroundAnimation colors={introductionColors} target={2} className='introduction' isLinear={true} />

            {/* <!--
            /*  Main Navigation Background
            /*  This block is hidden on page load.
            /*  This will be shown once the introduction navigation background animation is finished.
            /--> */}
            <BackgroundAnimation colors={mainColors} target={null} className='main' isLinear={false} />

        </div >
    )
}