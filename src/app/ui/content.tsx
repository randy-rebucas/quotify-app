'use client';
import { lato } from '@/app/shared/fonts';

import { motion } from "framer-motion"

export interface ContextValue {
  context: string;
}

export default function ContentWrapper({ contexts }: { contexts: ContextValue[] }) {
  return (
    <>
      {contexts.map((item, index) => (
        <Content context={item.context} index={index} key={index} />
      ))}
    </>
  );
}

export function Content({ context, index }: {
  context: string;
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: index * 0.5, type: 'spring', mass: 1, stiffness: 80, damping: 10, velocity: 0 }}>
      <p className={`${lato.className} p-30 lg:text-black text-white`}>{context}</p>
    </motion.div>
  );
}
