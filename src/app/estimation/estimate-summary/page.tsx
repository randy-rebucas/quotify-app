import Popup from "@/app/ui/estimation/popup";
import Column from "@/app/ui/estimation/project-information/column";
import Title from "@/app/ui/estimation/title";
import LinearCover from "@/app/ui/linear-cover";
import StaggerCover from "@/app/ui/stagger-cover";


export default function Page() {

    const introductionColors: string[] = ['bg-gray1', 'bg-gray2', 'bg-gray3', 'bg-gray4', 'bg-gray5'];

    const mainColors: string[] = ['bg-gray1', 'bg-gray2', 'bg-gray3', 'bg-gray4', 'bg-gray5'];

    return (
        <div className="wrapper theme theme-red">   

            <Popup />

            <div className="js-autoplay-show wrapper__content animate fade-in delay-last grid">
                <div className="col-span-2 col-start-1 flex flex-col justify-start items-start w-full h-full">

                    <Title title="project definition" />

                    <div className="estimation-col grid grid-cols-2 grid-flow-col h-full">
                        {/* This block shows the first column (01: Project) */}
                        <Column
                            step={1}
                            cursor='one'
                            section='Project information'
                            navigation="/project/information"
                            next="/project/information/create"
                            isCompleted={true} >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                project
                                and letting the system know what you have in mind so we can come up with a cost
                                together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a
                                cost
                                together.</p>
                        </Column>

                        {/* This block shows the second column (02: Area breakdown) */}
                        <Column
                            step={2}
                            cursor='two'
                            section='Area breakdown'
                            navigation="/project/breakdown"
                            next="/project/breakdown/create"
                            isCompleted={true} >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                project
                                and letting the system know what you have in mind so we can come up with a cost
                                together.</p>
                        </Column>
                    </div>
                </div>

                <div className="col-span-3 col-start-3 flex flex-col justify-start items-start w-full h-full">

                    <Title title="project estimation" />

                    {/* <div className="close-btn opacity-0 absolute top-0 right-0 flex flex-col items-end p-30 z-30">
                        <a href="#" className="js-close-project">
                            <img src="src/img/icon-close.svg" alt="close" />
                        </a>
                    </div> */}

                    <div className="js-estimation-col estimation-col grid grid-cols-3 grid-flow-col h-full">
                        {/* This block shows the third column (03: Requirements) */}
                        <Column
                            step={3}
                            cursor='three'
                            section='Requirements'
                            navigation="/estimation/requirement"
                            next="/estimation/requirement/create"
                            isCompleted={true}>
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                project
                                and letting the system know what you have in mind so we can come up with a cost
                                together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a
                                cost
                                together.</p>
                        </Column>
                        {/* This block shows the fourth column (04: Refinements) */}
                        <Column
                            step={4}
                            cursor='four'
                            section='Refinements'
                            navigation="/estimation/refinement"
                            next="/estimation/refinement/create"
                            isCompleted={true}>
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                project and letting the system know what you have in mind so we can come up with a cost together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                        {/* This block shows the fifth column (05: Estimate Summary) */}
                        <Column
                            step={5}
                            cursor='five'
                            section='Estimate summary'
                            navigation="/estimation/estimate-summary"
                            next="/estimation/estimate-summary/preview"
                            isCompleted={false}>
                            <p className="text-white">Here is where you will add ingot to start shaping your project and letting the system
                                know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                    </div>
                </div>
            </div>

            <LinearCover colors={introductionColors} target={2} className="introduction" />

            <StaggerCover colors={mainColors} target={2} className="main" />
        </div>
    )
}