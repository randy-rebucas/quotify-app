"use client";

import { IRequirementLevel } from "@/app/models/RequirementLevel";

import Image from "next/image";
import { ChangeEventHandler, useEffect, useState } from "react";

export default function Option({
  requirementId,
  requirementName,
  selectedRequirement,
  onChange,
}: {
  requirementId: string;
  requirementName: string;
  selectedRequirement: { requirementId: string; requirementLevelId: string };
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  const [requirementLevels, setRequirementLevels] = useState<IRequirementLevel[]>([]);

  useEffect(() => {
    const getRequirementLevels = async (id?: string) => {
      const response = await fetch(
        `/api/requirement-level/by-requirement/${id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      let requirementLevelResponse = await response.json();
      setRequirementLevels(requirementLevelResponse);
    };

    getRequirementLevels(requirementId);

  }, [requirementId]);

  return (
    <>
      {requirementLevels &&
        requirementLevels.map((requirementLevel: any, index: any) => (
          <div
            data-category={`03.1.${index + 1}`}
            key={requirementLevel._id.toString()}
            data-value={requirementLevel.level}
            data-col={index + 1}
            className={`js-select-option col-start-${index + 1
              } row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full`}
          >
            <div className="p-30 estimation estimation-green">
              <input
                type="radio"
                name={requirementName}
                value={requirementLevel._id.toString()}
                data-label={requirementLevel.level}
                id={`requirement-${requirementName}-${index + 1}`}
                onChange={onChange}
                checked={
                  selectedRequirement &&
                  selectedRequirement.requirementLevelId ===
                  requirementLevel._id.toString()
                }
              />
              <label htmlFor={`requirement-${requirementName}-${index + 1}`}>
                <Image
                  src={`/uploads/${requirementLevel.image?.fileName}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={
                    requirementLevel.image.metaData?.alternativeText ??
                    requirementLevel.level
                  }
                  priority
                  className="grayscale w-full h-auto"
                />
                <span className="cover-checkbox">
                  <svg viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
              </label>
              <p className="font-weight font-latobold text-green mt-2">
                {requirementLevel.level}
              </p>
              <p className="font-lato mt-1">
                {requirementLevel.description}
              </p>
            </div>
          </div>

        ))}
    </>
  );
}
