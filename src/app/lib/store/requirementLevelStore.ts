import { IRequirementLevel } from "@/app/models/RequirementLevel";
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
      requirementLevel: {
        tabIndex: 0,
        requirementId: null,
        requirementLevelId: null,
      },
      requirementLevelUnitRate: 0,
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
      reset: () =>
        set(() => ({
          requirementLevels: [],
          requirementLevelUnitRate: 0,
        })),
    }),
    { name: "requirementLevel", skipHydration: true }
  )
);
