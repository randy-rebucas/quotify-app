import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  requirementCount: number;
};

export type Actions = {
  getRequirementCount: (filter: string) => void;
  getRequirement: (filter: string) => void;
  getRefinement: (filter: string) => void;
  reset: () => void;
};

export const useEstimateStore = create<State & Actions>()(
  persist(
    (set) => ({
      requirementCount: 0,
      getRequirementCount: async (filter: string) => {
        const response = await fetch(`/api/estimate/by-property/${filter}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        let requirementResponse = await response.json();
        set({
          requirementCount: requirementResponse.length,
        });
      },
      getRequirement: () => {},
      getRefinement: () => {},
      reset: () =>
        set(() => ({
          requirementCount: 0,
        })),
    }),
    { name: "estimate", skipHydration: true }
  )
);
