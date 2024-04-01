'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import IntroMenu from "./intro-menu";


export default function PageWrapper() {

    return (
        <motion.div
            initial={{ display: 'grid' }}
            animate={{ display: 'table-column' }}
            transition={{ delay: 2 }}
            className="js-show-on-load wrapper__content navigation" >

            {/* <!--
                /*  Close Popup Button
                /*  This block shows the close popup block
                /--> */}
            <div className="absolute top-0 right-0 flex flex-col items-end p-30">
                <Link href="#" className="js-close-project">
                    <Image
                        src="/images/icon-close-white.svg"
                        width={50}
                        height={50}
                        alt="close"
                    />
                </Link>
            </div>

            {/* <!--
                /*  Menu Introduction
                /*  This block shows on page introduction animation.
                /*  It will be hidden once animation is finished.                
                /--> */}
            <IntroMenu />

        </motion.div>
    )
}