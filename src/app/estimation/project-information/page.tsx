import Popup from "@/app/ui/estimation/popup";
import Column from "@/app/ui/estimation/project-information/column";
import Title from "@/components/title";
import LinearCover from "@/components/linear-cover";
import PageWrapper from "@/components/page-wrapper";
import StaggerCover from "@/components/stagger-cover";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Project Information'
};

export default function ProjectinformationPage() {

    const introductionColors: string[] = ['bg-gray1', 'bg-gray2', 'bg-gray3', 'bg-gray4', 'bg-gray5'];

    const mainColors: string[] = ['bg-blue', 'bg-gray2', 'bg-gray3', 'bg-gray4', 'bg-gray5'];

    return (
        <div className="wrapper theme theme-darkblue">
            <Popup />

            <PageWrapper>
                <div className="col-span-2 col-start-1 flex flex-col justify-start items-start w-full h-full">

                    <Title title="project definition" />

                    <div className="js-estimation-col estimation-col grid grid-cols-2 grid-flow-col h-full">
                        {/* This block shows the first column (01: Project) */}
                        <Column
                            step={1}
                            cursor='one'
                            section='Project information'
                            navigation="/estimation/project-information"
                            next="/estimation/project-information/create"
                            isCompleted={false} >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your project and letting the system know what you have in mind so we can come up with a cost together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a cost together.
                                cost together.</p>
                        </Column>
                        {/* This block shows the second column (02: Area breakdown) */}
                        <Column
                            step={2}
                            cursor='two'
                            section='Area breakdown'
                            navigation="/project/area-breakdown"
                            next=""
                            isCompleted={false} >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your project and letting the system know what you have in mind so we can come up with a cost together</p>
                        </Column>
                    </div>
                </div>

                <div className="col-span-3 col-start-3 flex flex-col justify-start items-start w-full h-full">

                    <Title title="project estimation" />

                    <div className="js-estimation-col estimation-col grid grid-cols-3 grid-flow-col h-full">
                        {/* This block shows the third column (03: Requirements) */}
                        <Column
                            step={3}
                            cursor='three'
                            section='Requirements'
                            navigation="/project/requirements"
                            next=""
                            isCompleted={false} >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your project
                                and letting the system know what you have in mind so we can come up with a cost together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                        {/* This block shows the fourth column (04: Refinements) */}
                        <Column
                            step={4}
                            cursor='four'
                            section='Refinements'
                            navigation="/project/refinements"
                            next=""
                            isCompleted={false} >
                            <p className="text-white pb-3">Here is where you will add ingot to start shaping your
                                project and letting the system know what you have in mind so we can come up with a cost together.</p>
                            <p className="text-white">system know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                        {/* This block shows the fifth column (05: Estimate Summary) */}
                        <Column
                            step={5}
                            cursor='five'
                            section='Estimate summary'
                            navigation="/project/estimate-summary"
                            next=""
                            isCompleted={false}>
                            <p className="text-white">Here is where you will add ingot to start shaping your project and letting the system
                                know what you have in mind so we can come up with a cost together.</p>
                        </Column>
                    </div>
                </div>
            </PageWrapper>

            <LinearCover colors={introductionColors} target={2} className="introduction" />

            <StaggerCover colors={mainColors} target={2} className="main" />
        </div>
    )
}