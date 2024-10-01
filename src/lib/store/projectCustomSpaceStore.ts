
import { ProjectAreaDefination } from "@/components/estimation/refinement/form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  projectCustomSpaces: ProjectAreaDefination[];
};

export type Actions = {
  getProjectCustomSpaces: (id: string) => void;
  reset: () => void;
};

export const useProjectCustomSpaceStore = create<State & Actions>()(
  persist(
    (set) => ({
      projectCustomSpaces: [],
      getProjectCustomSpaces: async (id: string) => {
        const response = await fetch(
          `/api/project/custom-space/by-project/${id}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        let projectCustomSpaceResponse = await response.json();
        set({
          projectCustomSpaces: projectCustomSpaceResponse,
        });
      },
      reset: () =>
        set(() => ({
          projectCustomSpaces: [],
        })),
    }),
    { name: "project-customspace", skipHydration: true }
  )
);
