'use client';

import { MouseEventHandler, useEffect, useState } from "react";
import clsx from "clsx";
import React from "react";
import { useEstimateSummaryStore } from "@/app/lib/store/estimateSummaryStore";

type AccordionProps = {
    title: string;
    index: number | null;
    isOpen: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>
};

export default function Accordions({ estimate, requirements, refinements }: { estimate: any, requirements: any[], refinements: any[] }) {

    return (
        <>
            <h3 className="text-[18px] mb-[10px] mt-[20px]">{estimate.section}</h3>
            <div id="accordion-flush-1" data-accordion="collapse" data-active-classes="textl-left dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                <AccordionContainer estimate={estimate} requirements={requirements} refinements={refinements}/>
            </div>
        </>
    )
}

export function AccordionContainer({ estimate, requirements, refinements }: { estimate: any, requirements: any[], refinements: any[] }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index: any) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // const estimateRequirements = useEstimateSummaryStore((state) => state.estimateRequirements);
    // const getProjectEstimateRequirements = useEstimateSummaryStore(
    //     (state) => state.getProjectEstimateRequirements
    // );

    // useEffect(() => {
    //     if (estimate) {
    //         if (estimate.section === 'requirement') {
    //             getProjectEstimateRequirements(estimate._id);
    //         }
    //     }
    // }, [getProjectEstimateRequirements, estimate]);

    // requirements
    console.log(requirements);
    console.log(refinements);
    if (estimate.section === 'requirement') {
        return (
            <>
                {requirements.map((requirement: any, index: number) => (
                    <Accordion
                    title={requirement._id}
                    key={index}
                    isOpen={activeIndex === index}
                    index={activeIndex}
                    onClick={() => handleItemClick(index)}
                />
                ))}
            </>
        )
    }
    return (
        <>
            {refinements.map((refinement: any, index: any) => (
                <Accordion
                    title={refinement.name}
                    key={index}
                    isOpen={activeIndex === index}
                    index={activeIndex}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </>
    )
}

export function Accordion({ title, isOpen, index, onClick }: AccordionProps) {
    return (
        <>
            <h2 id="accordion-flush-heading-1-1" className="text-[12px]">
                <button type="button" onClick={onClick} className="flex items-center justify-between w-full rtl:text-right border-b border-[#505050] gap-3"
                    data-accordion-target={`#accordion-flush-body-${index}`} aria-expanded={isOpen ? true : false} aria-controls="accordion-flush-body-1-1">
                    <span>{title}</span>
                    <svg data-accordion-icon className={clsx(
                        'w-3 h-3 shrink-0',
                        {
                            'rotate-180': isOpen
                        },
                    )} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id={`accordion-flush-body-${index}`} className={isOpen ? '' : 'hidden'} aria-labelledby="accordion-flush-heading-1-1">
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