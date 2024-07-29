import { IRequirement } from "@/app/models/Requirement";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Estimate = {
  id: number;
  name: string;
  requirement: any | null;
};

export type State = {
  estimates: Estimate[];
  requirementId: string | null;
  requirements: any[];
  requirement: IRequirement | null;
};

export type Actions = {
  getRequirementByName: (filter: string) => void;
  getRequirement: (filter: string) => void;
  addEstimate: (estimate: Estimate) => void;
  updateEstimateRequirement: (estimates: Estimate[]) => void;
  updateRequirements: (requirements: any[]) => void;
  reset: () => void;
};

export const INITIAL_DATA: Estimate = {
  id: 0,
  name: "Main estimation",
  // requirement: new Object(),
  requirement: [],
};

export const useRequirementStore = create<State & Actions>()(
  persist(
    (set) => ({
      estimates: [INITIAL_DATA],
      requirementId: null,
      requirements: [],
      requirement: null,
      getRequirementByName: async (filter: string) => {
        const response = await fetch(`/api/requirement/by-name/${filter}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        let requirementResponse = await response.json();
        set({
          requirementId: requirementResponse._id,
        });
      },
      getRequirement: async (filter: string) => {
        const response = await fetch(`/api/requirement/${filter}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        let requirementResponse = await response.json();
        set({
          requirement: requirementResponse,
        });
      },
      addEstimate: (estimate) =>
        set((state) => ({
          estimates: [...state.estimates, estimate],
        })),
      updateEstimateRequirement: (estimates: Estimate[]) =>
        set(() => ({
          estimates: estimates,
        })),
      updateRequirements: (requirements: any[]) =>
        set(() => ({
          requirements: requirements,
        })),
      reset: () =>
        set(() => ({
          estimates: [INITIAL_DATA],
          requirementId: null,
        })),
    }),
    { name: "requirement", skipHydration: true }
  )
);
