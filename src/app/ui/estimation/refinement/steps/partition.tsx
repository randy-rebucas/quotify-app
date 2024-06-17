'use client';

import Image from "next/image";
import { RefinementData } from "../entities";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { IRefinementLevel } from "@/app/models/RefinementLevel";
import { useRefinementStore } from "@/app/lib/refinementStore";

type Props = {
    tabiIndex: number
}

export default function Partition({
    tabiIndex
}: Props) {
    const updateEstimateRefinement = useRefinementStore(state => state.updateEstimateRefinement);
    const getRefinementsByName = useRefinementStore(state => state.getRefinementsByName);
    const getRefinementLevelByRefinement = useRefinementStore(state => state.getRefinementLevelByRefinement);

    const estimates = useRefinementStore(state => state.estimates);
    const refinementId = useRefinementStore(state => state.refinementId);
    const refinementLevels = useRefinementStore(state => state.refinementLevels);

    useEffect(() => {
        getRefinementsByName('partitions');

        if (refinementId) {
            getRefinementLevelByRefinement(refinementId)
        }

    }, [getRefinementLevelByRefinement, getRefinementsByName, refinementId])

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        let data = [...estimates];
        let refinementObj = data[tabiIndex].refinement;
        refinementObj.partitions = event.target.value;
        updateEstimateRefinement(tabiIndex, refinementObj);
    }

    return (
        <div data-col="1" className="col-start-1 col-span-4">
            <div className="grid grid-cols-4">
                {refinementLevels.map((refinementLevel: any, index: number) => (
                    <div data-value={refinementLevel.level} data-col={index + 1} key={refinementLevel._id.toString()}
                        className={`js-select-option col-start-${index + 1} row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full`}>
                        <div className="p-30 estimation estimation-yellow">
                            <input type="radio" name="refinement" value={refinementLevel._id.toString()} id={`refinement-${index + 1}`} onChange={e => handleRadioChange(e)} checked={estimates[tabiIndex].refinement.partitions == refinementLevel._id.toString()} />
                            <label htmlFor={`refinement-${index + 1}`}>
                                <Image
                                    src={`/uploads/${refinementLevel.image?.fileName}`}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt={refinementLevel.image.metaData?.alternativeText ?? refinementLevel.level}
                                    priority
                                    className="grayscale w-full h-auto"
                                />
                                <span className="cover-checkbox">
                                    <svg viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                            <h4 className="font-weight font-latobold mt-2">{refinementLevel.level}</h4>
                            <p className="font-lato mt-1">{refinementLevel.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}