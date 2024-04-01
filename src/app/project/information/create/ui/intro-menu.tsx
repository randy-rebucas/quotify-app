'use client';
import { motion } from "framer-motion"


export default function IntroMenu() {
    return (
        <motion.div
            className="intro-menu">
            <div className="h-full">
                <div className="p-30 lg:pt-col1">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h1 className="font-latobold text-white">
                                01:
                            </h1>
                            <h4 className="font-latolight mt-3 text-white">
                                Project information
                            </h4>
                            <div className="estimation-col__bar mt-6 mb-6"></div>
                            <div className="estimation-col__content">
                                <div className="step-indicator">
                                    <span className="font-latoblack">01.1:</span> <br />
                                    plan upload
                                </div>
                                <div className="step-indicator">
                                    <span className="font-latoblack">01.2:</span> <br />
                                    address
                                </div>
                                <div className="step-indicator">
                                    <span className="font-latoblack">01.3:</span> <br />
                                    space size & rentable area
                                </div>
                                <div className="step-indicator">
                                    <span className="font-latoblack">01.4:</span> <br />
                                    headcount & staffing
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}