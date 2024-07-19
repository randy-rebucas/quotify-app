"use client";

import { ChangeEvent, useEffect, useMemo } from "react";
import { useRefinementStore } from "@/app/lib/store/refinementStore";
import RefinementLevelOption from "@/app/ui/level-option/refinement-level-option";
import { useProjectAmenityStore } from "@/app/lib/store/projectAmenityStore";

type Props = {
  projectId: string;
  tabiIndex: number;
};

export default function Flooring({ projectId, tabiIndex }: Props) {
  const updateEstimateRefinement = useRefinementStore(
    (state) => state.updateEstimateRefinement
  );

  const estimates = useRefinementStore((state) => state.estimates);
  const projectAmenities = useProjectAmenityStore(
    (state) => state.projectAmenities
  );

  const getProjectAmenitiesByProjectId = useProjectAmenityStore(
    (state) => state.getProjectAmenitiesByProjectId
  );

  useMemo(() => {
    if (projectId) {
      getProjectAmenitiesByProjectId(projectId);
    }
  }, [getProjectAmenitiesByProjectId, projectId]);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentEstimateIndex = estimates.findIndex(
      (estimate) => estimate.id === tabiIndex
    );
    const newEstimates = [...estimates];
    newEstimates[currentEstimateIndex].refinement = {
      ...estimates[currentEstimateIndex].refinement,
      flooring: event.target.value,
    };
    updateEstimateRefinement(newEstimates);
  };

  return (
    <>
      {projectAmenities &&
        projectAmenities.map((projectAmenity: any, index: number) => (
          <div
            key={projectAmenity.id}
            data-col={index + 1}
            className="col-start-1 col-span-4"
          >
            <h3 className="px-30 col-start-1 font-weight font-latobold mt-2">
              {projectAmenity.amenityName}
            </h3>
            <div className="grid grid-cols-4">
              <RefinementLevelOption
                refinement="flooring"
                hasRefinement={estimates[tabiIndex].refinement.flooring}
                optionName={projectAmenity.amenityName}
                onChange={handleRadioChange}
              />
            </div>
          </div>
        ))}
    </>
  );
}
