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

export default function Flooring({ projectId, refinements, tabiIndex }: Props) {
  // set refinement id
  const [refinementId, setRefinementId] = useState<string>("");

  // get all project amenities
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
      (refinement) => refinement.name === "flooring"
    )._id;
    setRefinementId(refinementId);
  }, [refinements]);

  return (
    <>
      {projectAmenities.length &&
        projectAmenities.map(
          (
            projectAmenity: { _id: string; amenityName: string },
            index: number
          ) => (
            <OptionWrapper
              key={projectAmenity._id}
              refinementId={refinementId}                                               // refinement [flooring, furniture, partitions]
              projectAmenityId={projectAmenity._id}                                     // project amenity id
              amenityName={projectAmenity.amenityName}                                  // amenity name
              tabiIndex={tabiIndex}
            />
          )
        )}
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
      (refinement: {
        projectAmenityId: string;
        refinementId: string;
      }) =>
        refinement.projectAmenityId === projectAmenityId &&
        refinement.refinementId === refinementId
    );
    // const updatedAmen = [ ...amen ]; // create a new array to avoid mutating the state directly

    // // check if an input already exists with the said type & get the index position
    // const exisitingAmenIdx = updatedAmen.findIndex((a) => a.name === type);

    // if (exisitingAmenIdx >= 0) {
    //   updatedAmen[exisitingAmenIdx].val = e.target.value;
    // } else {
    //   updatedAmen.push({
    //     name: type,
    //     val: e.target.value
    //   })

    //   // finally update the state
    //   setAmen(updatedAmen)
    // }
    // ===================
    // const index = this.state.Question.findIndex((item) => item.OpId === OpId)
    // const newArray = [...this.state.Question]
    // if (index !== -1) {
    //   console.log("item exist");
    //   newArray.splice(index, 1, item)
    // } else {
    //   console.log("item not exist");
    //   newArray.push(Qobj);
    // }
    // this.setState({ Question: newArray })
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
          refinement="flooring"
          amenityName={amenityName}
          hasRefinement={estimates[tabiIndex].refinement.find(
            (refinement: {
              projectAmenityId: string;
              refinementId: string;
              refinementLevelId: string;
            }) => refinement.projectAmenityId === projectAmenityId
          )}
          onChange={handleRadioChange}
        />
      </div>
    </div>
  );
}
