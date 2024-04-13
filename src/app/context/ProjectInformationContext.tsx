'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


export type ProjectInformation = {
  spaceName: string
  hasFloorPlan: boolean
  address: string
  hasAddress: boolean
  approximateSize: string
  rentableArea: string
  isBaseOnHeadCount: boolean
  targetHeadCount: string
  averageAttendance: string
  assignedSeat: string
}

export interface ProjectInformationContextInterface {
  projectInformation: ProjectInformation,
  setProjectInformation: Dispatch<SetStateAction<ProjectInformation>>
}

const defaultState = {
  projectInformation: {
    spaceName: "",
    hasFloorPlan: false,
    address: "",
    hasAddress: false,
    approximateSize: '3000',
    rentableArea: '3000',
    isBaseOnHeadCount: false,
    targetHeadCount: "",
    averageAttendance: "",
    assignedSeat: "30"
  },
  setProjectInformation: (projectInformation: ProjectInformation) => { }
} as ProjectInformationContextInterface

export const ProjectInformationContext = createContext(defaultState);

export const ProjectInformationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [projectInformation, setProjectInformation] = useState<ProjectInformation>({
    spaceName: "",
    hasFloorPlan: false,
    address: "",
    hasAddress: false,
    approximateSize: '3000',
    rentableArea: '3000',
    isBaseOnHeadCount: false,
    targetHeadCount: "",
    averageAttendance: "",
    assignedSeat: "30"
  })

  return <ProjectInformationContext.Provider value={{ projectInformation, setProjectInformation }}>{children}</ProjectInformationContext.Provider>;
};
