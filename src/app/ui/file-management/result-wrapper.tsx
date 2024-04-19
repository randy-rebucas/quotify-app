'use client'

import { useEffect, useState } from "react";
import Action from "./action";
import Detail from "./detail";
import Result from "./result";
import Empty from "./empty";
import { IProject } from "@/app/models/Project";

export default function ResultWrapper({ data }: { data: IProject[] }) {
    const [more, setMore] = useState<boolean>(false);
    const handleMoreLessClick = () => {
        setMore(!more);
    }

    if (!data.length) {
        return <Empty />
    }

    return (
        <>
            <Result isMore={more} />

            {/* <Detail /> */}

            <Action isMore={more} onClick={handleMoreLessClick} />
        </>
    )
}