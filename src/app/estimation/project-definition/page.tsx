import Popup from "@/app/ui/estimation/popup";
import Form from "@/app/ui/estimation/project-definition/form";
import Menu from "@/app/ui/estimation/project-definition/menu";
import PageWrapper from "@/app/ui/page-wrapper";
import StaggerCover from "@/app/ui/stagger-cover";


export default function Page() {
    const colors: string[] = ['bg-blue2', 'bg-white', 'bg-white', 'bg-white', 'bg-white'];

    return (
        <div className="wrapper theme theme-blue">

            <Popup />

            <PageWrapper >
                <Menu />

                <Form />
            </PageWrapper>

            <StaggerCover colors={colors} target={2} className="opacity-1" />
        </div>
    )
}