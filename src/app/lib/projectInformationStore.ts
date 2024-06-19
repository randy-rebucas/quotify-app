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
  data: any | null;
};

export type Actions = {
  spacedName: (space_name: string) => void;
  toggleFloorPlan: (floorplan: boolean) => void;
  addFloorPlan: (file: any) => void;
  removeFloorPlan: (id: string) => void;
  addressed: (place: string, location: google.maps.LatLng | undefined) => void;
  toggleAddress: (address: boolean) => void;
  approximateSized: (approximate_size: string) => void;
  rentabledArea: (rentable_area: string) => void;
  toggleBaseOnHeadCount: (base_on_head_count: boolean) => void;
  targetHeadCounted: (target_head_count: string) => void;
  averageAttendanced: (average_attendance: string) => void;
  assignedSeated: (assigned_seat: string) => void;
  dispatch: (formData: FormData) => void;
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
      data: null,
      spacedName: (space_name: string) => set({ spaceName: space_name }),
      toggleFloorPlan: (floorplan: boolean) => set({ hasFloorPlan: floorplan }),
      addFloorPlan: (file: any) =>
        set((state) => ({ floorPlans: [...state.floorPlans, file] })),
      removeFloorPlan: (filename: string) =>
        set((state) => ({
          floorPlans: state.floorPlans.filter(
            (floorplan) => floorplan.name !== filename
          ),
        })),
      addressed: (place: string, location: google.maps.LatLng | undefined) =>
        set({
          address: {
            place: place,
            location: location,
          },
        }),
      toggleAddress: (address: boolean) => set({ hasAddress: address }),
      approximateSized: (approximate_size: string) =>
        set({ approximateSize: approximate_size }),
      rentabledArea: (rentable_area: string) =>
        set({ rentableArea: rentable_area }),
      toggleBaseOnHeadCount: (base_on_head_count: boolean) =>
        set({ isBaseOnHeadCount: base_on_head_count }),
      targetHeadCounted: (target_head_count: string) =>
        set({ targetHeadCount: target_head_count }),
      averageAttendanced: (average_attendance: string) =>
        set({ averageAttendance: average_attendance }),
      assignedSeated: (assigned_seat: string) =>
        set({ assignedSeat: assigned_seat }),
      dispatch: (formData: FormData) => {
        try {
          // const response = await fetch(`/api/projects`, {
          //   method: "POST",
          //   body: formData,
          // });
          // let refinementResponse = await response.json();
          // set({
          //   data: refinementResponse,
          // });
        } catch (error) {}
      },
      updateFields: (fields) =>
        set((state) => ({
          projectInformation: { ...state.projectInformation, ...fields },
        })),
    }),
    { name: "project-information", skipHydration: true }
  )
);
