import { IRefinement } from "@/models/Refinement";
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
  lastEstimate: number;
  isExpanded: boolean;
  activeTab: number;
};

export type Actions = {
  getRefinementIdByName: (filter: string) => void;
  getRefinement: (filter: string) => void;
  addEstimate: (estimate: Estimate) => void;
  updateEstimateRefinement: (estimates: Estimate[]) => void;
  updateLastEstimate: (estimates: State["estimates"]) => void;
  updateIsExpanded: (isExpanded: boolean) => void;
  updateActiveTab: (activeTab: number) => void;
  reset: () => void;
};

export const INITIAL_DATA: Estimate = {
  id: 0,
  name: "Main estimation",
  refinement: [],
};

export const useRefinementStore = create<State & Actions>()(
  persist(
    (set) => ({
      estimates: [INITIAL_DATA],
      refinementId: null,
      refinement: null,
      lastEstimate: 0,
      isExpanded: true,
      activeTab: 0,
      getRefinementIdByName: async (filter: string) => {
        const response = await fetch(`/api/refinement/by-name/${filter}`, {
          method: "GET",
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
          method: "GET",
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
        set((state) => ({ estimates: [...state.estimates, estimate] })),
      updateEstimateRefinement: (estimates: Estimate[]) =>
        set(() => ({ estimates: estimates })),
      updateLastEstimate: (estimates: Estimate[]) =>
        set(() => ({ lastEstimate: estimates.length - 1 })),
      updateIsExpanded: (isExpanded: boolean) =>
        set(() => ({ isExpanded: isExpanded })),
      updateActiveTab: (activeTab: number) =>
        set(() => ({ activeTab: activeTab })),
      reset: () =>
        set(() => ({
          estimates: [INITIAL_DATA],
          refinementId: null,
          refinement: null,
          lastEstimate: 0,
          isExpanded: true,
          activeTab: 0,
        })),
    }),
    { name: "refinement", skipHydration: true }
  )
);
