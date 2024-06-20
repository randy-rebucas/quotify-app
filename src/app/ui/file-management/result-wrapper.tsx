'use client'

import { useState } from "react";
import Action from "./action";
import Detail from "./detail";
import Result from "./result";
import Empty from "./empty";


export default function ResultWrapper({ projects }: { projects: any[] }) {
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
            <Result isMore={more} files={projects} onClick={handleProjectSelectedClick} />

            {selectedProjectId && <Detail projectId={selectedProjectId} onClick={handleProjectClearedClick} />}

            {projects.length > 4 && <Action isMore={more} onClick={handleMoreLessClick} />}
        </>
    )
}
