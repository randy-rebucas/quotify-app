"use client";

import { ChangeEvent, useEffect } from "react";
import { useRefinementStore } from "@/app/lib/store/refinementStore";
import RefinementLevelOption from "@/app/ui/level-option/refinement-level-option";
import { useProjectAmenityStore } from "@/app/lib/store/projectAmenityStore";

type Props = {
  projectId: string;
  tabiIndex: number;
};

export default function Furniture({ projectId, tabiIndex }: Props) {
  const projectAmenities = useProjectAmenityStore(
    (state) => state.projectAmenities
  );
  const getProjectAmenities = useProjectAmenityStore(
    (state) => state.getProjectAmenities
  );

  useEffect(() => {
    getProjectAmenities(projectId);
  }, [getProjectAmenities, projectId]);

  return (
    <>
      {projectAmenities.length &&
        projectAmenities.map((projectAmenity: any, index: number) => (
          <OptionWrapper
            key={projectAmenity._id}
            projectAmenityId={projectAmenity._id}
            amenityName={projectAmenity.amenityName}
            tabiIndex={tabiIndex}
          />
        ))}
    </>
  );
}

export function OptionWrapper({
  projectAmenityId,
  amenityName,
  tabiIndex,
}: {
  projectAmenityId: string;
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
      (refinement: any) =>
        refinement.projectAmenity ===
        event.currentTarget.dataset.property_amenity
    );

    if (nextRefinements) {
      // update nested array
      newEstimates[currentEstimateIndex].refinement.map((refinement: any) => {
        if (
          refinement.projectAmenity ===
          event.currentTarget.dataset.property_amenity
        ) {
          return (refinement.refinementLevel = event.target.value);
        } else {
          return refinement;
        }
      });
      updateEstimateRefinement(newEstimates);
    } else {
      // set new refinement array
      newEstimates[currentEstimateIndex].refinement = [
        ...estimates[currentEstimateIndex].refinement,
        {
          projectAmenity: event.currentTarget.dataset.property_amenity,
          refinementLevel: event.target.value,
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
          hasRefinement={estimates[tabiIndex].refinement.find(
            (refinement: { projectAmenity: string; refinementLevel: string }) =>
              refinement.projectAmenity === projectAmenityId
          )}
          onChange={handleRadioChange}
        />
      </div>
    </div>
  );
}
