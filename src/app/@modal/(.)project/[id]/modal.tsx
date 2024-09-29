"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const dialogRef = useRef<React.ElementRef<"dialog">>(null)

    useEffect(() => {
        dialogRef.current?.showModal()
    }, [])

    const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) =>
        e.target === dialogRef.current && router.back()

    return (
        <dialog
            ref={dialogRef}
            onClick={closeModal}
            onClose={router.back}
            className="backdrop:bg-black/60 backdrop:backdrop-blur-sm !absolute top-0 left-0 !z-30 max-h-full js-open-results-content open-results-content wrapper__content-2 js-linear-anim-2 el" style={{ width: '100%', transform: 'translateX(100%)', overflow: 'hidden' , background: 'rgb(255 255 255 / 10%);'}}>
            <div className="close-btn opacity-1 absolute top-0 right-0 flex flex-col items-end p-30 z-30">
                <Link href="#" className="js-close-results" onClick={() => dialogRef.current && router.back()}>
                    <Image
                        src={'https://quotify.b-cdn.net/icon-close.svg'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="filter contrast-200 brightness-200 w-full h-auto"
                        alt="close"
                    />
                </Link>
            </div>
            {children}
        </dialog>
    )
}