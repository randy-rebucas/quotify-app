'use client';

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

import { useProjectStore } from "@/lib/store/projectStore";
import More from "./more";
import Logout from "./logout";

type Props = {
    children: ReactNode
}

export default function PageWrapper({ children }: Props) {

    const isEmpty = useProjectStore(state => state.isEmpty);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }} className={clsx(
                {
                    'wrapper__content': isEmpty,
                    'wrapper__content-2 grid': !isEmpty,
                },
                `delay-last`
            )}>
            <div className={clsx(
                {
                    'grid lg:grid-cols-5 lg:grid-flow-col': !isEmpty,
                }
            )}>
                <div className={clsx(
                    `lg:col-span-1 col-span-12 p-30 flex flex-col justify-between `,
                    {
                        'w-full h-full': isEmpty,
                        'row-span-2 row-end-3': !isEmpty,
                    }
                )}>
                    <div className="flex items-center justify-between">
                        <Link href="/setting" className="flex wrapper__settings">
                            <Image src="/images/icon-settings.svg"
                                width={50}
                                height={50}
                                className="pr-5 brightness-200 contrast-100"
                                alt="settings" />

                            <span className="font-latoblack">settings</span>
                        </Link>
                        <Logout />
                    </div>
                    <Link href="/estimation">
                        <Image
                            src="/images/icon-create.svg"
                            width={68}
                            height={68}
                            alt="create-new"
                        />
                    </Link>
                </div>

                {children}

                <More />
            </div>
        </motion.div>
    )
}
