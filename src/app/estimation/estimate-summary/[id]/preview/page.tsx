
import { fetchProject, fetchRefinements, fetchRequirementsByGroup } from "@/lib/data";
import Detail from "@/components/estimation/estimate-summary/detail";
import Wrapper from "@/components/estimation/estimate-summary/wrapper";
import IntroWrapper from "@/components/estimation/intro-wrapper";
import MainWrapper from "@/components/estimation/main-wrapper";
import Popup from "@/components/estimation/popup";
import LinearCover from "@/components/linear-cover";
import Loader from "@/components/loader";
import StaggerCover from "@/components/stagger-cover";
import { notFound } from "next/navigation";

export default async function ProjectSummaryPreviewPage({ params }: { params: { id: string } }) {
    const id = params.id;

    if (!id) {
        notFound();
    }

    const project = await fetchProject(id);

    const requirements_groups = await fetchRequirementsByGroup();

    const refinements = await fetchRefinements();

    const introductionColors: string[] = ['bg-red1', 'bg-red2', 'bg-red3', 'bg-red4', 'bg-red5'];

    const mainColors: string[] = ['bg-gray2A', 'bg-gray3A', 'bg-gray4A', 'bg-white', 'bg-red'];

    return (
        <>
            <div className="wrapper theme theme-red">
                <Popup />

                <IntroWrapper>
                    <div className="intro-menu lg:col-start-5">
                        <div className="h-full">
                            <div className="p-30 lg:pt-col3">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <h1 className="font-latobold">
                                            05:
                                        </h1>
                                        <h4 className="font-latolight mt-3">
                                            Estimate summary
                                        </h4>
                                        <div className="estimation-col__bar mt-6 mb-6"></div>
                                        <div className="estimation-col__content">
                                            <p>Here is where you will add ingot to start shaping your project and leting the system know what you have in mind so we can come up with a cost together</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </IntroWrapper>

                <MainWrapper>
                    <div className="js-main-column lg:col-start-5 flex flex-col justify-start items-start w-full h-full overflow-y-scroll hide-on-print">
                        <div className="estimation-col w-full h-full">
                            <div className="p-30 flex flex-col justify-between relative z-10 w-full h-full">
                                <Detail project={project} />
                            </div>
                        </div>
                    </div>
                    <Wrapper projectId={id} requirements={requirements_groups} refinements={refinements} />

                </MainWrapper>

                <LinearCover colors={introductionColors} target={2} className="introduction" />

                <StaggerCover colors={mainColors} target={2} className="main" />
            </div>
            <Loader />
        </>
    )
}