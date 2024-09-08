'use client'


import { useEstimateSummaryStore } from "@/lib/store/estimateSummaryStore";
import { useEffect, useMemo, useState } from "react";

import { useProjectAmenityStore } from "@/lib/store/projectAmenityStore";
import { useProjectCustomSpaceStore } from "@/lib/store/projectCustomSpaceStore";

import Actions from "./actions";
import Cost from "../estimation/estimate-summary/cost";
import { ProjectAreaDefination } from "../estimation/refinement/form";

type Props = {
    requirementGroups: any[];
    refinements: any[];
    projectId: string;
}
export default function Detail({ requirementGroups, refinements, projectId }: Props) {

    const [colSpan, setColspan] = useState<number>(1);

    const estimates = useEstimateSummaryStore((state) => state.estimates);
    const getProjectEstimates = useEstimateSummaryStore((state) => state.getProjectEstimates);

    useEffect(() => {
        if (projectId) {
            getProjectEstimates(projectId);
        }
    }, [getProjectEstimates, projectId]);

    useMemo(() => {
        if (projectId) {
            setColspan(Object.keys(estimates).length);
        }
    }, [estimates, projectId]);

    return (
        <>
            <div className={`lg:col-span-${colSpan} col-span-12 lg:col-start-2 row-end-2 min-h-900 relative`}>
                <div className={`grid lg:grid-cols-${colSpan} lg:grid-flow-col relative h-full`}>
                    {Object.keys(estimates).map((estimateKey: any, index: number) => (
                        <div key={index} className="file file-1 overflow-x-hidden overflow-y-scroll relative col-span-1 bg-black1 flex flex-col justify-between">
                            <div className="px-30 pb-30 pt-10 flex flex-col justify-between">
                                <div className="flex flex-col justify-start relative z-10">
                                    <Actions />
                                    <div className="mt-[11.111vh]">

                                        <h2>{estimateKey}</h2>

                                        <p>this is the estimate description, which was entered when this variation was created.</p>

                                        <div className="file__border bg-white"></div>

                                        <ListWrapper estimates={estimates[estimateKey]} requirementGroups={requirementGroups} refinements={refinements} projectId={projectId} />
                                    </div>
                                </div>
                            </div>

                            <Cost estimateGroups={estimates[estimateKey]}/>
                        </div>
                    ))}
                </div>
            </div>
            <div></div>
        </>
    )
}

export function ListWrapper({ estimates, requirementGroups, refinements, projectId }: { estimates: any[], requirementGroups: any[], refinements: any[], projectId: string }) {
    return (
        <div className="text-white mt-2 pt-2 pb-[16.111vh]">
            {estimates.map((estimate: any) => (
                <div key={estimate._id}>
                    <div className="font-latobold text-[24px] mb-2">{estimate.section}</div>
                    <Lists estimate={estimate} requirementGroups={requirementGroups} refinements={refinements} projectId={projectId} />
                </div>
            ))}
        </div>
    )
}

export function Lists({ estimate, requirementGroups, refinements, projectId }: { estimate: any, requirementGroups: any[], refinements: any[], projectId: string }) {
    if (estimate.section === 'requirement') {
        return (
            <ul>
                {requirementGroups.map((requirementGroup: any, index: number) => (
                    <Item
                        key={index}
                        projectId={projectId}
                        estimateId={estimate._id}
                        estimateType={estimate.section}
                        title={requirementGroup._id}
                        data={requirementGroup.requirements}
                    />
                ))}
            </ul>
        )
    }
    return (
        <ul>
            {refinements.map((refinement: any, index: any) => (
                <Item
                    key={index}
                    projectId={projectId}
                    estimateId={estimate._id}
                    estimateType={estimate.section}
                    title={refinement.name}
                    data={refinement._id}
                />
            ))}
        </ul>
    )
}

export function Item({ projectId, estimateId, estimateType, title, data }: {
    projectId: string;
    estimateId: string;
    estimateType: string;
    title: string;
    data?: any[]
}) {
    return (
        <li className="font-latolight pb-2 mb-2">
            {title} <br />
            {/* <SubItem estimateId={estimateId} estimateType={estimateType} projectId={projectId} data={data} /> */}
        </li>
    )
}

