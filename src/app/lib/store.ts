// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./features/auth/authSlice";
// import { quotifyApi } from "../api/quotifyApi";

// export const makeStore = configureStore({
//   reducer: {
//     auth: authReducer,
//     [quotifyApi.reducerPath]: quotifyApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(quotifyApi.middleware),
// });

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>;

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof makeStore.getState>;

// export type AppDispatch = typeof makeStore.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import { quotifyApi } from "../api/quotifyApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import projectReducer from "./slice/projectSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      project: projectReducer,
      [quotifyApi.reducerPath]: quotifyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(quotifyApi.middleware),
  });
};
setupListeners(makeStore().dispatch);
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
