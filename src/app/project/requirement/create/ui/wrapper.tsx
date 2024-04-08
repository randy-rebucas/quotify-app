import Tooltip from "@/app/shared/tooltip";
import clsx from "clsx";
import { MouseEventHandler, ReactNode } from "react";
import ActionButtons from "./action-buttons";

type FormWrapperProps = {
    stepIndex: number;
    isFirstStep: boolean;
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>
}


export default function Wrapper({ stepIndex, isFirstStep, children, onClick }: FormWrapperProps) {

    const step: any = {
        0: 'finish and certifications',
        1: 'MEP features',
        2: 'base building conditions',
        3: 'technology',
        4: 'furniture and furnishing',
        5: 'review'
    };

    return (
        <div className="js-step step active">
            {/* <div className={clsx(
                'lg:col-span-2 col-span-12 flex flex-col justify-between items-start w-full h-full',
                {
                    'lg:col-start-3': (stepIndex + 1) != 4,
                    'lg:col-start-4 row-span-3 relative': (stepIndex + 1) === 4,
                },
            )}> */}
            <div className="col-span-1 flex flex-col justify-start items-start w-full h-full">
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

                    <div className="p-30 pt-[74px]">
                        <div className="flex flex-col justify-between h-full">
                            <h5 className="font-latobold mt-1 xl:text-2xl text-1xl text-black">
                                03.{stepIndex + 1}:
                            </h5>
                            <p>what is the finish level of your space?</p>
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

            <ActionButtons isFirstStep={isFirstStep} onClick={onClick} />
        </div>
    )
}