import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  isClose: boolean;
  isLoading: boolean;
  hasMore: boolean;
  toggleCustonSpaceOption: boolean;
  projectId: string | null;
};

export type Actions = {
  setIsClose: (isClose: State["isClose"]) => void;
  setIsLoading: (isLoading: State["isLoading"]) => void;
  setHasMore: (hasMore: State["hasMore"]) => void;
  setProjectId: (projectId: State["projectId"]) => void;
  setToggleCustonSpaceOption: (
    toggleCustonSpaceOption: State["toggleCustonSpaceOption"]
  ) => void;
  reset: () => void;
};

export const useAppStore = create<State & Actions>()(
  persist(
    (set) => ({
      isClose: true,
      isLoading: false,
      hasMore: false,
      projectId: null,
      toggleCustonSpaceOption: false,
      setIsClose: (isClose) => set(() => ({ isClose: isClose })),
      setIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
      setHasMore: (hasMore) => set(() => ({ hasMore: hasMore })),
      setToggleCustonSpaceOption: (toggleCustonSpaceOption) =>
        set(() => ({ toggleCustonSpaceOption: toggleCustonSpaceOption })),
      setProjectId: (projectId) => set(() => ({ projectId: projectId })),
      reset: () =>
        set(() => ({
          isClose: true,
        })),
    }),
    { name: "app", skipHydration: true }
  )
);
