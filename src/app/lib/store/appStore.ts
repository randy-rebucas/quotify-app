import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  isClose: boolean;
};

export type Actions = {
  updateIsClose: (isClose: State["isClose"]) => void;
  reset: () => void;
};

export const useAppStore = create<State & Actions>()(
  persist(
    (set) => ({
      isClose: true,
      updateIsClose: (isClose) => set(() => ({ isClose: isClose })),
      reset: () =>
        set(() => ({
          isClose: true,
        })),
    }),
    { name: "app", skipHydration: true }
  )
);
