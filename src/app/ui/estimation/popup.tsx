'use client'

import { useState } from "react";
import Close from "./close";
import Link from "next/link";

export default function Popup() {
    const [close, setClose] = useState<boolean>(true);

    const handleClick = () => {
        setClose(!close);
    }

    return (
        <>
            {!close &&
                <div className="wrapper__close flex">
                    <div className="bg-white h-[211px] grid grid-cols-3">
                        <div className="relative p-30 bg-gray2A w-[286px] flex flex-col items-center justify-center">
                            <h5 className="opacity-1 font-normal">close project
                                <p className="mt-3 text-xs text-black">You are about to close this project. All your progression has been
                                    saved.</p>
                            </h5>
                        </div>
                        <div className="relative p-30 bg-gray3A w-[286px] flex flex-col items-center justify-center">
                            <a href="#" onClick={handleClick} className="absolute cover w-full h-full z-30"></a>
                            <h5 className="opacity-20">cancel</h5>
                        </div>
                        <div className="relative p-30 bg-gray4A w-[286px] flex flex-col items-center justify-center">
                            <Link href="/" className="absolute cover w-full h-full z-30"></Link>
                            <h5 className="opacity-50">close</h5>
                        </div>
                    </div>
                </div>}
            <Close onClick={handleClick} />
        </>
    )
}