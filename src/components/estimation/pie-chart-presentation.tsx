'use client'
import { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import { useAreaBreakdownStore } from "@/lib/store/areaBreakdownStore";


const MARGIN = 10;
export type ChartProps = {
    width: number;
    height: number;
    breakdowns: any[];
    totalBreakdowns: number
};

export let colorMapping = new Map<string, string>();
colorMapping.set('Individual spaces', "#005A92");
colorMapping.set('Conference rooms', "#3179A6");
colorMapping.set('Food', "#93B7CD");
colorMapping.set('Special spaces', "#C4D6E1");
colorMapping.set('Support', "#D2D2D2");

export const PieChartPresentation = ({
    width,
    height,
    breakdowns,
    totalBreakdowns
}: ChartProps) => {
    const [slice, setSlice] = useState<number>(0);

    useEffect(() => {
        setSlice(100 / totalBreakdowns);
    }, [totalBreakdowns]);

    const data = breakdowns.map((breakdown: any, index: any) => (
        { name: breakdown[0], value: slice * breakdown[1].length }
    ))

    const radius = Math.min(width, height) / 2 - MARGIN;

    const pie = useMemo(() => {
        const pieGenerator = d3.pie<any, any>().value((d) => d.value);
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
                    return <path key={i} d={arc} fill={colorMapping.get(pie[i].data.name)} />;
                })}
            </g>
        </svg>
    );
};
