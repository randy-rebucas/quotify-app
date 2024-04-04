
'use client';

import { motion } from "framer-motion";
import Form from "./form";
import InfoMenu from "./info-menu";

export default function PageWrapper() {
    return (
        <motion.div
        initial={{ display: 'table-column' }}
        animate={{ display: 'grid' }}
        transition={{ delay: 2 }} className="js-hide-on-load wrapper__content">
            
            <InfoMenu />

            <Form />

        </motion.div>
    )
}