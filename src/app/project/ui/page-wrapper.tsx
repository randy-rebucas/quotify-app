'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FormWrapperProps = {
    children: ReactNode
}

export default function PageWrapper({ children }: FormWrapperProps) {

    return (
        <motion.div
            style={{ backgroundImage: 'url(../87b9f42fb3d0a1130d1b.png)' }}
            animate={{ backgroundImage: 'none', }}
            transition={{ duration: 1.5, delay: 5 }}
            className="js-wrapper wrapper bg-fixed bg-cover">

            {children}

        </motion.div>
    )
}