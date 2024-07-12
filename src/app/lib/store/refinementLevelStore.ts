import { IRefinementLevel } from "@/app/models/RefinementLevel";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  refinementLevels: IRefinementLevel[];
  refinementLevelUnitRate: number;
};

export type Actions = {
  getRefinementLevelByRefinement: (id: string) => void;
  updateRefinementLevelUnitRate: (
    refinementLevelUnitRate: State["refinementLevelUnitRate"]
  ) => void;
  reset: () => void;
};

export const useRefinementLevelStore = create<State & Actions>()(
  persist(
    (set) => ({
      refinementLevels: [],
      refinementLevelUnitRate: 0,
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
      updateRefinementLevelUnitRate: (refinementLevelUnitRate) =>
        set(() => ({ refinementLevelUnitRate: refinementLevelUnitRate })),
      reset: () =>
        set(() => ({
          refinementLevels: [],
          refinementLevelUnitRate: 0,
        })),
    }),
    { name: "refinementLevel", skipHydration: true }
  )
);
