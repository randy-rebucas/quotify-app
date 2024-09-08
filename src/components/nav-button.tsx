'use client'

import Image from "next/image";
import Link from "next/link";


export default function NavButton() {
    return (
        <Link href="/projects">
            <Image
                src="/images/icon-submit.png"
                width={0}
                height={0}
                sizes="100vw"
                className="brightness-0 w-full h-auto"
                alt="next"
            />
        </Link>
    );
}