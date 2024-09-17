import { fetchMediaLibraryById, fetchProject, fetchRefinements, fetchRequirementsByGroup } from "@/lib/data";

import Image from "next/image";
import { Modal } from "./modal";
import Link from "next/link";
import Detail from "@/components/projects/detail";


export default async function ProjectDetailModal({ params }: { params: { id: string } }) {
    const id = params.id;

    const project = await fetchProject(id);

    const requirement_groups = await fetchRequirementsByGroup();

    const refinements = await fetchRefinements();
    return (
        <Modal>

            <div className="grid lg:grid-cols-5 lg:grid-flow-col h-full min-h-900 bg-black1" >
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
                                            <div className="font-latobold text-[24px]">{project.workspaceAssigned}%</div>
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
                                            <div className="font-latobold text-[24px]">{project.staffWorkRemotely}%</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <Link href="/estimation" className="flex text-[24px] text-white opacity-50 hover:opacity-1">
                                <Image
                                    src="/images/icon-create.svg"
                                    width={15}
                                    height={15}
                                    className="w-[16px]"
                                    alt="create-new"
                                />
                                <div className="pl-2">add estimate</div>
                            </Link > */}
                        </div>
                    </div>
                </div>

                <Detail requirementGroups={requirement_groups} refinements={refinements} projectId={id}/>
            </div>

        </Modal>
    )
}