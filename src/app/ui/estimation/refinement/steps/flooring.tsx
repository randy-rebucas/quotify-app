'use client';

import Image from "next/image";
import { RefinementData } from "../entities";
import { ChangeEvent } from "react";
import { refinementData, refinementType } from "../mock";

type MepFormProps = RefinementData & {
    stimates: any,
    tabiIndex: number,
    updateFields: (fields: Partial<RefinementData>) => void
}

export default function Flooring({
    stimates,
    tabiIndex,
    updateFields
}: MepFormProps) {

    const handleRadioChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        let data = [...stimates];
        data[tabiIndex].refinement.flooring = event.target.value;
        updateFields({ stimates: data });
    }

    return (
        <>
            <div data-col="1" className="col-start-1 col-span-4">
                {/* <h3 className={`px-30 col-start-1 font-weight font-latobold mt-2`}>office space</h3> */}
                <div className="grid grid-cols-4">
                    {refinementData.map((refinement: refinementType, index: any) => (
                        <div data-value={refinement.name} data-col={index + 1} key={refinement.id}
                            className={`js-select-option col-start-${index + 1} row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full`}>
                            <div className="p-30 estimation">
                                <input type="radio" name="refinement" value={refinement.slug} id={`refinement-${index + 1}`} onChange={e => handleRadioChange(index, e)} checked={stimates[tabiIndex].refinement.flooring == refinement.slug}/>
                                <label htmlFor={`refinement-${index + 1}`}>
                                    <Image
                                        src={refinement.image}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        alt="economic"
                                        className="grayscale w-full h-auto"
                                    />
                                    <span className="cover-checkbox">
                                        <svg viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                </label>
                                <h4 className="font-weight font-latobold mt-2">{refinement.name}</h4>
                                <p className="font-lato mt-1">{refinement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}