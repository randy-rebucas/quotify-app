import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProjectCustomSpaceData = {
  id: number;
  space: string;
  quantity: number;
};

export type PartialData = {
  selectedAmenityIds: string[];
  selectedCustomSpaces: ProjectCustomSpaceData[];
}

export type State = {
  areaBreakdown: PartialData;
};

export type Actions = {
  updateFields: (fields: Partial<PartialData>) => void;
};

export const INITIAL_DATA: PartialData = {
  selectedAmenityIds: [],
  selectedCustomSpaces: [],
};

export const useAreaBreakdownStore = create<State & Actions>()(
  persist(
    (set) => ({
      areaBreakdown: INITIAL_DATA,
      updateFields: (fields) =>
        set((state) => ({
          areaBreakdown: { ...state.areaBreakdown, ...fields },
        })),
    }),
    { name: "area-breakdown", skipHydration: true }
  )
);