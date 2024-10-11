"use client";

import { useRefinementLevelStore } from "@/lib/store/refinementLevelStore";
import { useRefinementStore } from "@/lib/store/refinementStore";
import Image from "next/image";
import { ChangeEventHandler, useEffect } from "react";

type Props = {
  refinement: string;
  id: string;
  refinementId: string;
  amenityName: string;
  selectedRefinement: { id: string; refinementLevelId: string };
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export default function Option({
  refinement,
  id,
  refinementId,
  amenityName,
  selectedRefinement,
  onChange,
}: Props) {
  const getRefinementIdByName = useRefinementStore(
    (state) => state.getRefinementIdByName
  );

  const getRefinementLevelByRefinement = useRefinementLevelStore(
    (state) => state.getRefinementLevelByRefinement
  );
  const refinementLevels = useRefinementLevelStore(
    (state) => state.refinementLevels
  );

  useEffect(() => {
    getRefinementIdByName(refinement);

    if (refinementId) {
      getRefinementLevelByRefinement(refinementId);
    }
  }, [
    refinement,
    refinementId,
    getRefinementLevelByRefinement,
    getRefinementIdByName,
  ]);

  return (
    <>
      {refinementLevels &&
        refinementLevels.map((refinementLevel: any, index: number) => (
          <div
            data-value={refinementLevel.level}
            data-col={index + 1}
            key={refinementLevel._id.toString()}
            className={`js-select-option col-start-${index + 1
              } row-start-2 col-span-1 flex flex-col justify-between items-start w-full h-full`}
          >
            <div className="p-30 estimation estimation-yellow">
              <input
                type="radio"
                name={amenityName}
                value={refinementLevel._id.toString()}
                id={`refinement-${amenityName}-${index + 1}`}
                onChange={onChange}
                defaultChecked={
                  selectedRefinement &&
                  selectedRefinement.refinementLevelId ===
                  refinementLevel._id.toString()
                }
                required
              />
              <label htmlFor={`refinement-${amenityName}-${index + 1}`}>
                <Image
                  src={refinementLevel.image?.fileName}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={
                    refinementLevel.image.metaData?.alternativeText ??
                    refinementLevel.level
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
              <h4 className="font-weight font-latobold mt-2">
                {refinementLevel.level}
              </h4>
              <p className="font-lato mt-1">{refinementLevel.description}</p>
            </div>
          </div>
        ))}
    </>
  );
}