export function SubItem({ estimateId, estimateType, projectId, data }: { estimateId: string, estimateType: string, projectId: string, data?: any[] }) {
    const [projectAreaDefinations, setProjectAreaDefinations] = useState<ProjectAreaDefination[]>([]);

    // get all project amenities
    const projectAmenities = useProjectAmenityStore(
        (state) => state.projectAmenities
    );
    const getProjectAmenities = useProjectAmenityStore(
        (state) => state.getProjectAmenities
    );

    useEffect(() => {
        getProjectAmenities(projectId);
    }, [getProjectAmenities, projectId]);

    const projectCustomSpaces = useProjectCustomSpaceStore(
        (state) => state.projectCustomSpaces
    );
    const getProjectCustomSpaces = useProjectCustomSpaceStore(
        (state) => state.getProjectCustomSpaces
    );

    useEffect(() => {
        getProjectCustomSpaces(projectId);
    }, [getProjectCustomSpaces, projectId]);

    useEffect(() => {
        setProjectAreaDefinations([...projectCustomSpaces, ...projectAmenities]);
    }, [projectAmenities, projectCustomSpaces]);

    // Requirements
    if (estimateType === 'requirement') {
        return (
            <ul>
                {data && data.map((requirement: any, index: number) => (
                    <RequirementLevel key={index} requirementId={requirement.id} estimateId={estimateId} />
                ))}
            </ul>
        )
    }

    return (
        <ul>
            {projectAreaDefinations.map((projectAreaDefination: { _id: string; name: string, type: string }, index: number) => (
                <RefinementLevel key={index} projectAreaDefinationId={projectAreaDefination._id} estimateId={estimateId} type={projectAreaDefination.type} refinementId={data} />
            ))}
        </ul>
    )
}

export function RequirementLevel({ requirementId, estimateId }: { requirementId: string, estimateId: string }) {
    const [requirementLevel, setRequirementLevel] = useState<any>();

    useEffect(() => {
        const getRequirementLevel = async (id?: string) => {
            const response = await fetch(
                `/api/estimate/requirement/by-requirement/${id}`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ estimateId: estimateId }),
                }
            );

            let requirementLevelResponse = await response.json();

            setRequirementLevel(`${requirementLevelResponse.requirementLevel.level} ${requirementLevelResponse.requirement.label}`);
        };

        getRequirementLevel(requirementId);

    }, [estimateId, requirementId]);

    return (
        <li className="font-light text-xs">{requirementLevel}</li>
    )
}

export function RefinementLevel({ projectAreaDefinationId, estimateId, type, refinementId }: { projectAreaDefinationId: string, estimateId: string, type: string, refinementId: any }) {

    const [refinementLevel, setRefinementLevel] = useState<any>();

    useEffect(() => {
        const getRefinementCustomspaceLevel = async (id?: string) => {
            const response = await fetch(
                `/api/estimate/refinement/by-customspace/${id}`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ estimateId: estimateId, refinementId: refinementId }),
                }
            );

            let refinementLevelResponse = await response.json();
 
            setRefinementLevel(`${refinementLevelResponse.refinementLevel.level} ${refinementLevelResponse.projectCustomSpace.customSpace.customSpaceName}`);
        };

        const getRefinementAmenityLevel = async (id?: string) => {
            const response = await fetch(
                `/api/estimate/refinement/by-amenity/${id}`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ estimateId: estimateId, refinementId: refinementId }),
                }
            );

            let refinementLevelResponse = await response.json();

            setRefinementLevel(`${refinementLevelResponse.refinementLevel.level} ${refinementLevelResponse.projectAmenity.amenity.amenityName}`);
        };

        if (type === 'customspace') {
            getRefinementCustomspaceLevel(projectAreaDefinationId);
        } else {
            getRefinementAmenityLevel(projectAreaDefinationId)
        }

    }, [estimateId, projectAreaDefinationId, refinementId, type]);

    return (
        <li className="font-light text-xs">{refinementLevel}</li>
    )
}