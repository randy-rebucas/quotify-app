import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../lib/store";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXTAUTH_URL
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  return result;
};

// list all tag types here for for auto refresh the data
const tags = ["Projects", "Profile", "Settings"];

export const quotifyApi = createApi({
  reducerPath: "quotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: tags,
  endpoints: () => ({}),
});
