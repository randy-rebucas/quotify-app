
import { ProjectAreaDefination } from "@/components/estimation/refinement/form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  projectAmenities: ProjectAreaDefination[];
};

export type Actions = {
  getProjectAmenities: (id: string) => void;
  reset: () => void;
};

export const useProjectAmenityStore = create<State & Actions>()(
  persist(
    (set) => ({
      projectAmenities: [],
      getProjectAmenities: async (id: string) => {
        const response = await fetch(
          `/api/project/amenities/by-project/${id}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        let projectAmenitiesResponse = await response.json();
        set({
          projectAmenities: projectAmenitiesResponse,
        });
      },
      reset: () =>
        set(() => ({
          projectAmenities: [],
        })),
    }),
    { name: "project-amenity", skipHydration: true }
  )
);
