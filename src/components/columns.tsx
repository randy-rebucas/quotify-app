'use client';

import { motion } from "framer-motion";
import { lato } from "../app/fonts";

export interface ColumnValue {
    column: string;
}

export default function Columns({ columns }: { columns: ColumnValue[] }) {
    return (
        <div className="grid lg:grid-cols-3 lg:grid-flow-col">
            {columns.map((item, index) => (
                <p className={`${lato.className} p-30 lg:text-black text-white`} key={index}>{item.column}</p>
            ))}
        </div>
    );
}