import ProjectDefinition from "@/components/print/project-definition";
import ProjectSummary from "@/components/print/project-summary";
import {
  fetchProject
} from "@/lib/data";

export default async function PrintPage({
  params,
}: {
  params: { id: string; type: string };
}) {
  const id = params.id;

  const project = await fetchProject(id);

  if (params.type === "estimate-summary") {
    return <ProjectSummary  project={project}/>
  }

  return <ProjectDefinition project={project} />;
}
