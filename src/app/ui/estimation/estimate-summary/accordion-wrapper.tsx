'use client';

import { ReactNode } from "react";

type AccordionWrapperProps = {
    title: string;
    id: number;
    children: ReactNode;
}

export default function AccordionWrapper({ title, id, children }: AccordionWrapperProps) {
    return (
        <>
            <h3 className="text-[18px] mb-[10px] mt-[20px]">{title}</h3>
            <div id={`accordion-flush-${id}`} data-accordion="collapse" data-active-classes="textl-left dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                {children}
            </div>
        </>
    )
}