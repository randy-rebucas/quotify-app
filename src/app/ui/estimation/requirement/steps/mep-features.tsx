'use client';

import Image from "next/image";
import { RequirementData } from "../entities";
import { ChangeEvent } from "react";
import { finishType, requirementData } from "../mock";

type MepFormProps = RequirementData & {
    stimates: any,
    tabiIndex: number,
    updateFields: (fields: Partial<RequirementData>) => void
}

export default function MepFeatures({
    stimates,
    tabiIndex,
    updateFields
}: MepFormProps) {

    const handleRadioChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        let data = [...stimates];
        data[tabiIndex].requirement.mepFeatures = event.target.value;
        updateFields({ stimates: data });
    }

    return (
        <>
            {requirementData.map((finish: finishType, index: any) => (
                <div data-col={index + 1} key={finish.id}
                    className={`js-select-option col-start-${index + 1} row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full`}>
                    <div className="p-30 estimation">
                        <input type="radio" name="finish" value={finish.slug} id={`finish-${index + 1}`} onChange={e => handleRadioChange(index, e)} />
                        <label htmlFor={`finish-${index + 1}`}>
                            <Image
                                src={finish.image}
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
                        <p className="font-weight font-latobold text-green mt-2">{finish.name}</p>
                        <p className="font-lato mt-1">{finish.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}