import Action from "./action";
import Result from "./result";
import Empty from "./empty";
import DetailWrapper from "./detail-wrapper";
import { fetchRefinements, fetchRequirementsByGroup } from "@/app/lib/data";

type Props = {
    projects: any[];
}

export default async function ResultWrapper({ projects }: Props) {

    const requirement_groups = await fetchRequirementsByGroup();

    const refinements = await fetchRefinements();

    if (projects.length == 0) {
        return (
            <Empty />
        )
    }

    return (
        <>
            <Result projects={projects} />

            <DetailWrapper requirementGroups={requirement_groups} refinements={refinements} />

            <Action projects={projects} />
        </>
    )
}

