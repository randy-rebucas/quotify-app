import { IEstimate } from "@/app/models/Estimate";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  estimates: any[];
  estimateRequirements: any[];
  estimateRefinements: any[];
};

export type Actions = {
  getProjectEstimates: (filter: string) => void;
  getProjectEstimateRequirements: (filter: string) => void;
  reset: () => void;
};

export const useEstimateSummaryStore = create<State & Actions>()(
  persist(
    (set) => ({
      estimates: [],
      estimateRequirements: [],
      estimateRefinements: [],
      getProjectEstimates: async (filter: string) => {
        const response = await fetch(`/api/estimate/by-property/${filter}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        let estimatePropertyResponse = await response.json();

        let grouped = estimatePropertyResponse.reduce((result: any, currentValue: any) => {
            (result[currentValue["name"]] =
                result[currentValue["name"]] || []).push(currentValue);
            return result;
        }, {});

        set({
          estimates: grouped,
        });
      },
      getProjectEstimateRequirements: async (filter: string) => {
        const response = await fetch(`/api/requirement/by-estimate/${filter}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        let estimatePropertyRequirementResponse = await response.json();

        set({
          estimateRequirements: estimatePropertyRequirementResponse,
        });
      },
      reset: () =>
        set(() => ({
          estimates: [],
          estimateRequirements: []
        })),
    }),
    { name: "estimate-summary", skipHydration: true }
  )
);
