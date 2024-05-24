import { fetchProject } from "@/app/lib/data";
import Popup from "@/app/ui/estimation/popup";
import Form from "@/app/ui/estimation/project-definition/form";
import Menu from "@/app/ui/estimation/project-definition/menu";
import PageWrapper from "@/app/ui/page-wrapper";
import StaggerCover from "@/app/ui/stagger-cover";
import { notFound } from "next/navigation";


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    if (!id) {
        notFound();
    }

    const project = await fetchProject(id);

    const colors: string[] = ['bg-blue2', 'bg-white', 'bg-white', 'bg-white', 'bg-white'];

    return (
        <div className="wrapper theme theme-blue">

            <Popup />

            <PageWrapper >
                <Menu />

                <Form project={project} />
            </PageWrapper>

            <StaggerCover colors={colors} target={2} className="opacity-1" />
        </div>
    )
}