'use client';

import { motion } from "framer-motion";

export default function Title({ title }: { title: string }) {
    return (
        <motion.div
            initial={{ opacity: 1, translateY: 0, display: 'none'}}
            animate={{ opacity: 0.2, translateY: -165, display: 'block' }}
            transition={{ duration: 1, delay: 1, ease: "linear" }}
            className="js-autoplay-true absolute col-span-2 col-start-3 row-span-3 p-30 flex flex-col justify-start items-start">
            <h1 className="pt-[168px] font-bold font-latoblack xl:text-6xl md:text-5xl text-4xl text-white">
                {title}</h1>
        </motion.div>
    )
}