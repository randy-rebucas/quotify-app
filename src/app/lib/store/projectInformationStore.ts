import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Address = {
  place: string;
  location: google.maps.LatLng | undefined;
};

export type PartialData = {
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

export type State = {
  projectInformation: PartialData;
};

export type Actions = {
  updateFields: (fields: Partial<PartialData>) => void;
};

export const INITIAL_PROJECT_INFORMATION_DATA: PartialData = {
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

export const useProjectInformationStore = create<State & Actions>()(
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
