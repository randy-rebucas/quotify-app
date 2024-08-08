import Popup from "@/app/ui/estimation/popup";
import Form from "@/app/ui/estimation/project-information/form";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import LinearCover from "@/app/ui/linear-cover";
import StaggerCover from "@/app/ui/stagger-cover";
import { fetchMenuByPageHandled } from "@/app/lib/data";
import { Suspense } from "react";
import Intro from "@/app/ui/estimation/project-information/intro";
import PageWrapper from "@/app/ui/page-wrapper";
import FormWrapper from "@/app/ui/estimation/project-information/form-wrapper";

export default async function Page() {
    const menus = await fetchMenuByPageHandled('project-information');

    const introductionColors: string[] = ['bg-darkblue1', 'bg-darkblue2', 'bg-darkblue3', 'bg-darkblue4', 'bg-darkblue5'];

    const mainColors: string[] = ['bg-darkblue1', 'bg-gray4A', 'bg-gray4A', 'bg-white', 'bg-white'];

    return (
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
    )
}