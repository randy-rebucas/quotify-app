'use client';

import { usePathname } from "next/navigation";
import Buttons from "./buttons";

export default function Column({ step, stepInWord, section, navigation, next, children }: {
    step: number;
    stepInWord: string;
    section: string;
    navigation: string;
    next: string;
    children: React.ReactNode
}) {
    const pathname = usePathname();

    return (
        <div className={`js-estimation-col__${stepInWord} estimation-col__${stepInWord} p-30 lg:pt-col${step} hover-state ${pathname == navigation ? 'highlight' : ''}`}>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h2 className="font-bold font-latobold xl:text-7xl md:text-6xl text-5xl text-white">{`0${step}`}:</h2>
                    <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-white">{section}</h4>
                    <div className="estimation-col__bar mt-6 mb-6"></div>
                    <div className="estimation-col__content">
                        {children}
                    </div>
                </div>
                <Buttons path={navigation} next={next} completed={false} />
            </div>
        </div>
    );
}