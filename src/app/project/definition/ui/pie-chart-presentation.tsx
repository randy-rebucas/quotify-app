import { useMemo } from "react";
import * as d3 from "d3";
import { DataItem, PieChartProps } from "./data";

const MARGIN = 10;

export const PieChartPresentation = ({ data, width, height, colors }: PieChartProps) => {
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
                {arcs.map((arc, i) => {
                    return <path key={i} d={arc} fill={colors[i]} />;
                })}
            </g>
        </svg>
    );
};
