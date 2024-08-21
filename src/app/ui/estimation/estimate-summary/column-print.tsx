'use client';

import { ReactNode } from "react";
import Accordions from "./accordions";
import Cost from "./cost";
import Tables from "./tables";

type ColumnProps = {
    estimateGroups: any[];
    requirements: any[];
    refinements: any[];
    projectId: string;
    children: ReactNode;
}

export default function ColumnPrint({ estimateGroups, requirements, refinements, projectId, children }: ColumnProps) {

    return (
        <div>
            {children}

            {estimateGroups.map((estimate: any) => (
                <Tables key={estimate._id} estimate={estimate} requirements={requirements} refinements={refinements} projectId={projectId} />
            ))}
            
            <Cost estimateGroups={estimateGroups} />
        </div>
    )
}