'use client';

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
// import { PowerIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { ReactNode } from "react";

import { useProjectStore } from "@/app/lib/store/projectStore";
// import { logout } from "@/app/actions/auth";
import More from "./more";

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
                    {/* <div className="flex items-center justify-between"> */}
                        <Link href="/setting" className="flex wrapper__settings">
                            <Image src="/images/icon-settings.svg"
                                width={50}
                                height={50}
                                className="pr-5 brightness-200 contrast-100"
                                alt="settings" />

                            <span className="font-latoblack">settings</span>
                        </Link>
                        {/* <form action={async () => {
                            'use server';
                            await logout();
                        }}>
                            <button className="hover:text-red-500 md:p-2 text-red text-sm w-full">
                                <PowerIcon className="w-[43px]" />
                            </button>
                        </form> */}
                    {/* </div> */}
                    <Link href="estimation.html">
                        <Image
                            src="/images/icon-create.svg"
                            width={50}
                            height={50}
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
