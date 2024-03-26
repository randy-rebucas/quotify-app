'use client';

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Buttons({ navigation, completed }: { navigation: string, completed: boolean }) {
    const pathname = usePathname();

    return (
        <>
        
            <Link href="/" className={`${pathname != navigation ? 'hidden' : ''}`}>
                <Image
                    src="/images/icon-submit.png"
                    width={70}
                    height={70}
                    alt="next"
                />
            </Link>
            
            <Link href="/" className={`${!completed ? 'hidden' : ''}`}>
                <Image
                    src="/images/icon-check.svg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="tooltip__icon w-full h-auto"
                    alt="next-check"
                />
            </Link>

        </>
    );
}