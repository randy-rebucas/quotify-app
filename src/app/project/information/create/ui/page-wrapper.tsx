'use client';

import { motion } from "framer-motion";
import IntroMenu from "./intro-menu";


export default function PageWrapper() {

    return (
        <motion.div
            initial={{ display: 'grid' }}
            animate={{ display: 'table-column' }}
            transition={{ delay: 2 }}
            className="js-show-on-load wrapper__content navigation" >

            {/* <!--
                /*  Menu Introduction
                /*  This block shows on page introduction animation.
                /*  It will be hidden once animation is finished.                
                /--> */}
            <IntroMenu />

        </motion.div>
    )
}