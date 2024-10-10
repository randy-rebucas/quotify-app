import { fetchAmenities, fetchCustomSpacesByGroup, fetchProject, fetchProjectAmenitiesByProject, fetchProjectCustomSpacesByProject } from "@/lib/data";
import Popup from "@/components/estimation/popup";
import Form from "@/components/estimation/project-definition/form";
import Menu from "@/components/estimation/project-definition/menu";
import Loader from "@/components/loader";
import PageWrapper from "@/components/page-wrapper";
import StaggerCover from "@/components/stagger-cover";
import { notFound } from "next/navigation";

export default async function ProjectDefinitionPage({ params }: { params: { id: string } }) {
    const id = params.id;

    if (!id) {
        notFound();
    }
    
    // Get project detaail
    const project = await fetchProject(id);
    // Get all Amenities 
    const amenities = await fetchAmenities();
    // Get all custom spaces 
    const custom_spaces = await fetchCustomSpacesByGroup();
    // Get all project amenitties
    const selected_amenities = await fetchProjectAmenitiesByProject(id);
    // Get all project custom spaces 
    const selected_custom_spaces = await fetchProjectCustomSpacesByProject(id);

    const colors: string[] = ['bg-blue2', 'bg-white', 'bg-white', 'bg-white', 'bg-white'];

    return (
        <>
            <div className="wrapper theme theme-blue">

                <Popup />

                <PageWrapper >
                    <Menu />

                    <Form project={project} selectedAmenities={selected_amenities} selectedCustomSpaces={selected_custom_spaces} />
                </PageWrapper>

                <StaggerCover colors={colors} target={2} className="opacity-1" />
            </div>
            <Loader />
        </>
    )
}