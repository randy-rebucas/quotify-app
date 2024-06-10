import { useEffect, useState } from "react";
import { DataItem } from "../data";
import { colorMapping } from "./refinement/entities";

export default function PieChartData({ data, breakdowns, selectedAmenities }: {
    data: DataItem[];
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
                <li key={index} className="flex gap-[17px]">
                    <div className={`w-[33px] h-[12px] bg-[${colorMapping.get(slice * breakdown[1].length)}]`}></div>
                    <div className="w-[170px] text-[18px]">
                        <div className="flex items-center">
                            <div className="text-[24px] font-latobold mr-[15px]">{slice * breakdown[1].length}%
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