'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MainWrapperProps = {
    children: ReactNode
}

export default function MainWrapper({ children }: MainWrapperProps) {
    return (
        <motion.div
            initial={{ display: 'table-column' }}
            animate={{ display: 'grid' }}
            transition={{ delay: 1.5 }} className="wrapper__content">
            {children}
        </motion.div>
    )
}