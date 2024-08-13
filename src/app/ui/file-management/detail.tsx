'use client'

import Image from "next/image";
import Link from "next/link";
import { useEstimateSummaryStore } from "@/app/lib/store/estimateSummaryStore";
import { IProject } from "@/app/models/Project";
import { notFound } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ProjectAreaDefination } from "../estimation/refinement/form";
import { useProjectAmenityStore } from "@/app/lib/store/projectAmenityStore";
import { useProjectCustomSpaceStore } from "@/app/lib/store/projectCustomSpaceStore";
import { useAppStore } from "@/app/lib/store/appStore";
import Total from "./total";
import Actions from "./actions";

type Props = {
    requirementGroups: any[];
    refinements: any[];
}
export default function Detail({ requirementGroups, refinements }: Props) {

    const projectId = useAppStore(state => state.projectId);

    if (!projectId) {
        notFound();
    }

    const setProjectId = useAppStore(state => state.setProjectId);

    const [project, setProject] = useState<IProject>()
    const [workspaceAssigned, setWorkspanceAssigned] = useState<number>(0);
    const [staffWorkingRemotely, setStaffWorkingRemotely] = useState<number>(0);
    const [colSpan, setColspan] = useState<number>(1);

    const estimates = useEstimateSummaryStore((state) => state.estimates);
    const getProjectEstimates = useEstimateSummaryStore((state) => state.getProjectEstimates);

    useEffect(() => {
        if (projectId) {
            getProjectEstimates(projectId);
        }
    }, [getProjectEstimates, projectId]);

    useEffect(() => {
        const getProject = async (id: string) => {
            const response = await fetch(`/api/project/${id}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            let projectResponse = await response.json();

            setProject(projectResponse);
        }

        if (projectId) {
            getProject(projectId);
        }

    }, [projectId])

    useEffect(() => {
        if (project) {
            const seatingPercentage = +project.seatingPercentage;
            setWorkspanceAssigned(seatingPercentage);
            setStaffWorkingRemotely(100 - seatingPercentage);
        }
    }, [project])

    useMemo(() => {
        if (projectId) {
            setColspan(Object.keys(estimates).length);
        }
    }, [estimates, projectId]);

    return (
        <>
            <div className="grid lg:grid-cols-5 lg:grid-flow-col h-full min-h-900" >

                <div className="file col-span-1 flex flex-col justify-between  relative bg-black">
                    <div className="file-map absolute top-0 left-0 w-full h-full z-10"></div>
                    <div className="file-img h-full" data-lat="48.895651" data-long="2.290569" data-color="transparent">
                        <div className="flex flex-col justify-between relative z-10 h-full p-30 overflow-x-hidden overflow-y-scroll">
                            <div>
                                <Image
                                    src="/images/icon-file.svg"
                                    width={35}
                                    height={35}
                                    className="mb-5 filter brightness-200 invert"
                                    alt="file"
                                />
                                <h2>{project?.spaceName}</h2>

                                <div className="file__border bg-white"></div>

                                <div className="file__address">
                                    {project?.address}
                                </div>

                                <div className="text-white mt-2 pt-[10.093vh]">
                                    <ul>
                                        <li className="font-latolight pb-2 mb-3">
                                            <div className="flex pb-1">
                                                <Image
                                                    src="/images/icon-mini-space-size.svg"
                                                    width={15}
                                                    height={15}
                                                    className="mb-5 filter brightness-200 invert"
                                                    alt=""
                                                />
                                                <div className="pl-2 text-[14px]">space size</div>
                                            </div>
                                            <div className="font-latobold text-[24px]">{Number(project?.spaceSize).toLocaleString()} sqft</div>
                                        </li>
                                        <li className="font-latolight pb-2 mb-3">
                                            <div className="flex pb-1">
                                                <Image
                                                    src="/images/icon-mini-rentable-area.svg"
                                                    width={15}
                                                    height={15}
                                                    className="mb-5 filter brightness-200 invert"
                                                    alt=""
                                                />
                                                <div className="pl-2 text-[14px]">rentable area</div>
                                            </div>
                                            <div className="font-latobold text-[24px]">{Number(project?.rentableArea).toLocaleString()} sqft</div>
                                        </li>
                                        <li className="font-latolight pb-2 mb-3">
                                            <div className="flex pb-1">
                                                <Image
                                                    src="/images/icon-mini-target-headcount.svg"
                                                    width={15}
                                                    height={15}
                                                    className="mb-5 filter brightness-200 invert"
                                                    alt=""
                                                />
                                                <div className="pl-2 text-[14px]">target headcount</div>
                                            </div>
                                            <div className="font-latobold text-[24px]">{project?.headCount}</div>
                                        </li>
                                        <li className="font-latolight pb-2 mb-3">
                                            <div className="flex pb-1">
                                                <Image
                                                    src="/images/icon-mini-workspace.svg"
                                                    width={15}
                                                    height={15}
                                                    className="mb-5 filter brightness-200 invert"
                                                    alt=""
                                                />
                                                <div className="pl-2 text-[14px]">workspace assigned</div>
                                            </div>
                                            <div className="font-latobold text-[24px]">{workspaceAssigned}%</div>
                                        </li>
                                        <li className="font-latolight pb-2 mb-3">
                                            <div className="flex pb-1">
                                                <Image
                                                    src="/images/icon-mini-staff.svg"
                                                    width={15}
                                                    height={15}
                                                    className="mb-5 filter brightness-200 invert"
                                                    alt=""
                                                />
                                                <div className="pl-2 text-[14px]">staff working remotely</div>
                                            </div>
                                            <div className="font-latobold text-[24px]">{staffWorkingRemotely}%</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="/estimation" className="flex text-[24px] text-white opacity-50 hover:opacity-1">
                                <Image
                                    src="/images/icon-create.svg"
                                    width={15}
                                    height={15}
                                    className="w-[16px]"
                                    alt="create-new"
                                />
                                <div className="pl-2">add estimate</div>
                            </Link >
                        </div>
                    </div>
                </div>

                <div className={`lg:col-span-${colSpan} col-span-12 lg:col-start-2 row-end-2 min-h-900 relative`}>
                    <div className="close-btn opacity-1 absolute top-0 right-0 flex flex-col items-end p-30 z-30">
                        <a href="#" className="js-close-results" onClick={() => setProjectId(null)}>
                            <Image
                                src="/images/icon-close.svg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="filter contrast-200 brightness-200 w-full h-auto"
                                alt="close"
                            />
                        </a>
                    </div>
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

                                <Total />
                            </div>
                        ))}

                    </div>
                </div>

                <div></div>
            </div>
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
            <SubItem estimateId={estimateId} estimateType={estimateType} projectId={projectId} data={data} />
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
        <li className="font-light text-xs">{refinementLevel}</li>
    )
}