import { fetchMenuByPageHandled } from "@/app/lib/data";
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

    const menus = await fetchMenuByPageHandled('requirement');

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
                                        <div className="step-indicator">
                                            <span className="font-latoblack">03.1:</span> <br />
                                            finish and certifications
                                        </div>
                                        <div className="step-indicator">
                                            <span className="font-latoblack">03.2:</span> <br />
                                            MEP features
                                        </div>
                                        <div className="step-indicator">
                                            <span className="font-latoblack">03.3:</span> <br />
                                            base building conditions
                                        </div>
                                        <div className="step-indicator">
                                            <span className="font-latoblack">03.4:</span> <br />
                                            technology
                                        </div>
                                        <div className="step-indicator">
                                            <span className="font-latoblack">03.5:</span> <br />
                                            furniture and furnishing
                                        </div>
                                        <div className="step-indicator">
                                            <span className="font-latoblack">03.6</span> <br />
                                            review
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IntroWrapper>

            <MainWrapper>
                <Form menus={menus} project_id={id} />
            </MainWrapper>

            <LinearCover colors={introductionColors} target={2} className="introduction" />

            <StaggerCover colors={mainColors} target={2} className="main" />
        </div>

    )
}