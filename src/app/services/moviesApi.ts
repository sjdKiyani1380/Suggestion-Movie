import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

export interface FetchMovieModal {
  name: string;
  description: string;
  creator: string;
  id: number;
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).setUser.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['posts','post'],
  endpoints: (builder) => ({
    fetchMovies: builder.query<FetchMovieModal[], void>({
      query: () => "/movies",
      providesTags:['posts']
    }),
    deleteMovie: builder.mutation({
      query: (id) => {
        return {
          url: `/movies/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags:['posts']
    }),
    addMovie: builder.mutation({
      query: (body: {
        name: string | null;
        description: string | null;
        creator: string | null;
        genre:{
          actionGenre:boolean;
          dramaGenre:boolean;
          documentaryGenre:boolean;
        };
        date:string;
      }) => {
        return {
          url: "/movies",
          method: "POST",
          body,
        };
      },
      invalidatesTags:['posts']
    }),
    editMovie: builder.mutation({
      query: (body: {
        name: string;
        description: string;
        creator: string;
        id: string;
        genre:{
          actionGenre:boolean;
          dramaGenre:boolean;
          documentaryGenre:boolean;
        };
        date:string;
      }) => {
        return {
          url: `/movies/${body.id}`,
          method: "PATCH",
          body: {
            name: body.name,
            description: body.description,
            creator: body.creator,
            genre:{
              actionGenre:body.genre.actionGenre,
              dramaGenre:body.genre.dramaGenre,
              documentaryGenre:body.genre.documentaryGenre,
            },
            date:body.date
          },
        };
      },
      invalidatesTags:['post'],
      
    }),
    fetchSingleMovie: builder.query({
      query: (id: string) => `/movies/${id}`,
      providesTags:['post']
    }),
  }),
});

export const {
  useFetchMoviesQuery,
  useDeleteMovieMutation,
  useAddMovieMutation,
  useEditMovieMutation,
  useFetchSingleMovieQuery,
} = moviesApi;
