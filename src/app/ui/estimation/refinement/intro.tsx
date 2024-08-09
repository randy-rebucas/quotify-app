'use client';

import { IRefinement } from "@/app/models/Refinement";

type Props = {
    refinements: any[]
}
export default function Intro({ refinements }: Props) {
    return (
        <div className="intro-menu col-start-4">
            <div className="h-full">
                <div className="p-30 pt-col3">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h1 className="font-latobold text-black">
                                04:
                            </h1>
                            <h4 className="font-latolight mt-3 xl:text-4xl md:text-3xl text-2xl text-black">
                                Refinements
                            </h4>
                            <div className="estimation-col__bar bg-black mt-6 mb-6"></div>
                            <div className="estimation-col__content">
                                {refinements.map((refinement: IRefinement, index: number) => (
                                    <div key={index} className='step-indicator'>
                                        <span className="font-latoblack">04.{index + 1}:</span> <br />
                                        {refinement.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}