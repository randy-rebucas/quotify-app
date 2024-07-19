import { IProjectAmenity } from "@/app/models/ProjectAmenity";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  projectAmenities: IProjectAmenity[];
};

export type Actions = {
  getProjectAmenitiesIdByProjectId: (filter: string) => void;
  reset: () => void;
};

export const useProjectAmenityStore = create<State & Actions>()(
  persist(
    (set) => ({
      projectAmenities: [],
      getProjectAmenitiesIdByProjectId: async (filter: string) => {
        const response = await fetch(`/api/project/amenity/by-project/${filter}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        let projectAmenityResponse = await response.json();
        set({
          projectAmenities: projectAmenityResponse,
        });
      },
      reset: () =>
        set(() => ({
          projectAmenities: []
        })),
    }),
    { name: "project-amenity", skipHydration: true }
  )
);
