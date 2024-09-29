'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { MouseEventHandler, useState } from "react";
import Link from "next/link";

// This block shows the close popup block
export default function Close({ onClick }: { onClick: MouseEventHandler<HTMLAnchorElement> }) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="close-btn opacity-0 absolute top-0 right-0 flex-col items-end p-30 z-30">
            <Link href="#" onClick={onClick} className="js-close-project">
                <Image
                    src={'https://quotify.b-cdn.net/icon-close.svg'}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                    alt="close"
                />
            </Link>
        </motion.div>
    );
}