'use client'

import { useEffect, useState } from "react";
import { colorMapping } from "./pie-chart-presentation";

export default function PieChartDataPrint({ breakdowns, selectedAmenities }: {
    breakdowns: any[];
    selectedAmenities: any[],
}) {
    const [slice, setSlice] = useState<number>(0);

    useEffect(() => {
        setSlice(100 / selectedAmenities.length);
    }, [selectedAmenities]);

    return (
        <ul className="flex flex-col gap-[20px]">
            {breakdowns.map((breakdown: any, index: any) => (
                <li key={index} className="flex gap-[17px] items-center">
                    <div className={`w-[33px] h-[12px] bg-[${colorMapping.get(breakdown[0])}] pie-color`} ></div>
                    <div className="text-left text-[18px] leading-[18px]">{breakdown[0]}</div>
                </li>
            ))}
        </ul>
    )
}