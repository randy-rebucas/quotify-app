'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Close from "./estimation/close";
import { useAppStore } from "../lib/store/appStore";
import { useSession } from "next-auth/react";

type PageWrapperProps = {
    children: ReactNode
}
// <div class="js-show-on-load wrapper__content navigation animate fade-in delay-last grid"></div>
export default function PageWrapper({ children }: PageWrapperProps) {
    const setIsClose = useAppStore(state => state.setIsClose);
    // const { data: session } = useSession();
    // console.log(session)
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