// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.apilayer.com/fixer" }),
  tagTypes: ["exchangeApi"],
  endpoints: (builder) => ({
    getConvert: builder.query({
      query: ({ to, from, amount }) => ({
        url: `/convert?to=${to}&from=${from}&amount=${amount}`,
        headers: { apikey: "wCe2ol91D3saaDFiZdFAVcmixquruDYQ" },
      }),
      providesTags: ["exchangeApi"],
    }),
    getSymbols: builder.query({
      query: () => ({
        url: `/symbols`,
        headers: { apikey: "wCe2ol91D3saaDFiZdFAVcmixquruDYQ" },
      }),
      providesTags: ["exchangeApi"],
    }),
    getFluctuation: builder.query({
      query: ({start_date, end_date}) => ({
        url: `/fluctuation?start_date=${start_date}&end_date=${end_date}`,
        headers: { apikey: "wCe2ol91D3saaDFiZdFAVcmixquruDYQ" },
      }),
      providesTags: ['exchangeApi']
    }),
    getLatest: builder.query({
      query: ({symbols, base}) => ({
        url: `/latest?symbols=${symbols}&base=${base}`,
        headers: { apikey: "wCe2ol91D3saaDFiZdFAVcmixquruDYQ" },
      }),
      providesTags: ['exchangeApi']
    }),
    getTimeSeries: builder.query({
      query: ({start_date, end_date}) => ({
        url: `/timeseries?start_date=${start_date}&end_date=${end_date}`,
        headers: { apikey: "wCe2ol91D3saaDFiZdFAVcmixquruDYQ" },
      }),
      providesTags: ['exchangeApi']
    })
  }),
});

export const { useGetConvertQuery, useGetSymbolsQuery, useGetFluctuationQuery, useGetLatestQuery, useGetTimeSeriesQuery } = exchangeApi;
