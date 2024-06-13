import { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import { DataItem } from "../data";
import { colorMapping } from "./refinement/entities";
import { useAreaBreakdownStore } from "@/app/lib/areaBreakdownStore";

const MARGIN = 10;
export type ChartProps = {
    width: number;
    height: number;
    breakdowns: any[]
};

export const PieChartPresentation = ({
    width,
    height,
    breakdowns
}: ChartProps) => {
    const areaBreakdown = useAreaBreakdownStore(state => state.areaBreakdown);

    const [slice, setSlice] = useState<number>(0);

    useEffect(() => {
        setSlice(100 / areaBreakdown.selectedAmenityIds.length);
    }, [areaBreakdown]);

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
                    console.log(Math.round(pie[i].value))
                    return <path key={i} d={arc} fill={colorMapping.get(Math.round(pie[i].value))} />;
                })}
            </g>
        </svg>
    );
};
