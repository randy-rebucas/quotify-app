'use client';

import { MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";
import DropzoneUploadedFile from "./results/dropzone-uploaded-file";
import Address from "./results/address";
import Tooltip from "../../tooltip";

type FormWrapperProps = {
    stepIndex: number;
    isLastStep: boolean;
    children: ReactNode;
}

export default function Wrapper({ stepIndex, isLastStep, children }: FormWrapperProps) {

    return (
        <div className="js-step step active">

            {children}

            <div className={clsx(
                'lg:col-span-2 col-span-12 flex flex-col justify-between items-start w-full h-full',
                {
                    'lg:col-start-3': (stepIndex + 1) != 4,
                    'lg:col-start-4 row-span-3 relative': (stepIndex + 1) === 4,
                },
            )}>
                <Tooltip />

                <div className="flex flex-col justify-start items-end w-full h-full">

                    {(stepIndex + 1) === 1 && <DropzoneUploadedFile />}

                    {(stepIndex + 1) === 2 && <Address />}

                </div>
                <div className="p-30 w-full flex items-end justify-end">
                    <button className="focus:shadow-outline focus:outline-none" type="submit" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="0 0 78 63"
                            fill="none">
                            <path
                                d="M46.4 0L44.3 2.1L71.9 29.8H0V32.8H71.5L44.1 60.2L46.2 62.4L77.5 31.1L46.4 0Z"
                                fill="#003855" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}