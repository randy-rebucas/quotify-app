'use client';

import { useRequirementStore } from "@/app/lib/store/requirementStore";
import { ChangeEventHandler } from "react";
import Image from "next/image";

export default function InputRadio({ cursor, tabiIndex, handleRadioChange }:
    { cursor: string; tabiIndex: number, handleRadioChange: ChangeEventHandler<HTMLInputElement> }) {

    const estimates = useRequirementStore(state => state.estimates);
    const requirementLevels = useRequirementStore(state => state.requirementLevels);

    return (
        <>
            {requirementLevels.map((requirementLevel: any, index: any) => {
                return (
                    <>
                        <div data-category={`03.1.${index + 1}`} key={requirementLevel._id.toString()} data-value={requirementLevel.level} data-col={index + 1}
                            className={`js-select-option col-start-${index + 1} row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full`}>
                            <div className="p-30 estimation estimation-green">
                                <input type="radio" name="finish" value={requirementLevel._id.toString()} data-label={requirementLevel.level} id={`finish-${index + 1}`} onChange={e => handleRadioChange(e)} checked={estimates[tabiIndex].requirement.cursorMap[cursor] == requirementLevel._id.toString()} />
                                {/* <input type="radio" name="finish" value={requirementLevel._id.toString()} data-label={requirementLevel.level} id={`finish-${index + 1}`} onChange={e => handleRadioChange(e)} checked={estimates[tabiIndex].requirement.finish == requirementLevel._id.toString()} /> */}
                                <label htmlFor={`finish-${index + 1}`}>
                                    <Image
                                        src={`/uploads/${requirementLevel.image?.fileName}`}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        alt={requirementLevel.image.metaData?.alternativeText ?? requirementLevel.level}
                                        priority
                                        className='grayscale w-full h-auto'
                                    />
                                    <span className="cover-checkbox">
                                        <svg viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                </label>
                                <p className="font-weight font-latobold text-green mt-2">{requirementLevel.level}</p>
                                <p className="font-lato mt-1">{requirementLevel.description} </p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}