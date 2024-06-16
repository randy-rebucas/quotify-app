import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Estimate = {
  id: number;
  name: string;
  requirement: any | null;
};

export type State = {
  estimates: Estimate[];
};

export type Actions = {
  addEstimate: (estimate: Estimate) => void;
  updateEstimateRequirement: (id: number, requirement: any) => void;
};

export const INITIAL_DATA: Estimate = {
  id: 0,
  name: "Main estimation",
  requirement: new Object(),
};

export const useRequirementStore = create<State & Actions>()(
  persist(
    (set) => ({
      estimates: [INITIAL_DATA],
      addEstimate: (estimate) =>
        set((state) => ({
          estimates: [...state.estimates, estimate],
        })),
      updateEstimateRequirement: (id: number, requirement: any) =>
        set((state) => ({
          estimates: state.estimates.map((estimate: Estimate) =>
            estimate.id === id
              ? { ...estimate, requirement }
              : estimate
          ),
        })),
    }),
    { name: "requirement", skipHydration: true }
  )
);
