'use client';

import { useState } from "react";
import Action from "./action";
import Detail from "./detail";
import Result from "./result";

export default function ResultWrapper() {

    const [more, setMore] = useState<boolean>(false);

    const handleMoreLessClick = () => {
        setMore(!more);
    }

    return (
        <>
            <Result isMore={more}/>

            <Detail />

            <Action isMore={more} onClick={handleMoreLessClick} />
        </>
    )
}