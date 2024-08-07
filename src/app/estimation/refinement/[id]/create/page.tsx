import { fetchRefinements } from "@/app/lib/data";
import { IRefinement } from "@/app/models/Refinement";
import IntroWrapper from "@/app/ui/estimation/intro-wrapper";
import MainWrapper from "@/app/ui/estimation/main-wrapper";
import Popup from "@/app/ui/estimation/popup";
import Form from "@/app/ui/estimation/refinement/form";
import TabForm from "@/app/ui/estimation/refinement/tab-form";
import LinearCover from "@/app/ui/linear-cover";
import StaggerCover from "@/app/ui/stagger-cover";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    if (!id) {
        notFound();
    }

    const refinements = await fetchRefinements();

    const introductionColors: string[] = ['bg-yellow1', 'bg-yellow2', 'bg-yellow3', 'bg-yellow4', 'bg-yellow5'];

    const mainColors: string[] = ['bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-white', 'bg-yellow'];

    return (

        <div className="wrapper theme theme-yellow">

            <Popup />

            <IntroWrapper>
                <div className="intro-menu col-start-4">
                    <div className="h-full">
                        <div className="p-30 pt-col3">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <h1 className="font-latobold text-black">
                                        04:
                                    </h1>
                                    <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-black">
                                        Refinements
                                    </h4>
                                    <div className="estimation-col__bar bg-black mt-6 mb-6"></div>
                                    <div className="estimation-col__content">
                                        {refinements.map((refinement: IRefinement, index: number) => (
                                            <div key={index} className='step-indicator'>
                                                <span className="font-latoblack">04.{index + 1}:</span> <br />
                                                {refinement.name}
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

                <Form refinements={refinements} project_id={id} />

            </MainWrapper>

            <LinearCover colors={introductionColors} target={2} className="introduction" />

            <StaggerCover colors={mainColors} target={2} className="main" />
        </div>
    )
}