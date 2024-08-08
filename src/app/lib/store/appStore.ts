import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  isClose: boolean;
  isLoading: boolean;
};

export type Actions = {
  updateIsClose: (isClose: State["isClose"]) => void;
  updateIsLoading: (isLoading: State["isLoading"]) => void;
  reset: () => void;
};

export const useAppStore = create<State & Actions>()(
  persist(
    (set) => ({
      isClose: true,
      isLoading: false,
      updateIsClose: (isClose) => set(() => ({ isClose: isClose })),
      updateIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
      reset: () =>
        set(() => ({
          isClose: true,
        })),
    }),
    { name: "app", skipHydration: true }
  )
);
