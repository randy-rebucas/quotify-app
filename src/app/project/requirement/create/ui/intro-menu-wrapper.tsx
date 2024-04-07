'use client';

import { motion } from "framer-motion";
import IntroMenu from "./intro-menu";

export default function IntroMenuWrapper() {
    return (
        <motion.div
            initial={{ display: 'grid' }}
            animate={{ display: 'table-column' }}
            transition={{ delay: 2 }}
            className="js-show-on-load wrapper__content">
            {/* <!--
            /*  Close Popup Button
            /*  This block shows the close popup block
            /--> */}
            {/* <div className="absolute top-0 right-0 flex flex-col items-end p-30">
                    <a href="#" className="js-close-project">
                        <img src="src/img/icon-close-white.svg" alt="close" />
                    </a>
                </div> */}

            <IntroMenu />
        </motion.div>
    )
}