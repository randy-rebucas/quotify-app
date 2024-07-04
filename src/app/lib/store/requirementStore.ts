import { IRequirementLevel } from "@/app/models/RequirementLevel";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Estimate = {
  id: number;
  name: string;
  requirement: any | null;
};

export type State = {
  estimates: Estimate[];
  requirementLevels: IRequirementLevel[];
  requirementLevelUnitRate: number;
  requirementId: string | null;
};

export type Actions = {
  getRequirementsByName: (filter: string) => void;
  getRequirementLevelByRequirement: (id: string) => void;
  addEstimate: (estimate: Estimate) => void;
  updateRequirementLevelUnitRate: (
    requirementLevelUnitRate: State["requirementLevelUnitRate"]
  ) => void;
  updateEstimateRequirement: (estimates: Estimate[]) => void;
  reset: () => void;
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
      requirementLevels: [],
      requirementLevelUnitRate: 0,
      requirementId: null,
      getRequirementsByName: async (filter: string) => {
        const response = await fetch(`/api/requirement/${filter}`, {
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
      getRequirementLevelByRequirement: async (id: string) => {
        const response = await fetch(
          `/api/requirement-level/by-requirement/${id}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        let requirementLevelResponse = await response.json();
        set({
          requirementLevels: requirementLevelResponse,
        });
      },
      addEstimate: (estimate) =>
        set((state) => ({
          estimates: [...state.estimates, estimate],
        })),
      updateRequirementLevelUnitRate: (requirementLevelUnitRate) =>
        set(() => ({ requirementLevelUnitRate: requirementLevelUnitRate })),
      updateEstimateRequirement: (estimates: Estimate[]) =>
        set(() => ({
          estimates: estimates,
        })),
      reset: () =>
        set(() => ({
          estimates: [INITIAL_DATA],
          requirementLevels: [],
          requirementId: null,
        })),
    }),
    { name: "requirement", skipHydration: true }
  )
);
