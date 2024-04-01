'use client'
import Image from "next/image";
import { motion } from "framer-motion"
import { LegacyRef, MutableRefObject, useRef, useState } from "react";

export function Video() {

    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current;
        }
    }

    return (
        <motion.div
            initial={{ visibility: 'hidden' }}
            animate={{ visibility: 'visible' }}
            transition={{ delay: 1.8 }}
            className="video-wrapper col-span-3 relative flex items-center justify-center bg-cover"
            style={{
                backgroundImage: `url('/images/thumb-vid.png')`
            }} ref={videoRef} >
            <button type="button" onClick={playVideo} className="video-wrapper__thumb flex justify-center lg:w-[200px] w-4/12">
                <Image
                    src="/images/icon-play.svg"
                    alt="thumb-video"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </button>

            <video className="bg-black hidden col-span-3 relative w-full" controls preload="none">
                <source src="https://quotify.mmoser.app/src/videos/flowbite.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </motion.div>
    )
}