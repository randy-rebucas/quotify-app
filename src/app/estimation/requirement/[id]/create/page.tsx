import { fetchRequirementsByGroup } from "@/app/lib/data";
import { IRequirement } from "@/app/models/Requirement";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import Popup from "@/app/ui/estimation/popup";
import Form from "@/app/ui/estimation/requirement/form";
import LinearCover from "@/app/ui/linear-cover";
import StaggerCover from "@/app/ui/stagger-cover";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    if (!id) {
        notFound();
    }

    const requirements_groups = await fetchRequirementsByGroup();

    const introductionColors: string[] = ['bg-green1', 'bg-green2', 'bg-green3', 'bg-green4', 'bg-green5'];

    const mainColors: string[] = ['bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-white', 'bg-green'];

    return (

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
                                        {requirements_groups.map((requirements_group: { _id: string; requirements: IRequirement[] }, index: number) => (
                                            <div key={index} className="step-indicator">
                                                <span className="font-latoblack">03.{index + 1}:</span> <br />
                                                {requirements_group._id}
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
                <Form requirements_groups={requirements_groups} project_id={id} />
            </MainWrapper>

            <LinearCover colors={introductionColors} target={2} className="introduction" />

            <StaggerCover colors={mainColors} target={2} className="main" />
        </div>

    )
}