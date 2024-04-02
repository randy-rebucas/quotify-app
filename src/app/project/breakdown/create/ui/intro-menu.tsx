'use client';
import { motion } from "framer-motion"


export default function IntroMenu() {
    return (
        <div className="intro-menu lg:col-start-2">
            <div className="h-full">
                <div className="p-30 lg:pt-col2">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h1 className="font-latobold text-white">
                                02:
                            </h1>
                            <h4 className="font-latolight mt-3 text-white">
                                Area breakdown
                            </h4>
                            <div className="estimation-col__bar mt-6 mb-6"></div>
                            <div className="estimation-col__content">
                                <div className="step-indicator">
                                    <span className="font-latoblack">02.1:</span> <br />
                                    area definition
                                </div>
                                <div className="step-indicator">
                                    <span className="font-latoblack">02.2:</span> <br />
                                    proportion breakdown
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}