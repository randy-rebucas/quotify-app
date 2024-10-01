import { IRequirementLevel } from "@/models/RequirementLevel";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  requirementLevels: IRequirementLevel[];
};

export type Actions = {
  getRequirementLevelByRequirement: (id: string) => void;
  reset: () => void;
};

export const useRequirementLevelStore = create<State & Actions>()(
  persist(
    (set) => ({
      requirementLevels: [],
      getRequirementLevelByRequirement: async (id: string) => {
        const response = await fetch(
          `/api/requirement-level/by-requirement/${id}`,
          {
            method: "GET",
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
      reset: () =>
        set(() => ({
          requirementLevels: [],
          requirementLevelUnitRate: 0,
        })),
    }),
    { name: "requirementLevel", skipHydration: true }
  )
);
