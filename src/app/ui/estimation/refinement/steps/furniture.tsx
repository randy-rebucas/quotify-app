"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRefinementStore } from "@/app/lib/store/refinementStore";
import RefinementLevelOption from "@/app/ui/level-option/refinement-level-option";
import { useProjectAmenityStore } from "@/app/lib/store/projectAmenityStore";
import { ProjectAreaDefination } from "../form";
import { useProjectCustomSpaceStore } from "@/app/lib/store/projectCustomSpaceStore";

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
  const [projectAreaDefinations, setProjectAreaDefinations] = useState<ProjectAreaDefination[]>([]);

  const projectAmenities = useProjectAmenityStore(
    (state) => state.projectAmenities
  );
  const getProjectAmenities = useProjectAmenityStore(
    (state) => state.getProjectAmenities
  );

  useEffect(() => {
    getProjectAmenities(projectId);
  }, [getProjectAmenities, projectId]);

  const projectCustomSpaces = useProjectCustomSpaceStore(
    (state) => state.projectCustomSpaces
  );
  const getProjectCustomSpaces = useProjectCustomSpaceStore(
    (state) => state.getProjectCustomSpaces
  );

  useEffect(() => {
    getProjectCustomSpaces(projectId);
  }, [getProjectCustomSpaces, projectId]);

  useEffect(() => {
    const refinementId = refinements.find(
      (refinement) => refinement.name === "furniture"
    )._id;
    setRefinementId(refinementId);
  }, [refinements]);

  useEffect(() => {
    setProjectAreaDefinations([...projectCustomSpaces, ...projectAmenities]);
  }, [projectAmenities, projectCustomSpaces]);

  return (
    <>
      {projectAreaDefinations &&
        projectAreaDefinations.map((projectAreaDefination: { _id: string; name: string, type: string }) => (
          <OptionWrapper
            key={projectAreaDefination._id}
            refinementId={refinementId}                                               // refinement [flooring, furniture, partitions]
            id={projectAreaDefination._id}                                     // project amenity id
            name={projectAreaDefination.name}                                  // area name
            type={projectAreaDefination.type}
            tabiIndex={tabiIndex}
          />
        )
        )}
    </>
  );
}

export function OptionWrapper({
  refinementId,
  id,
  name,
  type,
  tabiIndex,
}: {
  refinementId: string;
  id: string;
  name: string;
  type: string;
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
      (refinement: {
        id: string;
        refinementId: string;
      }) =>
        refinement.id === id &&
        refinement.refinementId === refinementId
    );

    if (nextRefinements) {
      // update nested array
      newEstimates[currentEstimateIndex].refinement.map(
        (refinement: {
          id: string;
          refinementId: string;
          refinementLevelId: string;
        }) => {
          if (
            refinement.id === id &&
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
          id: id,
          type: type,
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
        {name} <span className="font-light text-gray-400 text-sm">({type})</span>
      </h3>
      <div className="grid grid-cols-4">
        <RefinementLevelOption
          refinement="furniture"
          amenityName={name}
          id={id}
          refinementId={refinementId}
          selectedRefinement={estimates[tabiIndex].refinement.find(
            (refinement: {
              id: string;
              refinementId: string;
              refinementLevelId: string;
            }) => refinement.id === id && refinement.refinementId === refinementId
          )}
          onChange={handleRadioChange}
        />
      </div>
    </div>
  );
}

