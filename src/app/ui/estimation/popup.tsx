'use client'

import Link from "next/link";
import clsx from "clsx";
import { useAppStore } from "@/app/lib/store/appStore";

import { useProjectInformationStore } from "@/app/lib/store/projectInformationStore";
import { useRouter } from "next/navigation";

// This block shows on close popup button click

export default function Popup() {
    const router = useRouter();
    const resetProjectInformation = useProjectInformationStore(state => state.reset);

    const isClose = useAppStore(state => state.isClose);
    const setIsClose = useAppStore(state => state.setIsClose);

    const handleCloseClick = () => {
        // reset all state
        resetProjectInformation();
        router.push(`/`)
    }

    {/* <div class="wrapper__close hidden flex">
            <div class="bg-white h-[211px] grid grid-cols-3">
                <div class="relative p-30 bg-gray2A w-[286px] flex flex-col items-center justify-center">                    
                    <h5 class="opacity-1 font-normal">close project
                        <p class="mt-3 text-xs text-black">You are about to close this project. All your progression has been
                            saved.</p>
                    </h5>
                </div>
                <div class="relative p-30 bg-gray3A w-[286px] flex flex-col items-center justify-center">
                    <a href="#" id="js-cancel-popup" class="absolute cover w-full h-full z-30"></a>
                    <h5 class="opacity-20">cancel</h5>
                </div>
                <div class="relative p-30 bg-gray4A w-[286px] flex flex-col items-center justify-center">
                    <a href="file-management1.html" class="absolute cover w-full h-full z-30"></a>
                    <h5 class="opacity-50">close</h5>
                </div>
            </div>
        </div */}
    return (
        <>
            <div className={clsx(
                'wrapper__close flex',
                {
                    'hidden': isClose
                },
            )}>
                <div className="bg-white h-[211px] grid grid-cols-3">
                    <div className="relative p-30 bg-gray2A w-[286px] flex flex-col items-center justify-center">
                        <h5 className="opacity-1 font-normal">close project
                            <p className="mt-3 text-xs text-black">You are about to close this project. All your progression has been
                                saved.</p>
                        </h5>
                    </div>
                    <div className="relative p-30 bg-gray3A w-[286px] flex flex-col items-center justify-center">
                        <a href="#" onClick={() => setIsClose(true)} className="absolute cover w-full h-full z-30"></a>
                        <h5 className="opacity-20">cancel</h5>
                    </div>
                    <div className="relative p-30 bg-gray4A w-[286px] flex flex-col items-center justify-center">
                        <Link href="/" onClick={handleCloseClick} className="absolute cover w-full h-full z-30"></Link>
                        <h5 className="opacity-50">close</h5>
                    </div>
                </div>
            </div>
        </>
    )
}