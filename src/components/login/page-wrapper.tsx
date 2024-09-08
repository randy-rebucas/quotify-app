'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FormWrapperProps = {
    children: ReactNode
}

export default function PageWrapper({ children }: FormWrapperProps) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`wrapper__content grid`}>

            {children}

        </motion.div>
    )
}