import { configureStore } from "@reduxjs/toolkit";
import { exchangeApi } from "../redux/api/exchangeApi";
import exchangeSlice from "../redux/features/exchangeSlice";

export const store = configureStore({
  reducer: {
    [exchangeApi.reducerPath]: exchangeApi.reducer,
    exchangeSlice: exchangeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exchangeApi.middleware),
});
