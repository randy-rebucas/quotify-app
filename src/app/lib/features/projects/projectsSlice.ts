import { quotifyApi } from "@/app/api/quotifyApi";
import { IProject } from "@/app/models/Project";

export const quotifySlice = quotifyApi.injectEndpoints({
  endpoints: (build) => ({
    getProperties: build.query<IProject[], void>({
      query: () => `/api/projects`
    }),
    getPropertiesByUser: build.query<IProject[], any>({
      query: (id: any) => `/api/project/by-user/${id}`
    }),
  }),
  overrideExisting: true
});

export const { useGetPropertiesQuery, useGetPropertiesByUserQuery } = quotifySlice;
