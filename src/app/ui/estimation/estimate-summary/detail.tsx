'use client';

import { useState } from "react";
import Actions from "./actions";
import Form from "./form";

export default function Detail({ project }: { project: any }) {

    const [edit, setEdit] = useState<boolean>(false);

    const handleClickEdit = () => {
        setEdit(!edit);
    }

    return (
        <>
            <div className="pt-[52px]">

                <h2 className="font-bold font-latoblack xl:text-4xl md:text-3xl text-2xl text-white mb-10">
                    {project.spaceName}</h2>

                <div className="file__border bg-white"></div>

                <div className="text-white mt-4 pt-2">
                    {project.address}
                </div>

                <div className="text-white mt-2 pt-[44px]">
                    <Form project={project} isEdit={edit} />
                </div>
            </div>
            <Actions isEdit={edit} onClickEdit={handleClickEdit} />
        </>
    )
}