'use client'

import { useState } from "react";
import Action from "./action";
import Detail from "./detail";
import Result from "./result";
import Empty from "./empty";

export default function ResultWrapper({ projects }: { projects: any[] }) {
    const [more, setMore] = useState<boolean>(false);

    const handleMoreLessClick = () => {
        setMore(!more);
    }

    if (projects.length == 0) {
        return (
            <Empty />
        )
    }
    
    return (
        <>
            <Result isMore={more} files={projects} />

            {/* <Detail /> */}

            {projects.length > 4 && <Action isMore={more} onClick={handleMoreLessClick} />}
        </>
    )
}