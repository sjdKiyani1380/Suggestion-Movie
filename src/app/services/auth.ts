import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/auth" }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body:{email:string,password:string}) => {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
    }),

    signUp: builder.mutation({
      query: (body:{email:string,password:string}) => {
        return {
          url: "/register",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation ,useSignUpMutation } = authApi;
