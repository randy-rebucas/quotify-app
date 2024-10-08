'use client';


import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Buttons({ path, next, completed }: {
    path: string;
    next: string;
    completed: boolean
}) {
    const pathname = usePathname();
    return (
        <>
            <Link href={`${next}`} className={`${pathname != path ? 'hidden' : ''}`}>
                <Image
                    src={'https://quotify.b-cdn.net/icon-submit.png'}
                    width={70}
                    height={70}
                    alt="next"
                />
            </Link>

            <Link href="/" className={`${!completed ? 'hidden' : ''}`}>
                <Image
                    src={'https://quotify.b-cdn.net/icon-check.svg'}
                    width={70}
                    height={70}
                    alt="next-check"
                />
            </Link>

        </>
    );
}