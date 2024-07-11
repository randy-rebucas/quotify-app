import { IRequirementLevel } from "@/app/models/RequirementLevel";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  requirementLevels: IRequirementLevel[];
  requirementLevelUnitRate: number;
};

export type Actions = {
  getRequirementLevelByRequirement: (id: string) => void;
  updateRequirementLevelUnitRate: (
    requirementLevelUnitRate: State["requirementLevelUnitRate"]
  ) => void;
  reset: () => void;
};


export const useRequirementLevelStore = create<State & Actions>()(
  persist(
    (set) => ({
      requirementLevels: [],
      requirementLevelUnitRate: 0,
      getRequirementLevelByRequirement: async (id: string | null) => {
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
      updateRequirementLevelUnitRate: (requirementLevelUnitRate) =>
        set(() => ({ requirementLevelUnitRate: requirementLevelUnitRate })),
      reset: () =>
        set(() => ({
          requirementLevels: [],
          requirementLevelUnitRate: 0,
        })),
    }),
    { name: "requirementLevel", skipHydration: true }
  )
);
