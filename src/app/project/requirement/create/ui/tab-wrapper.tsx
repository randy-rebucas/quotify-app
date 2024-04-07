'use client';

import { motion } from "framer-motion";
import Tab from "./tab";

export default function TabWrapper() {
    return (
        <motion.div
            initial={{ display: 'hide' }}
            animate={{ display: 'grid' }}
            transition={{ delay: 2 }}
            className="js-hide-on-load  wrapper__content">

            <Tab />
        </motion.div>
    )
}