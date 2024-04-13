'use client';

import { MouseEventHandler, useState } from "react";
import clsx from "clsx";
import React from "react";

type AccordionProps = {
    title: string;
    index: number | null;
    isOpen: boolean;
    id: number;
    onClick: MouseEventHandler<HTMLButtonElement>
};

type AccordionData = {
    id: number;
    title: string;
}

export default function Accordions({ id, title, data }: { id: number, title: string, data: AccordionData[] }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index: any) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <h3 className="text-[18px] mb-[10px] mt-[20px]">{title}</h3>
            <div id="accordion-flush-1" data-accordion="collapse" data-active-classes="textl-left dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                {data.map((accordion: any, index: any) => (
                    <Accordion
                        title={accordion.title}
                        key={index}
                        isOpen={activeIndex === index}
                        index={activeIndex}
                        id={id}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </>
    )
}

export function Accordion({ title, isOpen, index, id, onClick }: AccordionProps) {
    return (
        <>
            <h2 id="accordion-flush-heading-1-1" className="text-[12px]">
                <button type="button" onClick={onClick} className="flex items-center justify-between w-full rtl:text-right border-b border-[#505050] gap-3"
                    data-accordion-target="#accordion-flush-body-1-1" aria-expanded={isOpen ? true : false} aria-controls="accordion-flush-body-1-1">
                    <span>{title}</span>
                    <svg data-accordion-icon className={clsx(
                        'w-3 h-3 shrink-0',
                        {
                            'rotate-180': isOpen
                        },
                    )} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id={`accordion-flush-body-${id}-${index}`} className={isOpen ? '' : 'hidden'} aria-labelledby="accordion-flush-heading-1-1">
                <div className="py-5 border-b border-[#505050]">
                    <ul className="ml-[15px] text-[12px] text-black">
                        <li>high finish</li>
                        <li>silver leed certification</li>
                        <li>gold well certification</li>
                    </ul>
                </div>
            </div>
        </>
    )
}