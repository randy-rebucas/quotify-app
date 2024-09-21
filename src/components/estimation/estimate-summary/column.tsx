'use client';

import { ReactNode } from "react";
import Accordions from "./accordions";
import Cost from "./cost";

type ColumnProps = {
    estimateGroups: any[];
    requirements: any[];
    refinements: any[];
    projectId: string;
    children: ReactNode;
}

export default function Column({ estimateGroups, requirements, refinements, projectId, children }: ColumnProps) {

    return (
        <div className="relative h-full flex flex-col justify-between estimate-column">
            <div>
                {children}
                <div className="w-full px-[30px] pb-[100px]">
                    {estimateGroups.map((estimate: any) => (
                        <Accordions key={estimate._id} estimate={estimate} requirements={requirements} refinements={refinements} projectId={projectId} />
                    ))}
                </div>
            </div>
            <Cost estimateGroups={estimateGroups} />
        </div>
    )
}

