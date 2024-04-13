
import { MouseEventHandler, ReactNode } from "react";
import Tooltip from "../../tooltip";
import Buttons from "./buttons";

type FormWrapperProps = {
    stepIndex: number;
    isFirstStep: boolean;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>
}


export default function Wrapper({ stepIndex, isFirstStep, children, onClick }: FormWrapperProps) {

    const step: any = {
        0: 'flooring',
        1: 'furniture',
        2: 'partitions'
    };

    return (
        <div className="js-step step active">
            <div className="col-start-1 col-span-4 flex flex-col justify-start items-start w-full h-full">
                <div className="col-start-1 col-span-4 flex flex-col justify-start items-start w-full h-full">
                    <div className="h-full w-full">
                        <div className="p-30 pt-[74px]">
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <div className="h-1 w-20 bg-black"></div>
                                    <h5 className="font-latobold mt-1 xl:text-3xl md:text-2xl text-1xl text-black">
                                        {step[stepIndex]}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--
                    /*  Tooltip
                    /*  This block shows the tooltip
                    /--> */}
                <Tooltip />

            </div>

            {children}

            <Buttons isFirstStep={isFirstStep} onClick={onClick} />
        </div>
    )
}