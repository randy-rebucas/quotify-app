'use client';

import Image from "next/image";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { IRequirementLevel } from "@/app/models/RequirementLevel";
import { useRequirementStore } from "@/app/lib/requirementStore";

type Props = {
    tabiIndex: number,
}

export default function Technology({
    tabiIndex
}: Props) {
    const updateEstimateRequirement = useRequirementStore(state => state.updateEstimateRequirement);
    const getRequirementsByName = useRequirementStore(state => state.getRequirementsByName);
    const getRequirementLevelByRequirement = useRequirementStore(state => state.getRequirementLevelByRequirement);

    const estimates = useRequirementStore(state => state.estimates);
    const requirementId = useRequirementStore(state => state.requirementId);
    const requirementLevels = useRequirementStore(state => state.requirementLevels);

    useEffect(() => {
        getRequirementsByName('technology');

        if (requirementId) {
            getRequirementLevelByRequirement(requirementId)
        }

    }, [getRequirementLevelByRequirement, getRequirementsByName, requirementId])

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        let data = [...estimates];
        let requirementObj = data[tabiIndex].requirement;
        requirementObj.technology = event.target.value;
        updateEstimateRequirement(tabiIndex, requirementObj);
    }
    return (
        <>
            {requirementLevels.map((requirementLevel: any, index: any) => (
                <div data-category={`03.1.${index + 1}`} key={requirementLevel._id.toString()} data-value={requirementLevel.level} data-col={index + 1}
                    className={`js-select-option col-start-${index + 1} row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full`}>
                    <div className="p-30 estimation estimation-green">
                        <input type="radio" name="finish" value={requirementLevel._id.toString()} data-label={requirementLevel.level} id={`finish-${index + 1}`} onChange={e => handleRadioChange(e)} checked={estimates[tabiIndex].requirement.technology == requirementLevel._id.toString()} />
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
            ))}
        </>
    )
}