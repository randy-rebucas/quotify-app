'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Close from "./estimation/close";
import { useAppStore } from "../lib/store/appStore";

type PageWrapperProps = {
    children: ReactNode
}
// <div class="js-show-on-load wrapper__content navigation animate fade-in delay-last grid"></div>
export default function PageWrapper({ children }: PageWrapperProps) {
    const updateIsClose = useAppStore(state => state.updateIsClose);
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }} className="wrapper__content grid">
                
            <Close onClick={() => updateIsClose(false)} />

            {children}

        </motion.div>
    )
}