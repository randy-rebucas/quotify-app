"use client";

import { useEffect, useState } from "react";
import { ProjectAreaDefination } from "../form";
import OptionWrapper from "../option-wrapper";
import { useRefinementStore } from "@/lib/store/refinementStore";
import { useProjectAmenityStore } from "@/lib/store/projectAmenityStore";
import { useProjectCustomSpaceStore } from "@/lib/store/projectCustomSpaceStore";


type Props = {
  projectId: string;
  refinements: any[];
};

export default function Furniture({
  projectId,
  refinements,
}: Props) {
  const activeTab = useRefinementStore((state) => state.activeTab);
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
            tabiIndex={activeTab}
          />
        )
        )}
    </>
  );
}
