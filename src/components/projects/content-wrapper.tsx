'use client'

import { useAppStore } from "@/app/lib/store/appStore";
import { useProjectStore } from "@/app/lib/store/projectStore";
import { SessionContext } from "@/app/ui/session-provider";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Count from "./count";

export default function ContentWrapper() {

    let { session } = useContext(SessionContext);
    console.log(session);
    const setIsImpty = useProjectStore(state => state.setIsImpty);
    const setProjects = useProjectStore(state => state.setProjects);
    const projects = useProjectStore(state => state.projects);
    const hasMore = useAppStore(state => state.hasMore);

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch(`/api/project/by-user/${session.userId}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            let data = await response.json();
            setProjects(data)
            setIsImpty(!data ? true : false);
            setLoading(false)
        }
        fetchProjects();

    }, [session, setIsImpty, setProjects])

    if (isLoading) return <Loading />

    if (!projects) return <Empty />

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
                                    <Link href={`/projects/${project._id}`} className="absolute js-open-results right-0" >
                                        <Image
                                            src="/images/icon-settings.svg"
                                            width="0"
                                            height="0"
                                            sizes="100vw"
                                            className="w-full h-auto"
                                            alt="settings"
                                        />
                                    </Link>
                                    <div className="file-content text-black">
                                        <Image
                                            src="/images/icon-file.svg"
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

export function Empty() {
    return (
        <div className="lg:col-start-3 lg:col-span-1 col-span-12 flex flex-col items-center justify-center">
            <p className="p-30 text-black">Once you create a project, it will show here.</p>
        </div>
    )
}

export function Loading() {
    return (<p>Loading...</p>)
}