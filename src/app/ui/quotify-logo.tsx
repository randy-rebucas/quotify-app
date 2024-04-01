'use client'

import Image from 'next/image';
import { motion } from "framer-motion";

export default function QuotifyLogo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="wrapper__logo">
      <Image
        src="/images/icon-search.png"
        width={37}
        height={37}
        alt="Search Icon"
      />
    </motion.div>
  );
}
