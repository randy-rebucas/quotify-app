'use client'

import { useState } from "react";
import Action from "./action";
import Detail from "./detail";
import Result from "./result";
import Empty from "./empty";

type Props = {
    projects: any[];
    requirementGroup: any[];
    refinements: any[];
}

export default function ResultWrapper({ projects, requirementGroup, refinements }: Props) {
    const [more, setMore] = useState<boolean>(false);

    const [selectedProjectId, setSelectedProjectId] = useState<any>(null);

    const handleMoreLessClick = () => {
        setMore(!more);
    }

    if (projects.length == 0) {
        return (
            <Empty />
        )
    }

    const handleProjectSelectedClick = (e: any) => {
        e.preventDefault();
        setSelectedProjectId(e.currentTarget.dataset.file);
    }

    const handleProjectClearedClick = () => {
        setSelectedProjectId(null);
    }

    return (
        <>
            <Result isMore={more} projects={projects} onClick={handleProjectSelectedClick} />

            {selectedProjectId && <Detail projectId={selectedProjectId} requirementGroup={requirementGroup} refinements={refinements} onClick={handleProjectClearedClick} />}

            {projects.length > 4 && <Action isMore={more} onClick={handleMoreLessClick} />}
        </>
    )
}
