import { quotifyApi } from "@/app/api/quotifyApi";

export const usersSlice = quotifyApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (payload) => ({
        url: "/api/v1/user/register",
        method: "POST",
        body: payload,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useRegisterMutation } = usersSlice;
