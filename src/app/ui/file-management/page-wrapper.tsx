'use client';

import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

type Props = {
    children: ReactNode
}

export default function PageWrapper({ children }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }} className="wrapper__content-2 grid">
            {children}
        </motion.div>
    )
}