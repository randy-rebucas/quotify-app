'use client';

import { MouseEventHandler } from "react";

type Props = {
    isFirstStep: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function Buttons({ isFirstStep, onClick }: Props) {
    return (
        <div
            className="col-start-1 col-span-4 flex flex-col justify-end items-start w-full h-full">
            <div className="p-30 w-full flex items-end justify-between">
                {!isFirstStep && <button type="button" onClick={onClick}
                    className='js-backbtn focus:shadow-outline focus:outline-none' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="62" viewBox="0 0 77 62"
                        fill="none">
                        <path opacity="0.3"
                            d="M30.8994 62L32.9858 59.9422L5.56387 32.7984L77 32.7984L77 29.8586L5.96129 29.8586L33.1845 3.00878L31.0981 0.852951L2.66426e-06 31.5245L30.8994 62Z"
                            fill="#00A99A" />
                    </svg>
                </button>}
                <button className="js-nextbtn focus:shadow-outline focus:outline-none" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="78" height="63" viewBox="0 0 78 63"
                        fill="none">
                        <path
                            d="M46.4 0L44.3 2.1L71.9 29.8H0V32.8H71.5L44.1 60.2L46.2 62.4L77.5 31.1L46.4 0Z"
                            fill="#00A99A" />
                    </svg>
                </button>
            </div>
        </div>
    )
}