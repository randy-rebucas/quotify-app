'use client';

import { ReactNode } from "react";

type ColumnProps = {
    children: ReactNode
}
export function Column({ children }: ColumnProps) {
    return (
        <div>
            {children}
        </div>
    );
}