import { configureStore } from "@reduxjs/toolkit";
import setUser from "./features/authSlice";
import { authApi } from "./services/auth";
import {moviesApi} from "./services/moviesApi"

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    setUser: setUser,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
