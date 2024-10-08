import { fetchAmenities, fetchCustomSpaces, fetchCustomSpacesByGroup, fetchMenuByPageHandled } from "@/lib/data";
import FormWrapper from "@/components/estimation/area-breakdown/form-wrapper";
import Intro from "@/components/estimation/area-breakdown/intro";
import IntroWrapper from "@/components/estimation/intro-wrapper";
import MainWrapper from "@/components/estimation/main-wrapper";
import Popup from "@/components/estimation/popup";
import LinearCover from "@/components/linear-cover";
import Loader from "@/components/loader";
import StaggerCover from "@/components/stagger-cover";
import { notFound } from "next/navigation";
import { Suspense } from "react";


export default async function AreaBreakdownCreatePage({ params }: { params: { id: string } }) {
    const id = params.id;

    if (!id) {
        notFound();
    }

    const menus = await fetchMenuByPageHandled('area-breakdown');

    const amenities = await fetchAmenities();

    const groupCustomSpaces = await fetchCustomSpacesByGroup();
    const customSpaces = await fetchCustomSpaces();
    
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
                        <FormWrapper menus={menus} amenities={amenities} groupCustomSpaces={groupCustomSpaces} customSpaces={customSpaces} projectId={id} />
                    </Suspense>
                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />

            </div >
            <Loader />
        </>
    )
}