'use client'

import { AnimatePresence, motion } from "framer-motion"

export default function BackgroundAnimation({ colors, target, className, isLinear }: {
    colors: string[];
    target: number | null;
    className: string | null;
    isLinear: boolean;
}) {

    return (
        <AnimatePresence>
            <div className={`js-wrapper__cover wrapper__cover ${className}`}>
                <motion.div
                    className={`${isLinear ? 'js-linear-anim linear-anim el' : 'js-staggering-anim staggering-anim'}`}>
                    {colors.map((color, index) => (
                        <Color color={color} index={index} target={target} key={index} isLinear={isLinear} />
                    ))}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export function Color({ color, index, target, isLinear }: {
    color: string;
    index: number;
    target: number | null;
    isLinear: boolean
}) {
    const springEasing = { type: 'spring', mass: 1, stiffness: 80, damping: 10, velocity: 0 };
    const linearEasing = { ease: "linear" };

    const getEasing = (isLinear: boolean) => {
        return isLinear ? linearEasing : springEasing;
    }

    if (target && target === index) {
        return <motion.div className={`js-el el ${color} border-left-dashed relative`}
            initial={{ opacity: 0, translateX: 0 }}
            animate={{ opacity: 1, translateX: '100%' }}
            transition={{
                ...{ duration: 1.5, delay: index * 0.2 },
                ...getEasing(isLinear)
            }}
        />;
    }
    return <motion.div className={`js-el el ${color}`}
        initial={{ opacity: 0, translateX: 0 }}
        animate={{ opacity: 1, translateX: '100%' }}
        transition={{
            ...{ duration: 1.5, delay: index * 0.2 },
            ...getEasing(isLinear)
        }}
    />;
}