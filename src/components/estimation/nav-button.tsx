'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function NavButton() {

    return (
        <motion.div
            initial={{ opacity: 0, zIndex: 0 }}
            animate={{ opacity: 1, zIndex: 99999 }}
            transition={{ delay: 3 }}
        >
            <Link href="/estimation/project-information" id="js-enable-estimation-nav" className="js-autoplay-show enable-estimation-nav">
                <Image
                    src={'https://quotify.b-cdn.net/icon-enable.png'}
                    width={167}
                    height={167}
                    alt="next"
                />
            </Link>
        </motion.div>
    );
}