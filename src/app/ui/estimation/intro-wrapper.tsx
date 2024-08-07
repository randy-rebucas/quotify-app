'use client';

import { useAppStore } from "@/app/lib/store/appStore";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Close from "./close";

type IntroWrapperProps = {
    children: ReactNode
}

export default function IntroWrapper({ children }: IntroWrapperProps) {

    const updateIsClose = useAppStore(state => state.updateIsClose);

    return (
        <motion.div
            initial={{ display: 'grid' }}
            animate={{ display: 'table-column' }}
            transition={{ delay: 1.5 }} className="wrapper__content">
            <Close onClick={() => updateIsClose(false)} />

            {children}
        </motion.div>
    )
}