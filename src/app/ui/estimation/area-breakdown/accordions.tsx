'use client';

import { MouseEventHandler, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { IAmenity } from "@/app/models/Amenity";
import { ICustomSpace } from "@/app/models/CustomSpace";
import { colorMapping } from "../refinement/entities";
import { useAreaBreakdownStore } from "@/app/lib/areaBreakdownStore";

export const colors: string[] = ['#005A92', '#3179A6', '#6298BA', '#93B7CD', '#C4D6E1'];

export default function Accordions({
    amenities,
    customSpaces
}: {
    amenities: IAmenity[],
    customSpaces: ICustomSpace[]
}) {
    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);
    
    const [slice, setSlice] = useState<number>(0);
    const [breakdowns, setBreakdowns] = useState<any[]>([]);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index: any) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        let newAmenities: (IAmenity | undefined)[] = [];

        areaBreakdown.selectedAmenityIds.map((selectedAmenity: any) => {
            const foundAmenity = amenities.find(item => item._id === selectedAmenity);
            newAmenities.push(foundAmenity);
        })

        const groupItemRestById = (collector: any, item: any) => {
            const { categoryName, ...rest } = item;
            const groupList = collector[categoryName] || (collector[categoryName] = []);

            groupList.push(rest);

            return collector;
        }
        setBreakdowns(Object.entries(newAmenities.reduce(groupItemRestById, {})));

    }, [amenities, areaBreakdown])

    useEffect(() => {
        setSlice(100 / areaBreakdown.selectedAmenityIds.length);
    }, [areaBreakdown]);

    return (
        <>
            {/* <div className="mt-[5.556vh] text-[#505050] flex text-[12px] items-center justify-end border-b-gray-100">
                collapse all / expand all
            </div> */}

            <div id="custom-accordion" className="custom-accordion mt-[11.852vh]" data-accordion="collapse" >
                {breakdowns.map((breakdown: any, index: any) => (
                    <Accordion
                        title={breakdown[0]}
                        amenities={breakdown[1]}
                        key={index}
                        isOpen={activeIndex === index}
                        amenityPercentage={slice}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </>
    )
}

type AccordionProps = {
    title: string;
    amenities: any[];
    isOpen: boolean;
    amenityPercentage: number;
    onClick: MouseEventHandler<HTMLButtonElement>
};

export function Accordion({ title, amenities, isOpen, amenityPercentage, onClick }: AccordionProps) {
    const [percentage, setPercentage] = useState<number>(0);

    useMemo(() => {
        setPercentage(amenityPercentage * amenities.length)
    }, [amenities.length, amenityPercentage])

    return (
        <>
            <h4 id="custom-accordion-heading-1">
                <button type="button" onClick={onClick} className={isOpen ? 'bg-transparent' : 'text-gray-500 dark:text-gray-400'} aria-expanded={isOpen ? true : false} aria-controls="custom-accordion-body-1">
                    <div className="custom-accordion__header">
                        <div className="w-[170px] text-[18px]">
                            <div className="flex">
                                <div className="text-[24px] font-latobold mr-[30px]">{Math.round(percentage)}%</div>
                                <div className="text-[12px] font-light">3,000 sqft</div>
                            </div>
                            <div className="text-left text-[18px] leading-[18px]">{title}</div>
                        </div>
                        <div className={`custom-accordion__legend bg-[${colorMapping.get(Math.round(percentage))}]`}></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                            <path d="M10 5.41667V3.25C10 1.45546 8.20867 0 6 0C3.79133 0 2 1.45546 2 3.25V5.41667H0V13H12V5.41667H10ZM3.33333 5.41667V3.25C3.33333 2.05508 4.52933 1.08333 6 1.08333C7.47067 1.08333 8.66667 2.05508 8.66667 3.25V5.41667H3.33333Z" fill="#2C2B2B"></path>
                        </svg>
                    </div>

                    <svg data-accordion-icon="" className={clsx(
                        'w-3 h-3 shrink-0',
                        {
                            'rotate-180': isOpen
                        },
                    )} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5 5 1 1 5"></path>
                    </svg>
                </button>
            </h4>
            <div id="custom-accordion-body-1" className={isOpen ? '' : 'hidden'} aria-labelledby="custom-accordion-heading-1">
                <div className="pt-0 py-[40px] border-b border-gray-200 dark:border-gray-700">
                    <ul className="ps-[40px] list-none">
                        {amenities.map((amenity: any, index: number) => (
                            <li key={index}><span>{amenityPercentage}%</span> - {amenity.amenityName}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}