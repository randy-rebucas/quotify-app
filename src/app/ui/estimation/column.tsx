'use client';

import { ReactNode } from 'react';
import { motion } from "framer-motion"

type ColumnProps = {
    index: number;
    cursor: string;
    title: string;
    children: ReactNode;
}

export default function Column({ index, cursor, title, children }: ColumnProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.3 }}
            className={`js-estimation-col__${cursor} estimation-col__${cursor} p-30 lg:pt-col${index}`}>
            <div className="flex flex-col justify-center h-full">
                <div>
                    <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">0{index}:</h2>
                    <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">{title}</h4>
                    <div className="estimation-col__bar mt-6 mb-6"></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2.8 }}
                        className="estimation-col__content">
                        {children}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}