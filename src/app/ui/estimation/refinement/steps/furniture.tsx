"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRefinementStore } from "@/app/lib/store/refinementStore";
import RefinementLevelOption from "@/app/ui/level-option/refinement-level-option";
import { useProjectAmenityStore } from "@/app/lib/store/projectAmenityStore";

type Props = {
  projectId: string;
  refinements: any[];
  tabiIndex: number;
};

export default function Furniture({
  projectId,
  refinements,
  tabiIndex,
}: Props) {
  // set refinement id
  const [refinementId, setRefinementId] = useState<string>("");

  const projectAmenities = useProjectAmenityStore(
    (state) => state.projectAmenities
  );
  const getProjectAmenities = useProjectAmenityStore(
    (state) => state.getProjectAmenities
  );

  useEffect(() => {
    getProjectAmenities(projectId);
  }, [getProjectAmenities, projectId]);

  useEffect(() => {
    const refinementId = refinements.find(
      (refinement) => refinement.name === "furniture"
    )._id;
    setRefinementId(refinementId);
  }, [refinements]);

  return (
    <>
      {projectAmenities &&
        projectAmenities.map((projectAmenity: any, index: number) => (
          <OptionWrapper
            key={projectAmenity._id}
            refinementId={refinementId} // refinement [flooring, furniture, partitions]
            projectAmenityId={projectAmenity._id} // project amenity id
            amenityName={projectAmenity.amenityName} // amenity name
            tabiIndex={tabiIndex}
          />
        ))}
    </>
  );
}

export function OptionWrapper({
  projectAmenityId,
  refinementId,
  amenityName,
  tabiIndex,
}: {
  projectAmenityId: string;
  refinementId: string;
  amenityName: string;
  tabiIndex: number;
}) {
  const updateEstimateRefinement = useRefinementStore(
    (state) => state.updateEstimateRefinement
  );
  const estimates = useRefinementStore((state) => state.estimates);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentEstimateIndex = estimates.findIndex(
      (estimate) => estimate.id === tabiIndex
    );

    const newEstimates = [...estimates];

    const nextRefinements = newEstimates[currentEstimateIndex].refinement.find(
      (refinement: { projectAmenityId: string; refinementId: string }) =>
        refinement.projectAmenityId === projectAmenityId &&
        refinement.refinementId === refinementId
    );

    if (nextRefinements) {
      // update nested array
      newEstimates[currentEstimateIndex].refinement.map(
        (refinement: {
          projectAmenityId: string;
          refinementId: string;
          refinementLevelId: string;
        }) => {
          if (
            refinement.projectAmenityId === projectAmenityId &&
            refinement.refinementId === refinementId
          ) {
            return (refinement.refinementLevelId = event.target.value);
          } else {
            return refinement;
          }
        }
      );
      updateEstimateRefinement(newEstimates);
    } else {
      // set new refinement array
      newEstimates[currentEstimateIndex].refinement = [
        ...estimates[currentEstimateIndex].refinement,
        {
          projectAmenityId: projectAmenityId,
          refinementId: refinementId,
          refinementLevelId: event.target.value,
        },
      ];
      updateEstimateRefinement(newEstimates);
    }
  };

  return (
    <div data-col="1" className="col-start-1 col-span-4">
      <h3 className="px-30 col-start-1 font-weight font-latobold mt-2">
        {amenityName}
      </h3>
      <div className="grid grid-cols-4">
        <RefinementLevelOption
          refinement="furniture"
          amenityName={amenityName}
          projectAmenityId={projectAmenityId}
          refinementId={refinementId}
          selectedRefinement={estimates[tabiIndex].refinement.find(
            (refinement: {
              projectAmenityId: string;
              refinementId: string;
              refinementLevelId: string;
            }) =>
              refinement.projectAmenityId === projectAmenityId &&
              refinement.refinementId === refinementId
          )}
          onChange={handleRadioChange}
        />
      </div>
    </div>
  );
}
