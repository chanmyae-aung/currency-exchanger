import React from "react";
import Card from "./Card";
import { useGetLatestQuery } from "../redux/api/exchangeApi";
import { useSelector } from "react-redux";

export default function CurrencyLists() {
  const { data } = useGetLatestQuery({ symbols: "USD", base: "MMK" });
  
  const exchangeSlice = useSelector((state) => state.exchangeSlice);
  const fromValue = exchangeSlice?.from;
  const toValue = exchangeSlice?.to;
  const fullName = exchangeSlice?.fullName;
  const toFullName = exchangeSlice?.toFullName;

  return (
    <main>
      <div className="flex gap-10 my-10 rounded-lg">
        <div className="w-full">
          <Card
            // reverse={true}
            fromValue={fromValue}
            fullName={toFullName}
            toValue={toValue}
            toFullName={fullName}
          />
        </div>
        <div className="hidden md:flex w-full">
          <Card
            reverse={true}
            fromValue={toValue}
            fullName={toFullName}
            toValue={fromValue}
            toFullName={fullName}
          />
        </div>
        {/* <FluctuationCard/> */}
      </div>
      {/* <RealTimeRate /> */}
    </main>
  );
}
