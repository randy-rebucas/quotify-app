import { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import { DataItem } from "../data";
import { IAmenity } from "@/app/models/Amenity";
import { ICustomSpace } from "@/app/models/CustomSpace";
import { colorMapping } from "./refinement/entities";

const MARGIN = 10;
export type ChartProps = {
    width: number;
    height: number;
    amenities: IAmenity[],
    customSpaces: ICustomSpace[],
    selectedAmenities: any[],
    selectedCustomSpaces: any[]
};

export const PieChartPresentation = ({
    width,
    height,
    amenities,
    customSpaces,
    selectedAmenities,
    selectedCustomSpaces
}: ChartProps) => {

    const [slice, setSlice] = useState<number>(0);
    const [breakdowns, setBreakdowns] = useState<any[]>([]);

    useEffect(() => {
        let newAmenities: (IAmenity | undefined)[] = [];

        selectedAmenities.map((selectedAmenity: any) => {
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

    }, [amenities, selectedAmenities])

    useEffect(() => {
        setSlice(100 / selectedAmenities.length);
    }, [selectedAmenities]);

    const data = breakdowns.map((breakdown: any, index: any) => (
        { name: breakdown[0], value: slice * breakdown[1].length }
    ))

    const radius = Math.min(width, height) / 2 - MARGIN;

    const pie = useMemo(() => {
        const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);
        return pieGenerator(data);
    }, [data]);

    const arcs = useMemo(() => {
        const arcPathGenerator = d3.arc();
        return pie.map((p) =>
            arcPathGenerator({
                innerRadius: 0,
                outerRadius: radius,
                startAngle: p.startAngle,
                endAngle: p.endAngle,
            })
        );
    }, [radius, pie]);

    return (
        <svg width={width} height={height} style={{ display: "inline-block" }}>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
                {arcs.map((arc: any, i: any) => {
                    return <path key={i} d={arc} fill={colorMapping.get(pie[i].value)} />;
                })}
            </g>
        </svg>
    );
};
