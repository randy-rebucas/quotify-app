import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Estimate = {
  id: number;
  name: string;
  refinement: any | null;
};

export type State = {
  estimates: Estimate[];
};

export type Actions = {
  addEstimate: (estimate: Estimate) => void;
  updateEstimateRefinement: (id: number, refinement: any) => void;
};

export const INITIAL_DATA: Estimate = {
  id: 0,
  name: "Main estimation",
  refinement: new Object(),
};

export const useRefinementStore = create<State & Actions>()(
  persist(
    (set) => ({
      estimates: [INITIAL_DATA],
      addEstimate: (estimate) =>
        set((state) => ({
          estimates: [...state.estimates, estimate],
        })),
      updateEstimateRefinement: (id: number, refinement: any) =>
        set((state) => ({
          estimates: state.estimates.map((estimate: Estimate) =>
            estimate.id === id ? { ...estimate, refinement } : estimate
          ),
        })),
    }),
    { name: "refinement", skipHydration: true }
  )
);
