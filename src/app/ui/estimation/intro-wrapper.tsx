'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

type IntroWrapperProps = {
    children: ReactNode
}

export default function IntroWrapper({ children }: IntroWrapperProps) {
    return (
        <motion.div
            initial={{ display: 'grid' }}
            animate={{ display: 'table-column' }}
            transition={{ delay: 1.5 }} className="wrapper__content">
            {children}
        </motion.div>
    )
}