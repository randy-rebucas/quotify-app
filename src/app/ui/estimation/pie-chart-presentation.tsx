import { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";

import { useAreaBreakdownStore } from "@/app/lib/store/areaBreakdownStore";

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

    const color = (roundPercentage: number) => {
        let hex;
        if (roundPercentage > 0 && roundPercentage <= 15) {
            hex = '#D2D2D2';
        } else if (roundPercentage > 15 && roundPercentage <= 35) {
            hex = '#C4D6E1';
        } else if (roundPercentage > 35 && roundPercentage <= 45) {
            hex = '#93B7CD';
        } else if (roundPercentage > 45 && roundPercentage <= 60) {
            hex = '#6298BA';
        } else if (roundPercentage > 60 && roundPercentage <= 80) {
            hex = '#3179A6';
        } else if (roundPercentage > 80 && roundPercentage <= 90) {
            hex = '#186a9c';
        } else if (roundPercentage > 90 && roundPercentage <= 100) {
            hex = '#005A92';
        } else {
            hex = '#F2F2F2';
        }
        return hex;
    }

    return (
        <svg width={width} height={height} style={{ display: "inline-block" }}>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
                {arcs.map((arc: any, i: any) => {
                    return <path key={i} d={arc} fill={color(Math.round(pie[i].value))} />;
                })}
            </g>
        </svg>
    );
};
