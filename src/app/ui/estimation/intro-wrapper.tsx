'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Close from "./close";
import { useAppStore } from "@/lib/store/appStore";

type IntroWrapperProps = {
    children: ReactNode
}

export default function IntroWrapper({ children }: IntroWrapperProps) {

    const setIsClose = useAppStore(state => state.setIsClose);

    return (
        <motion.div
            initial={{ display: 'grid' }}
            animate={{ display: 'table-column' }}
            transition={{ delay: 1.5 }} className="wrapper__content">
            <Close onClick={() => setIsClose(false)} />

            {children}
        </motion.div>
    )
}