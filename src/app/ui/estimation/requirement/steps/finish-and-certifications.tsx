
'use client';

import Image from "next/image";
import { RequirementData } from "../entities";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { IRequirementLevel } from "@/app/models/RequirementLevel";

type RequirementFormProps = RequirementData & {
    stimates: any,
    tabiIndex: number,
    updateFields: (fields: Partial<RequirementData>) => void
}

export default function FinishAndCertification({
    stimates,
    tabiIndex,
    updateFields
}: RequirementFormProps) {

    const [requirementId, setRequirementId] = useState<string>()
    const [requirementLevels, setRequirementLevels] = useState<IRequirementLevel[]>([])

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

    useMemo(async () => {

        const getRequirement = async (filter: string) => {
            const response = await fetch(`/api/requirement/${filter}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            let requirementResponse = await response.json();

            setRequirementId(requirementResponse._id);
        }

        if (requirementId === undefined) {
            const filter = 'finish and certifications';
            getRequirement(filter)
        }

        return requirementId;
    }, [requirementId]);

    useEffect(() => {

        const getRequirementLevels = async (id: string) => {
            const response = await fetch(`/api/requirement-level/by-requirement/${id}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            let requirementLevelResponse = await response.json();

            setRequirementLevels(requirementLevelResponse);
        }

        if (requirementId && requirementLevels.length === 0) {
            getRequirementLevels(requirementId);
        }

    }, [requirementId, requirementLevels])

    const handleRadioChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        let data = [...stimates];
        data[tabiIndex].requirement.finish = event.target.value;
        updateFields({ stimates: data });
    }

    return (
        <>
            {requirementLevels.map((requirementLevel: any, index: any) => (
                <div data-category={`03.1.${index + 1}`} key={requirementLevel._id.toString()} data-value={requirementLevel.level} data-col={index + 1}
                    className={`js-select-option col-start-${index + 1} row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full`}>
                    <div className="p-30 estimation">
                        <input type="radio" name="finish" value={requirementLevel._id.toString()} id={`finish-${index + 1}`} onChange={e => handleRadioChange(index, e)} checked={stimates[tabiIndex].requirement.finish == requirementLevel._id.toString()} />
                        <label htmlFor={`finish-${index + 1}`}>
                            <Image
                                src={`/uploads/${requirementLevel.image?.fileName}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={requirementLevel.image.metaData?.alternativeText ?? requirementLevel.level}
                                priority
                                className="grayscale w-full h-auto"
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