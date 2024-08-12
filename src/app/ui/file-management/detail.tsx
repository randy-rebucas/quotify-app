'use client'

import { useEstimateSummaryStore } from "@/app/lib/store/estimateSummaryStore";
import { IProject } from "@/app/models/Project";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ProjectAreaDefination } from "../estimation/refinement/form";
import { useProjectAmenityStore } from "@/app/lib/store/projectAmenityStore";
import { useProjectCustomSpaceStore } from "@/app/lib/store/projectCustomSpaceStore";
import { useAppStore } from "@/app/lib/store/appStore";

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
    const getProjectEstimates = useEstimateSummaryStore(
        (state) => state.getProjectEstimates
    );

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
                                        <ul className="text-white opacity-50">
                                            <li className="pb-3">
                                                <a href="#" className="text-[24px] font-latobold flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.00075 11.175L12.2437 7.933L13.6577 9.347L8.00075 15.004L2.34375 9.347L3.75775 7.933L7.00075 11.175V0H9.00075V11.175Z" fill="#8C8C8C" />
                                                        <rect y="17" width="16" height="2" fill="#8C8C8C" />
                                                    </svg>
                                                    <div className="ml-3">download</div>
                                                </a>
                                            </li>
                                            <li className="pb-3">
                                                <a href="#" className="text-[24px] font-latobold flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M6.22222 0V1.77778H1.77778V14.2222H14.2222V9.77778H16V15.1111C16 15.3469 15.9064 15.573 15.7397 15.7397C15.573 15.9064 15.3469 16 15.1111 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V0.888889C0 0.653141 0.0936505 0.427048 0.260349 0.260349C0.427048 0.0936505 0.653141 0 0.888889 0H6.22222ZM12.9653 1.77778H8.88889V0H16V7.11111H14.2222V3.03467L8 9.25689L6.74311 8L12.9653 1.77778Z" fill="#8A8A8A" />
                                                    </svg>
                                                    <div className="ml-3">share</div>
                                                </a>
                                            </li>
                                            <li className="pb-3">
                                                <a href="#" className="text-[24px] font-latobold flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M2.914 12.8C2.954 12.8 2.994 12.796 3.034 12.79L6.398 12.2C6.438 12.192 6.476 12.174 6.504 12.144L14.982 3.666C15.0005 3.6475 15.0153 3.62552 15.0253 3.60133C15.0353 3.57713 15.0405 3.55119 15.0405 3.525C15.0405 3.49881 15.0353 3.47287 15.0253 3.44867C15.0153 3.42448 15.0005 3.4025 14.982 3.384L11.658 0.058C11.62 0.02 11.57 0 11.516 0C11.462 0 11.412 0.02 11.374 0.058L2.896 8.536C2.866 8.566 2.848 8.602 2.84 8.642L2.25 12.006C2.23054 12.1131 2.2375 12.2234 2.27025 12.3273C2.30301 12.4311 2.36059 12.5254 2.438 12.602C2.57 12.73 2.736 12.8 2.914 12.8ZM4.262 9.312L11.516 2.06L12.982 3.526L5.728 10.778L3.95 11.092L4.262 9.312ZM15.36 14.48H0.64C0.286 14.48 0 14.766 0 15.12V15.84C0 15.928 0.072 16 0.16 16H15.84C15.928 16 16 15.928 16 15.84V15.12C16 14.766 15.714 14.48 15.36 14.48Z" fill="#878787" />
                                                    </svg>
                                                    <div className="ml-3">edit</div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="mt-[11.111vh]">

                                            <h2>{estimateKey}</h2>

                                            <p>this is the estimate description, which was entered when this variation was created.</p>

                                            <div className="file__border bg-white"></div>

                                            <div className="text-white mt-2 pt-2 pb-[16.111vh]">

                                                {estimates[estimateKey].map((estimate: any) => (
                                                    <div key={estimate._id}>
                                                        <div className="font-latobold text-[24px] mb-2">{estimate.section}</div>
                                                        <Lists estimate={estimate} requirementGroups={requirementGroups} refinements={refinements} projectId={projectId} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-white font-latolight px-30 py-[15px] sticky bottom-0 bg-black z-10">
                                    <p className="font-latolight mb-3 text-white">total cost:</p>
                                    <span className="text-[45px] font-latoblack">$500,000</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div></div>
            </div>
        </>
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