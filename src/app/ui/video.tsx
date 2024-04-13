'use client'

import Image from "next/image";
import Link from "next/link";

export default function VideoWrapper({ src }: { src: string }) {
    return (
        <div className="grid lg:grid-cols-3 lg:grid-flow-col p-30">
            <Video source={src} />
        </div>
    )
}

export function Video({ source }: { source: string }) {

    return (
        <div className="video-wrapper col-span-3 relative flex items-center justify-center bg-cover"
            style={{
                backgroundImage: `url('/images/thumb-vid.png')`
            }}>
            <Link href="#" id="video-wrapper-play" className="video-wrapper__thumb flex justify-center lg:w-[200px] w-4/12">
                <Image
                    src="/images/icon-play.svg"
                    alt="thumb-video"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </Link>

            <video id="video-content" className="video-content bg-black hidden col-span-3 relative w-full" controls preload="none">
                <source src={source} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}