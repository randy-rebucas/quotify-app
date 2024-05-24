'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


export type ProjectFloorPlans = {
  floorPlan: any[]
}

export interface ProjectFloorPlanContextInterface {
  projectFloorPlans: ProjectFloorPlans,
  setProjectFloorPlans: Dispatch<SetStateAction<ProjectFloorPlans>>
}

const defaultState = {
  projectFloorPlans: {
    floorPlan: [],
  },
  setProjectFloorPlans: (projectFloorPlans: ProjectFloorPlans) => { }
} as ProjectFloorPlanContextInterface

export const ProjectFloorPlanContext = createContext(defaultState);

export const ProjectFloorPlanContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [projectFloorPlans, setProjectFloorPlans] = useState<ProjectFloorPlans>({
    floorPlan: [],
  })

  return (
    <ProjectFloorPlanContext.Provider value={{ projectFloorPlans, setProjectFloorPlans }}>
      {children}
    </ProjectFloorPlanContext.Provider>
  );
};
