import { IRefinementLevel } from "@/app/models/RefinementLevel";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Estimate = {
  id: number;
  name: string;
  refinement: any | null;
};

export type State = {
  estimates: Estimate[];
  refinementLevels: IRefinementLevel[];
  refinementId: string | null;
};

export type Actions = {
  getRefinementsByName: (filter: string) => void;
  getRefinementLevelByRefinement: (id: string) => void;
  addEstimate: (estimate: Estimate) => void;
  updateEstimateRefinement: (estimates: Estimate[]) => void;
  reset: () => void;
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
      refinementLevels: [],
      refinementId: null,
      getRefinementsByName: async (filter: string) => {
        const response = await fetch(`/api/refinement/${filter}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        let refinementResponse = await response.json();
        set({
          refinementId: refinementResponse._id,
        });
      },
      getRefinementLevelByRefinement: async (id: string) => {
        const response = await fetch(
          `/api/refinement-level/by-refinement/${id}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        let refinementLevelResponse = await response.json();
        set({
          refinementLevels: refinementLevelResponse,
        });
      },
      addEstimate: (estimate) =>
        set((state) => ({
          estimates: [...state.estimates, estimate],
        })),
      updateEstimateRefinement: (estimates: Estimate[]) =>
        set(() => ({
          estimates: estimates,
        })),
      reset: () =>
        set(() => ({
          estimates: [INITIAL_DATA],
          refinementLevels: [],
          refinementId: null,
        })),
    }),
    { name: "refinement", skipHydration: true }
  )
);
