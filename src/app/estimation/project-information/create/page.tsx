import Popup from "@/app/ui/estimation/popup";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import LinearCover from "@/components/linear-cover";
import StaggerCover from "@/components/stagger-cover";
import { fetchMenuByPageHandled } from "@/lib/data";
import { Suspense } from "react";
import Intro from "@/app/ui/estimation/project-information/intro";
import FormWrapper from "@/app/ui/estimation/project-information/form-wrapper";
import Loader from "@/components/loader";

export default async function ProjectInformationCreatePage() {
    const menus = await fetchMenuByPageHandled('project-information');

    const introductionColors: string[] = ['bg-darkblue1', 'bg-darkblue2', 'bg-darkblue3', 'bg-darkblue4', 'bg-darkblue5'];

    const mainColors: string[] = ['bg-darkblue1', 'bg-gray4A', 'bg-gray4A', 'bg-white', 'bg-white'];

    return (
        <>
            <div className="wrapper theme theme-darkblue">
                <Popup />

                <IntroWrapper>
                    <Suspense fallback={<p>Loading ...</p>}>
                        <Intro menus={menus} />
                    </Suspense>
                </IntroWrapper>

                <MainWrapper>
                    <Suspense fallback={<p>Loading ...</p>}>
                        <FormWrapper menus={menus} />
                    </Suspense>
                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />
            </div>
            <Loader />
        </>
    )
}