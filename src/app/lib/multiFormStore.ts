import { createStore } from 'zustand'
import { persist } from "zustand/middleware";
import { JSXElementConstructor, ReactElement } from "react";

export type State = {
  steps: ReactElement<any, string | JSXElementConstructor<any>>[];
  currentStepIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
};

export type Actions = {
  next: () => void;
  back: () => void;
  goTo: (index: number) => void;
};

export type MultiFormStore = State & Actions;

export const defaultInitState: State = {
  steps: [],
  currentStepIndex: 0,
  isFirstStep: true,
  isLastStep: false,
};

export const initMultiFormStore = (
formSteps: ReactElement<any, string | JSXElementConstructor<any>>[]): State => {
  return {
    steps: formSteps,
    currentStepIndex: 0,
    isFirstStep: false,
    isLastStep: false,
  };
};

export const createMultiFormStore = (initState: State = defaultInitState) => {
  return createStore<MultiFormStore>()((set) => ({
    ...initState,
    next: () =>
      set((state) => ({
        currentStepIndex:
          state.currentStepIndex >= state.steps.length - 1
            ? state.currentStepIndex
            : state.currentStepIndex + 1,
      })),
    back: () =>
      set((state) => ({
        currentStepIndex:
          state.currentStepIndex <= 0
            ? state.currentStepIndex
            : state.currentStepIndex - 1,
      })),
    goTo: (index: number) => set(() => ({ currentStepIndex: index })),
  }));
};
// export type State = {
//   currentStepIndex: number;
//   steps: ReactElement<any, string | JSXElementConstructor<any>>[];
//   isFirstStep: boolean;
//   isLastStep: boolean;
// };

// export type Actions = {
//   next: () => void;
//   back: () => void;
//   goTo: (index: number) => void;
// };

// export const initMultiStepStore = (
//   formSteps: ReactElement<any, string | JSXElementConstructor<any>>[]
// ): State => {
//   return {
//     steps: formSteps,
//     currentStepIndex: 0,
//     isFirstStep: false,
//     isLastStep: false,
//   };
// };

// export const useMultiStepStore = create<State & Actions>()(
//   persist(
//     (set) => ({
//       currentStepIndex: 0,
//       steps: [],
//       isFirstStep: true,
//       isLastStep: false,
//       next: () =>
//         set((state) => ({
//           currentStepIndex:
//             state.currentStepIndex >= state.steps.length - 1
//               ? state.currentStepIndex
//               : state.currentStepIndex + 1,
//         })),
//       back: () =>
//         set((state) => ({
//           currentStepIndex:
//             state.currentStepIndex <= 0
//               ? state.currentStepIndex
//               : state.currentStepIndex - 1,
//         })),
//       goTo: (index: number) => set(() => ({ currentStepIndex: index })),
//     }),
//     { name: "multistepform", skipHydration: true }
//   )
// );
