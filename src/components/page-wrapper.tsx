'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { useAppStore } from "@/lib/store/appStore";
import Close from "./estimation/close";



type PageWrapperProps = {
    children: ReactNode
}
// <div class="js-show-on-load wrapper__content navigation animate fade-in delay-last grid"></div>
export default function PageWrapper({ children }: PageWrapperProps) {
    const setIsClose = useAppStore(state => state.setIsClose);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }} className="wrapper__content grid">
                
            <Close onClick={() => setIsClose(false)} />

            {children}

        </motion.div>
    )
}