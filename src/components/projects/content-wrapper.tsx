'use client'

import { useAppStore } from "@/lib/store/appStore";
import { useProjectStore } from "@/lib/store/projectStore";
import { SessionContext } from "@/components/session-provider";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Count from "./count";
import { IProject } from "@/models/Project";

export default function ContentWrapper({ projects }: { projects: any[] }) {

    let session = useContext(SessionContext);

    const setProjects = useProjectStore(state => state.setProjects);

    useEffect(() => {

        if (projects) {
            setProjects(projects)
        }

    }, [projects, setProjects])

    return (
        <>
            {projects.length === 0 && <Empty />}
            {projects && <Projects projects={projects} />}
        </>
    )
}

export function Empty() {
    return (
        <div className="lg:col-start-3 lg:col-span-1 col-span-12 flex flex-col items-center justify-center">
            <p className="p-30 text-black">Once you create a project, it will show here.</p>
        </div>
    )
}

export function Projects({ projects }: { projects: any[] }) {
    const hasMore = useAppStore(state => state.hasMore);
    const items = projects ? !hasMore ? projects.slice(0, 4) : projects : [];

    return (
        <div className={clsx(
            'js-wrapper__results wrapper__results lg:col-span-4 col-span-12 col-end-5 d-flex flex-col overflow-x-hidden overflow-y-scroll',
            {
                'has-one-row': !hasMore,
            },
        )}>
            <div className="lg:col-start-2 h-full">
                <div className="grid lg:grid-cols-4 relative h-full" style={{ gridTemplateColumns: '25% 25% 25% 25%' }}>

                    {items.map((project: any, index: number) => (
                        <div className={`file file-${index + 1} lg:col-${index % 4 == 0 ? 'span' : 'start'}-${index % 4 + 1}`} key={index} >
                            <div className="file-map"></div>
                            <div className="file-img" data-lat="48.895651" data-long="2.290569" data-color="#383A64">
                                <div className="flex flex-col justify-start relative z-10">
                                    <Link href={`/project/${project._id}`} className="absolute js-open-results right-0" >
                                        <Image
                                            src={'https://quotify.b-cdn.net/icon-settings.svg'}
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            className="w-full h-auto"
                                            alt="settings"
                                        />
                                    </Link>
                                    <div className="file-content text-black">
                                        <Image
                                            src={'https://quotify.b-cdn.net/icon-file.svg'}
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            className="w-12 h-auto"
                                            alt="file"
                                            priority={false}
                                        />
                                        <h2>{project.spaceName}</h2>

                                        <div className="file__border bg-black"></div>

                                        <div className="file__address">
                                            {project.address}
                                        </div>

                                        <Count projectId={project._id} />

                                    </div>
                                </div>
                                <div className="file__updated text-black">
                                    {/* last edited 20th August, 2020 */}
                                    {!project.isCompleted && <p>INCOMPLETE</p>}
                                    {!project.isCompleted && <RedirectLinks project={project} />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export function RedirectLinks({ project }: { project: IProject }) {

    if (project.lastUri === 'estimate-summary') {
        return <Link
            href={`/estimation/${project.lastUri}/${project._id}/preview`}
            className={`text-black `}>Continue to create...
        </Link>
    }
    if (project.lastUri === 'project-definition') {
        return <Link
            href={`/estimation/${project.lastUri}/${project._id}`}
            className={`text-black `}>Continue to create...
        </Link>
    }
    return <Link
        href={`/estimation/${project.lastUri}/${project._id}/create`}
        className={`text-black `}>Continue to create...
    </Link>
}