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
            <Link href="/management">
                <Image
                    src="/images/icon-submit.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="brightness-0 w-full h-auto"
                    alt="next"
                />
            </Link>
        </motion.div>
    );
}