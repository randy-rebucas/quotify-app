'use client';

import { MouseEventHandler, useEffect, useState } from "react";
import clsx from "clsx";
import React from "react";
import { useProjectAmenityStore } from "@/app/lib/store/projectAmenityStore";
import { ProjectAreaDefination } from "../refinement/form";
import { useProjectCustomSpaceStore } from "@/app/lib/store/projectCustomSpaceStore";
import { IRequirementLevel } from "@/models/RequirementLevel";

type TableRowProps = {
    projectId: string;
    estimateId: string;
    estimateType: string;
    title: string;
    data?: any[]
};

export default function Table(
    { estimate, requirements, refinements, projectId }:
        { estimate: any, requirements: any[], refinements: any[], projectId: string }
) {

    return (
        <table>

            <TableHead title={estimate.section} />

            <TableBody estimate={estimate} requirementGroups={requirements} refinements={refinements} projectId={projectId} />

        </table>
    )
}

export function TableHead({ title }: { title: string }) {
    return (
        <thead>
            <tr>
                <th>{title}</th>
            </tr>
        </thead>
    )
}

export function TableBody({ estimate, requirementGroups, refinements, projectId }: { estimate: any, requirementGroups: any[], refinements: any[], projectId: string }) {

    if (estimate.section === 'requirement') {
        return (
            <tbody>
                {requirementGroups.map((requirementGroup: any, index: number) => (
                    <TableRow
                        key={index}
                        projectId={projectId}
                        estimateId={estimate._id}
                        estimateType={estimate.section}
                        title={requirementGroup._id}
                        data={requirementGroup.requirements}
                    />
                ))}
            </tbody>
        )
    }
    return (
        <tbody>
            {refinements.map((refinement: any, index: any) => (
                <TableRow
                    key={index}
                    projectId={projectId}
                    estimateId={estimate._id}
                    estimateType={estimate.section}
                    title={refinement.name}
                    data={refinement._id}
                />
            ))}
        </tbody>
    )
}

export function TableRow({ projectId, estimateId, estimateType, title, data }: TableRowProps) {

    return (
        <tr>
            <td>{title}</td>
            <td>
                <ul className="ml-[15px] text-[12px] text-black">
                    <TableCell estimateId={estimateId} estimateType={estimateType} projectId={projectId} data={data} />
                </ul>
            </td>
        </tr>
    )
}

export function TableCell({ estimateId, estimateType, projectId, data }: { estimateId: string, estimateType: string, projectId: string, data?: any[] }) {

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
            <>
                {data && data.map((requirement: any, index: number) => (
                    <RequirementLevel key={index} requirementId={requirement.id} estimateId={estimateId} />
                ))}
            </>
        )
    }

    return (
        <>
            {projectAreaDefinations.map((projectAreaDefination: { _id: string; name: string, type: string }, index: number) => (
                <RefinementLevel key={index} projectAreaDefinationId={projectAreaDefination._id} estimateId={estimateId} type={projectAreaDefination.type} refinementId={data} />
            ))}
        </>
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
        <li> {requirementLevel}</li>
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
            // console.log(refinementLevelResponse)
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
        <li> {refinementLevel}</li>
    )
}