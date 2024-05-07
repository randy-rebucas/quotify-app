'use client';

import Image from "next/image";
// import { files } from "./files";
import clsx from "clsx";
import { useEffect } from "react";
import { IProject } from "@/app/models/Project";
import Empty from "./empty";

// 
export default function Result({ isMore, files }: { isMore: boolean, files: IProject[] }) {

    const data = !isMore ? files.slice(0, 4) : files;

    return (
        <div className={clsx(
            'js-wrapper__results wrapper__results lg:col-span-4 col-span-12 col-end-5 d-flex flex-col overflow-x-hidden overflow-y-scroll',
            {
                'has-one-row': !isMore,
            },
        )}>
            <div className="lg:col-start-2 h-full">
                <div className="grid lg:grid-cols-4 lg:grid-flow-col relative h-full">

                    {data.map((file, index) => (
                        <div className={`file file-${index + 1} lg:col-${index % 4 == 0 ? 'span' : 'start'}-${index % 4 + 1} `} key={index}>
                            <div className="file-map"></div>
                            <div className="file-img" data-lat="48.895651" data-long="2.290569" data-color="#383A64">
                                <div className="flex flex-col justify-start relative z-10">
                                    <a className="absolute js-open-results right-0">
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
                                        <h2>{file.spaceName}</h2>

                                        <div className="file__border bg-black"></div>

                                        <div className="file__address">
                                            {file.address.line1}<br />
                                            {file.address.line2}<br />
                                            {file.address.state}<br />
                                            {file.address.zipCode}
                                        </div>

                                        <div className="file__est">
                                            4 estimates
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
