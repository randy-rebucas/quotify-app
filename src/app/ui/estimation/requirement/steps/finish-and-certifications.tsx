
'use client';

import Image from "next/image";
import { RequirementData } from "../entities";
import { ChangeEvent, useEffect, useState } from "react";
import { finishData, finishType } from "../mock";

type RequirementFormProps = RequirementData & {
    stimates: any
    updateFields: (fields: Partial<RequirementData>) => void
}

export default function FinishAndCertification({
    stimates,
    updateFields
}: RequirementFormProps) {

    useEffect(() => {
        const initialRequirement = [
            {
                id: 0,
                name: 'Main estimation',
                requirement: {
                    finish: '',
                    sustainabilityCertification: '',
                    mepFeatures: '',
                    buildingCondition: '',
                    technology: '',
                    furniture: ''
                }
            }
        ];

        if (stimates.length === 0) {
            updateFields({ stimates: initialRequirement });
        }
    }, [stimates, updateFields])

    const handleRadioChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        let data = [...stimates];
        data[0].requirement.finish = event.target.value;
        updateFields({ stimates: data });
    }

    console.log(stimates);
    return (
        <>
            {/* checked={selectedAmenityIds.includes(amenity._id)} */}
            {/* checked={selectedTopping === 'Regular'} */}
            {finishData.map((finish: finishType, index: any) => (
                <div data-category="03.1.1" key={finish.id} data-value={finish.slug} data-col={index + 1}
                    className={`js-select-option col-start-${index + 1} row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full`}>
                    <div className="p-30 estimation">
                        <input type="radio" name="finish" value={finish.slug} id={`finish-${index + 1}`} onChange={e => handleRadioChange(index, e)} />
                        <label htmlFor={`finish-${index + 1}`}>
                            <Image
                                src={finish.image}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={finish.slug}
                                priority
                                className="grayscale w-full h-auto"
                            />
                            <span className="cover-checkbox">
                                <svg viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                        </label>
                        <p className="font-weight font-latobold text-green mt-2">{finish.name}</p>
                        <p className="font-lato mt-1">{finish.description} </p>
                    </div>
                </div>
            ))}
        </>
    )
}