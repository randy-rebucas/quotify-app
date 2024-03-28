import ColorAnimation from "@/app/ui/color-animation";
import Image from "next/image";
import Popup from "@/app/ui/popup";
import Link from "next/link";
import Form from "@/app/ui/information-forms/form";
import IntroMenu from "@/app/ui/information-forms/intro-menu";
import { introductionColors, mainColors } from "@/app/ui/constant";

export default function Page() {
    
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
            <div className="js-show-on-load wrapper__content navigation animate fade-in delay-last grid">
                {/* <!--
                /*  Close Popup Button
                /*  This block shows the close popup block
                /--> */}
                <div className="absolute top-0 right-0 flex flex-col items-end p-30">
                    <Link href="#" className="js-close-project">
                        <Image
                            src="/images/icon-close-white.svg"
                            width={50}
                            height={50}
                            alt="close"
                        />
                    </Link>
                </div>

                {/* <!--
                /*  Menu Introduction
                /*  This block shows on page introduction animation.
                /*  It will be hidden once animation is finished.                
                /--> */}
                <IntroMenu />
            </div>

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
            <ColorAnimation colors={introductionColors} target={2} className='introduction' isLinear={true} />

            {/* <!--
            /*  Main Navigation Background
            /*  This block is hidden on page load.
            /*  This will be shown once the introduction navigation background animation is finished.
            /--> */}
            <ColorAnimation colors={mainColors} target={2} className='main hidden' isLinear={false} />
        </div>
    )
}