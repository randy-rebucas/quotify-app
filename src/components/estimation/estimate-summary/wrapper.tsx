'use client';

import { useEffect } from "react";
import Column from "./column";
import { tabMapping } from "../refinement/entities";
import ColumnPrint from "./column-print";
import { useEstimateSummaryStore } from "@/lib/store/estimateSummaryStore";


export default function Wrapper({ projectId, requirements, refinements }: { projectId: string, requirements: any[], refinements: any[] }) {
    const estimates = useEstimateSummaryStore((state) => state.estimates);
    const getProjectEstimates = useEstimateSummaryStore(
        (state) => state.getProjectEstimates
    );

    useEffect(() => {
        if (projectId) {
            getProjectEstimates(projectId);
        }
    }, [getProjectEstimates, projectId]);

    return (
        <>
         {/* hide-on-print */}
            <div className="lg:col-span-4 col-span-12 h-full w-full relative overflow-y-scroll overflow-x-hidden">
                <div className="grid grid-cols-4 overflow-y-visible estimates-grid">
                    {Object.keys(estimates).map((estimateKey: any, index: number) => (
                        <Column key={index} estimateGroups={estimates[estimateKey]} requirements={requirements} refinements={refinements} projectId={projectId}>
                            <div className="estimation-col__header pt-[70px] pb-[20px] px-[30px] min-h-220">
                                <div className="flex items-end justify-start">
                                    <h2 className="opacity-60 font-latobold"><span className="font-latoblack">{tabMapping.get(index)}:</span>&nbsp; {estimateKey}</h2>
                                </div>
                                <p className="mt-3 font-latolight text-black text-opacity-60">this is a short description for this estimate.</p>
                            </div>

                            <div className="flex flex-col justify-between text-white relative hide-on-print" id={`search-${index}`}>
                                <svg className="absolute top-[20px] left-[30px]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M6.15878 12.3176C2.74777 12.3176 0 9.5698 0 6.15878C0 2.74777 2.74777 0 6.15878 0C9.5698 0 12.3176 2.74777 12.3176 6.15878C12.3176 9.5698 9.5698 12.3176 6.15878 12.3176ZM6.15878 0.947505C3.26889 0.947505 0.947505 3.26889 0.947505 6.15878C0.947505 9.04868 3.26889 11.3701 6.15878 11.3701C9.04868 11.3701 11.3701 9.04868 11.3701 6.15878C11.3701 3.26889 9.04868 0.947505 6.15878 0.947505Z" fill="#505050" />
                                    <path d="M10.7461 10.0732L15.0004 14.3275L14.3305 14.9974L10.0762 10.7431L10.7461 10.0732Z" fill="#505050" />
                                </svg>
                                <input className="pl-[50px] w-full bg-black bg-opacity-10 !text-[#505050] placeholder:!text-[#505050] p-[15px] outline-none border-none" value="" readOnly placeholder="search" />
                            </div>
                        </Column>
                    ))}
                </div>
            </div>

            {/* <div className="show-on-print">
                {Object.keys(estimates).map((estimateKey: any, index: number) => (
                    <ColumnPrint key={index} estimateGroups={estimates[estimateKey]} requirements={requirements} refinements={refinements} projectId={projectId}>
                        <h2>{tabMapping.get(index)}: {estimateKey}</h2>
                    </ColumnPrint>
                ))}
            </div> */}
        </>
    )
}