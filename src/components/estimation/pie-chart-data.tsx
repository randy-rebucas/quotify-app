import { useEffect, useState } from "react";
import { colorMapping } from "./pie-chart-presentation";

export default function PieChartData({ breakdowns, totalBreakdowns, selectedAmenities, selectedCustomSpaces }: {
    breakdowns: any[];
    totalBreakdowns: number;
    selectedAmenities: any[],
    selectedCustomSpaces: any[]
}) {
    const [slice, setSlice] = useState<number>(0);

    useEffect(() => {
        setSlice(100 / totalBreakdowns);
    }, [totalBreakdowns]);

    // const color = (roundPercentage: number) => {
    //     let hex;
    //     if (roundPercentage > 0 && roundPercentage <= 15) {
    //         hex = '#D2D2D2';
    //     } else if (roundPercentage > 15 && roundPercentage <= 35) {
    //         hex = '#C4D6E1';
    //     } else if (roundPercentage > 35 && roundPercentage <= 45) {
    //         hex = '#93B7CD';
    //     } else if (roundPercentage > 45 && roundPercentage <= 60) {
    //         hex = '#6298BA';
    //     } else if (roundPercentage > 60 && roundPercentage <= 80) {
    //         hex = '#3179A6';
    //     } else if (roundPercentage > 80 && roundPercentage <= 90) {
    //         hex = '#186a9c';
    //     } else if (roundPercentage > 90 && roundPercentage <= 100) {
    //         hex = '#005A92';
    //     } else {
    //         hex = '#F2F2F2';
    //     }
    //     return hex;
    // }

    return (
        <ul className="flex flex-col gap-[20px] hide-on-print">
            {breakdowns.map((breakdown: any, index: any) => (
                <li key={index} className="flex gap-[17px]">
                    <div className={`w-[33px] h-[12px] bg-[${colorMapping.get(breakdown[0])}]`} ></div>
                    <div className="w-[170px] text-[18px]">
                        <div className="flex items-center">
                            <div className="text-[24px] font-latobold mr-[15px]">{Math.round(slice * breakdown[1].length)}%
                            </div>
                            <div className="text-[12px] font-light">3,000 sqft</div>
                        </div>
                        <div className="text-left text-[18px] leading-[18px]">{breakdown[0]}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}