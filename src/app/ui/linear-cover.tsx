'use client'

import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx";

export default function LinearCover({ colors, target, className }: {
    colors: string[];
    target: number | null;
    className: string | null;
}) {

    return (
        <AnimatePresence>
            <div className={`js-wrapper__cover wrapper__cover ${className}`}>
                <motion.div
                    className='js-linear-anim linear-anim el'>
                    {colors.map((color, index) => (
                        <Color color={color} index={index} target={target} key={index} />
                    ))}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export function Color({ color, index, target }: {
    color: string;
    index: number;
    target: number | null;
}) {

    return <motion.div className={clsx(
        `js-el el ${color}`,
        {
            'border-left-dashed relative': target && target === index,
        },
    )}
        initial={{ opacity: 0, translateX: 0 }}
        animate={{ opacity: 1, translateX: '120%' }}
        transition={{ duration: 1.5, delay: index * 0.2, ease: "linear" }}
    />;
}