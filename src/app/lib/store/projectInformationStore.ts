import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Address = {
  place: string;
  location: google.maps.LatLng | undefined;
};

export type PartialData = {
  spaceName: string;
  floorPlans: any;
  address: Address;
  approximateSize: string;
  rentableArea: string;
  targetHeadCount: string;
  averageAttendance: string;
  assignedSeat: string;
};

export type State = {
  projectInformation: PartialData;
  hasFloorPlan: boolean;
  hasAddress: boolean;
  isBaseOnHeadCount: boolean;
};

export type Actions = {
  updateFields: (fields: Partial<PartialData>) => void;
  updateHasFloorPlan: (hasFloorPlan: State["hasFloorPlan"]) => void;
  updateHasAddress: (hasAddress: State["hasAddress"]) => void;
  updateIsBaseOnHeadCount: (
    isBaseOnHeadCount: State["isBaseOnHeadCount"]
  ) => void;
  reset: () => void;
};

export const INITIAL_PROJECT_INFORMATION_DATA: PartialData = {
  spaceName: "",
  floorPlans: [],
  address: {
    place: "",
    location: undefined,
  },
  approximateSize: '3000',
  rentableArea: '3000',
  targetHeadCount: '0',
  averageAttendance: "0",
  assignedSeat: "30",
};

export const useProjectInformationStore = create<State & Actions>()(
  persist(
    (set) => ({
      projectInformation: INITIAL_PROJECT_INFORMATION_DATA,
      hasFloorPlan: false,
      hasAddress: false,
      isBaseOnHeadCount: false,
      updateFields: (fields) =>
        set((state) => ({
          projectInformation: { ...state.projectInformation, ...fields },
        })),
      updateHasFloorPlan: (hasFloorPlan: boolean) =>
        set(() => ({ hasFloorPlan: hasFloorPlan })),
      updateHasAddress: (hasAddress: boolean) =>
        set(() => ({ hasAddress: hasAddress })),
      updateIsBaseOnHeadCount: (isBaseOnHeadCount: boolean) =>
        set(() => ({ isBaseOnHeadCount: isBaseOnHeadCount })),
      reset: () =>
        set(() => ({
          projectInformation: INITIAL_PROJECT_INFORMATION_DATA,
          hasFloorPlan: false,
          hasAddress: false,
          isBaseOnHeadCount: false,
        })),
    }),
    { name: "project-information", skipHydration: true }
  )
);
