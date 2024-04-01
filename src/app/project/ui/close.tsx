'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Close() {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="js-autoplay-show close-btn opacity-0 absolute top-0 right-0 flex-col items-end p-30 z-30">
            <a href="#" className="js-close-project">
                <Image
                    src="/images/icon-close.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                    alt="close"
                />
            </a>
        </motion.div>
    );
}