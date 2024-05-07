'use client'

import { useState } from "react";
import Action from "./action";
import Detail from "./detail";
import Result from "./result";

export default function ResultWrapper({ projects }: { projects: any[] }) {
    const [more, setMore] = useState<boolean>(false);

    const handleMoreLessClick = () => {
        setMore(!more);
    }

    return (
        <>
            <Result isMore={more} files={projects} />

            {/* <Detail /> */}

            {projects.length > 4 && <Action isMore={more} onClick={handleMoreLessClick} />}
        </>
    )
}