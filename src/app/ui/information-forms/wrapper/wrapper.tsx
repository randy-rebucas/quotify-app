import { ReactNode } from "react";

type FormWrapperProps = {
    title: string;
    children: ReactNode
}

export default function Wrapper({ title, children }: FormWrapperProps) {
    return (
        <div className="js-step step active">
            {children}
        </div>
    )
}