import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Estimate = {
  id: number;
  name: string;
  refinement: any | null;
};

export type PartialData = {
  estimates: Estimate[];
};

export type State = {
  estimates: PartialData;
};

export type Actions = {
  updateFields: (fields: Partial<PartialData>) => void;
  addEstimate: (estimate: Estimate) => void;
};

export const INITIAL_DATA: PartialData = {
  estimates: [
    {
      id: 0,
      name: "Main estimation",
      refinement: new Object(),
    },
  ],
};

export const useRefinementStore = create<State & Actions>()(
  persist(
    (set) => ({
      estimates: INITIAL_DATA,
      updateFields: (fields) =>
        set((state) => ({
          estimates: { ...state.estimates, ...fields },
        })),
      addEstimate: (estimate) =>
        set((state) => ({
          estimates: { estimates: [...state.estimates.estimates, estimate] },
        })),
    }),
    { name: "refinement", skipHydration: true }
  )
);
