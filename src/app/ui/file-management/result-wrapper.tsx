'use client'

import { useEffect, useState } from "react";
import Action from "./action";
import Detail from "./detail";
import Result from "./result";
import Empty from "./empty";
import { IProject } from "@/app/models/Project";

export default function ResultWrapper() {
    const [more, setMore] = useState<boolean>(false);
    const [projects, setProjects] = useState<IProject[]>([]);
    const handleMoreLessClick = () => {
        setMore(!more);
    }

    useEffect(() => {
        fetch('/api/projects')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data.projects)
            })
    }, [])

    if (!projects) return <Empty />

    return (
        <>
            <Result isMore={more} files={projects}/>

            {/* <Detail /> */}

            <Action isMore={more} onClick={handleMoreLessClick} />
        </>
    )
}