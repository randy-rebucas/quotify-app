'use client';

import Image from "next/image";
import { RefinementData } from "../entities";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { IRefinementLevel } from "@/app/models/RefinementLevel";

type MepFormProps = RefinementData & {
    stimates: any,
    tabiIndex: number,
    updateFields: (fields: Partial<RefinementData>) => void
}

export default function Partition({
    stimates,
    tabiIndex,
    updateFields
}: MepFormProps) {

    const [refinementId, setRefinementId] = useState<string>()
    const [refinementLevels, setRefinementLevels] = useState<IRefinementLevel[]>([])

    // 
    useMemo(async () => {

        const getRefinement = async (filter: string) => {
            const response = await fetch(`/api/refinement/${filter}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            let refinementResponse = await response.json();

            setRefinementId(refinementResponse._id);
        }

        if (refinementId === undefined) {
            const filter = 'partitions';
            getRefinement(filter)
        }

        return refinementId;
    }, [refinementId]);

    useEffect(() => {

        const getRefinementLevels = async (id: string) => {
            const response = await fetch(`/api/refinement-level/${id}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            let refinementLevelResponse = await response.json();

            setRefinementLevels(refinementLevelResponse);
        }

        if (refinementId && refinementLevels.length === 0) {
            getRefinementLevels(refinementId);
        }

    }, [refinementId, refinementLevels])

    const handleRadioChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        let data = [...stimates];
        data[tabiIndex].refinement.partitions = event.target.value;
        updateFields({ stimates: data });
    }

    return (
        <div data-col="1" className="col-start-1 col-span-4">
            <div className="grid grid-cols-4">
                {refinementLevels.map((refinementLevel: any, index: number) => (
                    <div data-value={refinementLevel.level} data-col={index + 1} key={refinementLevel._id.toString()}
                        className={`js-select-option col-start-${index + 1} row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full`}>
                        <div className="p-30 estimation">
                            <input type="radio" name="refinement" value={refinementLevel.level} id={`refinement-${index + 1}`} onChange={e => handleRadioChange(index, e)} checked={stimates[tabiIndex].refinement.partitions == refinementLevel.level} />
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