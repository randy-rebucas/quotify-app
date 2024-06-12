'use client';

import Image from "next/image";
import clsx from "clsx";
import { MouseEventHandler, useEffect, useState } from "react";
import { IProject } from "@/app/models/Project";
import Link from "next/link";

export default function Result({ isMore, files, onClick }: { isMore: boolean, files: IProject[], onClick: MouseEventHandler<HTMLAnchorElement> }) {

    const projects = !isMore ? files.slice(0, 4) : files;

    return (
        <div className={clsx(
            'js-wrapper__results wrapper__results lg:col-span-4 col-span-12 col-end-5 d-flex flex-col overflow-x-hidden overflow-y-scroll',
            {
                'has-one-row': !isMore,
            },
        )}>
            <div className="lg:col-start-2 h-full">
                <div className="grid lg:grid-cols-4 lg:grid-flow-col relative h-full">

                    {projects.map((project: any, index: number) => (
                        <div className={`file file-${index + 1} lg:col-${index % 4 == 0 ? 'span' : 'start'}-${index % 4 + 1}`} key={index}>
                            <div className="file-map"></div>
                            <div className="file-img" data-lat="48.895651" data-long="2.290569" data-color="#383A64">
                                <div className="flex flex-col justify-start relative z-10">
                                    <a href="#" className="absolute js-open-results right-0" data-file={project._id} onClick={onClick}>
                                        <Image
                                            src="/images/icon-settings.svg"
                                            width={25}
                                            height={25}
                                            alt="settings"
                                        />
                                    </a>
                                    <div className="file-content text-black">
                                        <Image
                                            src="/images/icon-file.svg"
                                            width={35}
                                            height={35}
                                            className="mb-5"
                                            alt="file"
                                        />
                                        <h2>{project.spaceName}</h2>

                                        <div className="file__border bg-black"></div>

                                        <div className="file__address">
                                            {project.address}
                                        </div>

                                        <EstimateCount projectId={project._id} />

                                    </div>
                                </div>
                                <div className="file__updated text-black">
                                    {/* last edited 20th August, 2020 */}
                                    {!project.isCompleted && <p>INCOMPLETE</p>}
                                    {!project.isCompleted && <Link
                                        href={`/estimation/${project.lastUri}/${project._id}/create`}
                                        className={`text-black `}>Continue to create...
                                    </Link>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export function EstimateCount({ projectId }: { projectId: string }) {
    
    const [estimatePropertyCount, setEstimatePropertyCount] = useState<number>(0);

    useEffect(() => {
        const getEstimateByProperty = async (projectId: string) => {
            const response = await fetch(`/api/estimate/by-property/${projectId}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            let estimatePropertyResponse = await response.json();

            setEstimatePropertyCount(estimatePropertyResponse.length);
        }

        if (projectId) {
            getEstimateByProperty(projectId);
        }
    }, [projectId])

    return (
        <div className="file__est">
            {estimatePropertyCount} estimates
        </div>
    );
}