import ColorAnimation from "@/app/ui/color-animation";
import Column from "@/app/project/information/ui/column";
import Popup from "@/app/ui/popup";
import Image from "next/image";

export default function Page() {

    const introductionColors: string[] = [
        "bg-gray1",
        "bg-gray2",
        "bg-gray3",
        "bg-gray4",
        "bg-gray5",
    ];

    const mainColors: string[] = [
        "bg-gray1",
        "bg-gray2",
        "bg-gray3",
        "bg-gray4",
        "bg-gray5",
    ];

    return (
        <div className="wrapper theme theme-blue">
            <Popup />

            <div className="js-autoplay-show wrapper__content animate fade-in delay-last grid">
                <div className="col-span-2 col-start-1 flex flex-col justify-start items-start w-full h-full">
                    <div
                        className="js-autoplay-true1 absolute col-span-2 col-start-1 row-span-3 p-30 flex flex-col justify-start items-start">
                        <h1 className="font-bold font-latoblack xl:text-6xl md:text-5xl text-4xl text-white opacity-10">
                            project definition</h1>
                    </div>

                    <div className="js-estimation-col estimation-col grid grid-cols-2 grid-flow-col h-full">
                        {/* This block shows the first column (01: Project) */}
                        <Column
                            step={1}
                            stepInWord='one'
                            section='Project information'
                            navigation="/project/information"
                            next="/project/information/create"
                            isCompleted={true} >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your project and letting the system know what you have in mind so we can come up with a cost together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a cost together.
                                cost together.</p>
                        </Column>
                        {/* This block shows the second column (02: Area breakdown) */}
                        <Column
                            step={2}
                            stepInWord='two'
                            section='Area breakdown'
                            navigation="/project/breakdown"
                            next="/project/breakdown/create"
                            isCompleted={false} >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your project and letting the system know what you have in mind so we can come up with a cost together</p>
                        </Column>
                    </div>
                </div>

                <div className="col-span-3 col-start-3 flex flex-col justify-start items-start w-full h-full">
                    <div
                        className="js-autoplay-true1 absolute col-span-2 col-start-3 row-span-3 p-30 flex flex-col justify-start items-start">
                        <h1 className="font-bold font-latoblack xl:text-6xl md:text-5xl text-4xl text-white opacity-10">
                            project estimation</h1>
                    </div>

                    <div className="close-btn opacity-0 absolute top-0 right-0 flex flex-col items-end p-30 z-30">
                        <a href="#" className="js-close-project">
                            <Image
                                src="/images/icon-close.svg"
                                width={50}
                                height={50}
                                alt="close"
                            />
                        </a>
                    </div>

                    <div className="js-estimation-col estimation-col grid grid-cols-3 grid-flow-col h-full">
                        {/* This block shows the third column (03: Requirements) */}
                        <Column
                            step={3}
                            stepInWord='three'
                            section='Requirements'
                            navigation="/project/requirements"
                            next=""
                            isCompleted={false}>
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your project
                                and letting the system know what you have in mind so we can come up with a cost together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                        {/* This block shows the fourth column (04: Refinements) */}
                        <Column
                            step={4}
                            stepInWord='four'
                            section='Refinements'
                            navigation="/project/refinements"
                            next=""
                            isCompleted={false}>
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                project and letting the system know what you have in mind so we can come up with a cost together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                        {/* This block shows the fifth column (05: Estimate Summary) */}
                        <Column
                            step={5}
                            stepInWord='five'
                            section='Estimate summary'
                            navigation="/project/estimate-summary"
                            next=""
                            isCompleted={false}>
                            <p className="text-white">Here is where you will add ingot to start shaping your project and letting the system
                                know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                    </div>
                </div>
            </div>

            <ColorAnimation colors={introductionColors} target={2} className='introduction' isLinear={true} />

            <ColorAnimation colors={mainColors} target={2} className='main hidden' isLinear={false} />
        </div>
    )
}