'use client'
import { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import { useAreaBreakdownStore } from "@/lib/store/areaBreakdownStore";
import { colorMapping } from "../estimation/pie-chart-presentation";

const MARGIN = 10;
export type ChartProps = {
    width: number;
    height: number;
    breakdowns: any[];
    slice: number;
};


export default function Chart({
    width,
    height,
    breakdowns,
    slice
}: ChartProps) {

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
}