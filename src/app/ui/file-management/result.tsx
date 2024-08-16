'use client';

import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import EstimateCount from "./estimate-count";
import { IProject } from "@/app/models/Project";
import { useAppStore } from "@/app/lib/store/appStore";

type Props = {
    projects: IProject[];
}

export default function Result({ projects }: Props) {

    const hasMore = useAppStore(state => state.hasMore);
    const setProjectId = useAppStore(state => state.setProjectId);

    const items = !hasMore ? projects.slice(0, 4) : projects;

    return (
        <div className={clsx(
            'js-wrapper__results wrapper__results lg:col-span-4 col-span-12 col-end-5 d-flex flex-col overflow-x-hidden overflow-y-scroll',
            {
                'has-one-row': !hasMore,
            },
        )}>
            <div className="lg:col-start-2 h-full">
                <div className="grid lg:grid-cols-4 relative h-full" style={{ gridTemplateColumns: 'auto auto auto auto' }}>

                    {items.map((project: any, index: number) => (
                        <div className={`file file-${index + 1} lg:col-${index % 4 == 0 ? 'span' : 'start'}-${index % 4 + 1}`} key={index} >
                            <div className="file-map"></div>
                            <div className="file-img" data-lat="48.895651" data-long="2.290569" data-color="#383A64">
                                <div className="flex flex-col justify-start relative z-10">
                                    <a href="#" className="absolute js-open-results right-0" onClick={() => setProjectId(project._id)}>
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
                                        href={`/estimation/${project.lastUri}/${project._id}/${project.lastUri === 'estimate-summary' ? 'preview' : 'create'}`}
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
