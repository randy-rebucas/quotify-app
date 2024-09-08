import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  isEmpty: boolean;
  projects: any[];
};

export type Actions = {
  setIsImpty: (isEmpty: State["isEmpty"]) => void;
  setProjects: (projects: State["projects"]) => void;
  reset: () => void;
};

export const useProjectStore = create<State & Actions>()(
  persist(
    (set) => ({
      isEmpty: false,
      projects: [],
      setIsImpty: (isEmpty) => set(() => ({ isEmpty: isEmpty })),
      setProjects: (projects: any[]) => set(() => ({ projects: projects })),
      reset: () =>
        set(() => ({
          isEmpty: true,
        })),
    }),
    { name: "project", skipHydration: true }
  )
);
