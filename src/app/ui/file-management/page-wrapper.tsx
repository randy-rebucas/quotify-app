'use client';

import { logout } from "@/app/actions/auth";
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

type PageWrapperProps = {
    children: ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
    // useEffect( () => {
    //     const doLogout = async () => {
    //         await logout();
    //     }
    //     doLogout();
    // }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }} className="wrapper__content-2 grid">
            {children}
        </motion.div>
    )
}