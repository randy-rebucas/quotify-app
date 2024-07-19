"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Estimate, useRefinementStore } from "@/app/lib/store/refinementStore";
import RefinementLevelOption from "@/app/ui/level-option/refinement-level-option";
import { ProjectAmenities } from "../form";

type Props = {
  projectId: string;
  tabiIndex: number;
};

export default function Flooring({ projectId, tabiIndex }: Props) {
  const [projectAmenities, setProjectAmenities] = useState<ProjectAmenities[]>(
    []
  );

  useEffect(() => {
    const getProjectAmenitiesLabel = async (id?: string) => {
      if (id) {
        const response = await fetch(
          `/api/project/amenities/by-project/${id}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        let projectAmenitiesResponse = await response.json();
        setProjectAmenities(projectAmenitiesResponse);
      }
    };

    getProjectAmenitiesLabel(projectId);
  }, [projectId]);

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

interface RefinementDictionary {
  [key: string]: string;
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

    estimates.map((estimate: Estimate) => {
      console.log(estimate.refinement.projectAmenity);
      console.log(event.currentTarget.dataset.property_amenity);
      return estimate.refinement.projectAmenity ===
        event.currentTarget.dataset.property_amenity
        ? (estimate.refinement.refinementLevel = event.target.value)
        : [
            ...estimates[currentEstimateIndex].refinement,
            {
              projectAmenity: event.currentTarget.dataset.property_amenity,
              refinementLevel: event.target.value,
            },
          ];
    });
    console.log(estimates);
    // if (nextRefinements) {
    //   nextRefinements.refinementLevel = event.target.value;
    //   console.log(nextRefinements);
    // } else {
    //   newEstimates[currentEstimateIndex].refinement = [
    //     ...estimates[currentEstimateIndex].refinement,
    //     {
    //       projectAmenity: event.currentTarget.dataset.property_amenity,
    //       refinementLevel: event.target.value,
    //     },
    //   ];
    //   console.log(newEstimates);
    // }

    // newEstimates[currentEstimateIndex].refinement.map((refinement: any) =>
    //   refinement.projectAmenity === event.currentTarget.dataset.property_amenity
    //     ? {
    //         ...refinement,
    //         refinementLevel: event.target.value,
    //       }
    //     : refinement
    // );

    // newEstimates[currentEstimateIndex].refinement = [
    //   ...estimates[currentEstimateIndex].refinement,
    //   {
    //     projectAmenity: event.currentTarget.dataset.property_amenity,
    //     refinementLevel: event.target.value,
    //   },
    // ];
    // console.log(newEstimates);

    // updateEstimateRefinement(newEstimates);
  };

  return (
    <div data-col="1" className="col-start-1 col-span-4">
      <h3 className="px-30 col-start-1 font-weight font-latobold mt-2">
        {amenityName}
      </h3>
      <div className="grid grid-cols-4">
        <RefinementLevelOption
          refinement="flooring"
          amenityName={amenityName}
          projectAmenityId={projectAmenityId}
          hasRefinement={estimates[tabiIndex].refinement.flooring}
          onChange={handleRadioChange}
        />
      </div>
    </div>
  );
}
