import { ReactNode } from "react";

type FormWrapperProps = {
    title: string;
    children: ReactNode
}

export default function Form({ title, children }: FormWrapperProps) {
    return (
        <div className="js-step step active">
            {children}
        </div>
    )
}