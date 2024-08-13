import { fetchAmenities, fetchCustomSpacesByGroup, fetchMenuByPageHandled } from "@/app/lib/data";
import FormWrapper from "@/app/ui/estimation/area-breakdown/form-wrapper";
import Intro from "@/app/ui/estimation/area-breakdown/intro";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import Popup from "@/app/ui/estimation/popup";
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

    const menus = await fetchMenuByPageHandled('area-breakdown');

    const amenities = await fetchAmenities();

    const custom_spaces = await fetchCustomSpacesByGroup();

    const introductionColors: string[] = ['bg-blue1', 'bg-blue2', 'bg-blue3', 'bg-blue4', 'bg-blue5'];

    const mainColors: string[] = ['bg-blue2', 'bg-gray4A', 'bg-gray4A', 'bg-white', 'bg-white'];

    return (
        <>
            <div className="wrapper theme theme-blue">
                <Popup />

                <IntroWrapper>
                    <Suspense fallback={<p>Loading ...</p>}>
                        <Intro menus={menus} />
                    </Suspense>
                </IntroWrapper>

                <MainWrapper>
                    <Suspense fallback={<p>Loading ...</p>}>
                        <FormWrapper menus={menus} amenities={amenities} customSpaces={custom_spaces} projectId={id} />
                    </Suspense>
                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />

            </div >
            <Loader />
        </>
    )
}