import { PieChartDataProps } from "../data";
import { colors } from "./area-breakdown/accordions";

export default function PieChartData({ data }: PieChartDataProps) {
    return (
        <ul className="flex flex-col gap-[20px]">
            {data.map((item: any, index: any) => (
                <li key={index} className="flex gap-[17px]">
                    <div className={`w-[33px] h-[12px] bg-[${colors[index]}]`}></div>
                    <div className="w-[170px] text-[18px]">
                        <div className="flex items-center">
                            <div className="text-[24px] font-latobold mr-[15px]">{item.value}%
                            </div>
                            <div className="text-[12px] font-light">3,000 sqft</div>
                        </div>
                        <div className="text-left text-[18px] leading-[18px]">{item.name}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}