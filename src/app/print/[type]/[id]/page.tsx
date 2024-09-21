import ProjectDefinition from "@/components/print/project-definition";
import ProjectSummary from "@/components/print/project-summary";
import {
  fetchProject,
  fetchRefinements,
  fetchRequirementsByGroup
} from "@/lib/data";

export default async function PrintPage({
  params,
}: {
  params: { id: string; type: string };
}) {
  const id = params.id;

  const project = await fetchProject(id);

  const requirements_groups = await fetchRequirementsByGroup();

  const refinements = await fetchRefinements();
  
  if (params.type === "estimate-summary") {
    
    return <ProjectSummary   project={project} requirements={requirements_groups} refinements={refinements}/>
  }

  return <ProjectDefinition project={project} />;
}
