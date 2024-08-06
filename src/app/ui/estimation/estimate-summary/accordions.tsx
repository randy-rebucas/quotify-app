'use client';

import { MouseEventHandler, useEffect, useState } from "react";
import clsx from "clsx";
import React from "react";
import { useEstimateSummaryStore } from "@/app/lib/store/estimateSummaryStore";
import { useRequirementStore } from "@/app/lib/store/requirementStore";
import { useProjectAmenityStore } from "@/app/lib/store/projectAmenityStore";
import { ProjectAreaDefination } from "../refinement/form";
import { useProjectCustomSpaceStore } from "@/app/lib/store/projectCustomSpaceStore";
import { IRequirementLevel } from "@/app/models/RequirementLevel";

type AccordionProps = {
    projectId: string;
    estimateId: string;
    estimateType: string;
    title: string;
    index: number | null;
    isOpen: boolean;
    data?: any[],
    onClick: MouseEventHandler<HTMLButtonElement>
};

export default function Accordions({ estimate, requirements, refinements, projectId }: { estimate: any, requirements: any[], refinements: any[], projectId: string }) {

    return (
        <>
            <h3 className="text-[18px] mb-[10px] mt-[20px]">{estimate.section}</h3>
            <div id="accordion-flush-1" data-accordion="collapse" data-active-classes="textl-left dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                <AccordionContainer estimate={estimate} requirementGroups={requirements} refinements={refinements} projectId={projectId} />
            </div>
        </>
    )
}

export function AccordionContainer({ estimate, requirementGroups, refinements, projectId }: { estimate: any, requirementGroups: any[], refinements: any[], projectId: string }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index: any) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // const estimateRequirements = useEstimateSummaryStore((state) => state.estimateRequirements);
    // const getProjectEstimateRequirements = useEstimateSummaryStore(
    //     (state) => state.getProjectEstimateRequirements
    // );

    // useEffect(() => {
    //     if (estimate) {
    //         if (estimate.section === 'requirement') {
    //             getProjectEstimateRequirements(estimate._id);
    //         }
    //     }
    // }, [getProjectEstimateRequirements, estimate]);

    if (estimate.section === 'requirement') {
        return (
            <>
                {requirementGroups.map((requirementGroup: any, index: number) => (
                    <Accordion
                        key={index}
                        projectId={projectId}
                        estimateId={estimate._id}
                        estimateType={estimate.section}
                        title={requirementGroup._id}
                        isOpen={activeIndex === index}
                        index={activeIndex}
                        data={requirementGroup.requirements}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </>
        )
    }
    return (
        <>
            {refinements.map((refinement: any, index: any) => (
                <Accordion
                    key={index}
                    projectId={projectId}
                    estimateId={estimate._id}
                    estimateType={estimate.section}
                    title={refinement.name}
                    isOpen={activeIndex === index}
                    index={activeIndex}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </>
    )
}

export function Accordion({ projectId, estimateId, estimateType, title, isOpen, index, data, onClick }: AccordionProps) {

    return (
        <>
            <h2 id="accordion-flush-heading-1-1" className="text-[12px]">
                <button type="button" onClick={onClick} className="flex items-center justify-between w-full rtl:text-right border-b border-[#505050] gap-3"
                    data-accordion-target={`#accordion-flush-body-${index}`} aria-expanded={isOpen ? true : false} aria-controls="accordion-flush-body-1-1">
                    <span>{title}</span>
                    <svg data-accordion-icon className={clsx(
                        'w-3 h-3 shrink-0',
                        {
                            'rotate-180': isOpen
                        },
                    )} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id={`accordion-flush-body-${index}`} className={isOpen ? '' : 'hidden'} aria-labelledby="accordion-flush-heading-1-1">
                <div className="py-5 border-b border-[#505050]">

                    <ul className="ml-[15px] text-[12px] text-black">
                        <AccordionContent estimateId={estimateId} estimateType={estimateType} projectId={projectId} requirements={data} />
                    </ul>
                </div>
            </div>
        </>
    )
}

export function AccordionContent({ estimateId, estimateType, projectId, requirements }: { estimateId: string, estimateType: string, projectId: string, requirements?: any[] }) {

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
                {requirements && requirements.map((requirement: any, index: number) => (
                    <li key={index}><RequirementLevel requirementId={requirement.id} estimateId={estimateId} /></li>
                ))}
            </>
        )
    }

    return (
        <>
            {projectAreaDefinations.map((projectAreaDefination: { _id: string; name: string, type: string }, index: number) => (
                <li key={index}><RefinementLevel projectAreaDefinationId={projectAreaDefination._id} estimateId={estimateId} type={projectAreaDefination.type} /></li>
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
        <>
            {requirementLevel}
        </>
    )
}

export function RefinementLevel({ projectAreaDefinationId, estimateId, type }: { projectAreaDefinationId: string, estimateId: string, type: string }) {

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
                    body: JSON.stringify({ estimateId: estimateId }),
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
                    body: JSON.stringify({ estimateId: estimateId }),
                }
            );

            let refinementLevelResponse = await response.json();
            // console.log(refinementLevelResponse)
            setRefinementLevel(`${refinementLevelResponse.refinementLevel.level} ${refinementLevelResponse.projectAmenity.amenity.amenityName}`);
        };

        if (type === 'customspace') {
            getRefinementCustomspaceLevel(projectAreaDefinationId);
        } else {
            getRefinementAmenityLevel(projectAreaDefinationId)
        }

    }, [estimateId, projectAreaDefinationId, type]);

    return (
        <>
            {refinementLevel}
        </>
    )
}