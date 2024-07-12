import { IRefinement } from "@/app/models/Refinement";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Estimate = {
  id: number;
  name: string;
  refinement: any | null;
};

export type State = {
  estimates: Estimate[];
  refinementId: string | null;
  refinement: IRefinement | null;
};

export type Actions = {
  getRefinementIdByName: (filter: string) => void;
  getRefinement: (filter: string) => void;
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
      refinementId: null,
      refinement: null,
      getRefinementIdByName: async (filter: string) => {
        const response = await fetch(`/api/refinement/by-name/${filter}`, {
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
      getRefinement: async (filter: string) => {
        const response = await fetch(`/api/refinement/${filter}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        let refinementResponse = await response.json();
        set({
          refinement: refinementResponse,
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
          refinementId: null,
        })),
    }),
    { name: "refinement", skipHydration: true }
  )
);
