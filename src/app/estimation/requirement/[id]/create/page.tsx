import { fetchRequirementsByGroup } from "@/lib/data";
import IntroWrapper from "@/components/estimation/intro-wrapper";
import MainWrapper from "@/components/estimation/main-wrapper";
import Popup from "@/components/estimation/popup";
import Intro from "@/components/estimation/requirement/intro";
import LinearCover from "@/components/linear-cover";
import StaggerCover from "@/components/stagger-cover";
import { notFound } from "next/navigation";
import Loader from "@/components/loader";
import { Suspense } from "react";
import FormWrapper from "@/components/estimation/requirement/form-wrapper";

export default async function RequirementCreatePage({ params }: { params: { id: string } }) {
    const id = params.id;

    if (!id) {
        notFound();
    }

    const requirements_groups = await fetchRequirementsByGroup();

    const introductionColors: string[] = ['bg-green1', 'bg-green2', 'bg-green3', 'bg-green4', 'bg-green5'];

    const mainColors: string[] = ['bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-white', 'bg-green'];

    return (
        <>
            <div className="wrapper theme theme-green">

                <Popup />

                <IntroWrapper>
                    <Suspense fallback={<p>Loading ...</p>}>
                        <Intro requirementGroups={requirements_groups} />
                    </Suspense>
                </IntroWrapper>

                <MainWrapper>
                    <Suspense fallback={<p>Loading ...</p>}>
                        <FormWrapper requirementGroups={requirements_groups} project_id={id} />
                    </Suspense>
                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />
            </div>
            <Loader />
        </>

    )
}