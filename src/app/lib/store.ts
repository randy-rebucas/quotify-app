import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Address = {
  place: string;
  location: google.maps.LatLng | undefined;
};

export type ProjectInformation = {
  spaceName: string;
  floorPlans: any[];
  hasFloorPlan: boolean;
  address: Address;
  hasAddress: boolean;
  approximateSize: string;
  rentableArea: string;
  isBaseOnHeadCount: boolean;
  targetHeadCount: string;
  averageAttendance: string;
  assignedSeat: string;
};

export type ProjectInformationState = {
  projectInformation: ProjectInformation;
};

export type ProjectInformationActions = {
  updateFields: (fields: Partial<ProjectInformation>) => void;
};

export const INITIAL_PROJECT_INFORMATION_DATA: ProjectInformation = {
  spaceName: "",
  floorPlans: [],
  hasFloorPlan: false,
  address: {
    place: "",
    location: undefined,
  },
  hasAddress: false,
  approximateSize: "3000",
  rentableArea: "3000",
  isBaseOnHeadCount: false,
  targetHeadCount: "",
  averageAttendance: "",
  assignedSeat: "30",
};

export const useProjectInformationStore = create<ProjectInformationState & ProjectInformationActions>()(
  persist(
    (set) => ({
      projectInformation: INITIAL_PROJECT_INFORMATION_DATA,
      updateFields: (fields) =>
        set((state) => ({
          projectInformation: { ...state.projectInformation, ...fields },
        })),
    }),
    { name: "project-information", skipHydration: true }
  )
);
// ====================

export type ProjectCustomSpaceData = {
  id: number;
  space: string;
  quantity: number;
};

export type AreaBreakdown = {
  selectedAmenityIds: string[];
  selectedCustomSpaces: ProjectCustomSpaceData[];
}

export type AreaBreakdownState = {
  areaBreakdown: AreaBreakdown;
};

export type AreaBreakdownActions = {
  updateFields: (fields: Partial<AreaBreakdown>) => void;
};

export const INITIAL_AREA_BREAKDOWN_DATA: AreaBreakdown = {
  selectedAmenityIds: [],
  selectedCustomSpaces: [],
};

export const useAreaBreakdownStore = create<AreaBreakdownState & AreaBreakdownActions>()(
  persist(
    (set) => ({
      areaBreakdown: INITIAL_AREA_BREAKDOWN_DATA,
      updateFields: (fields) =>
        set((state) => ({
          areaBreakdown: { ...state.areaBreakdown, ...fields },
        })),
    }),
    { name: "area-breakdown", skipHydration: true }
  )
);