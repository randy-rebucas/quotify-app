import { fetchRefinements } from "@/app/lib/data";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import Popup from "@/app/ui/estimation/popup";
import FormWrapper from "@/app/ui/estimation/refinement/form-wrapper";
import Intro from "@/app/ui/estimation/refinement/intro";
import LinearCover from "@/app/ui/linear-cover";
import Loader from "@/app/ui/loader";
import StaggerCover from "@/app/ui/stagger-cover";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    if (!id) {
        notFound();
    }

    const refinements = await fetchRefinements();

    const introductionColors: string[] = ['bg-yellow1', 'bg-yellow2', 'bg-yellow3', 'bg-yellow4', 'bg-yellow5'];

    const mainColors: string[] = ['bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-white', 'bg-yellow'];

    return (
        <>
            <div className="wrapper theme theme-yellow">

                <Popup />

                <IntroWrapper>
                    <Suspense fallback={<p>Loading ...</p>}>
                        <Intro refinements={refinements} />
                    </Suspense>
                </IntroWrapper>

                <MainWrapper>
                    <Suspense fallback={<p>Loading ...</p>}>
                        <FormWrapper refinements={refinements} project_id={id} />
                    </Suspense>
                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />
            </div>
            <Loader />
        </>
    )
}