import React, { useEffect, useMemo, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import CurrencyLists from "./CurrencyLists"
import {
  useGetConvertQuery,
  useGetFluctuationQuery,
  useGetSymbolsQuery,
} from "../redux/api/exchangeApi";
import { useDispatch, useSelector } from "react-redux";
import { addFromValue, addFullName, addToFullName, addToValue } from "../redux/features/exchangeSlice";
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

export default function Converter() {
  const dispatch = useDispatch();
  const [to, setTo] = useState("Myanma Kyat");
  const [from, setFrom] = useState("US Dollor");
  const [fromInputValue, setFromInputValue] = useState("");
  const [toInputValue, setToInputValue] = useState("");
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState([]);
  const exchangeSlice = useSelector(state => state.exchangeSlice)
  const fromValue = exchangeSlice?.fromValue
  const toValue = exchangeSlice?.toValue
  // const amount = exchangeSlice?.amount

  const { data: convert, isLoading } = useGetConvertQuery({
    to,
    from,
    amount,
  });

  const { data } = useGetSymbolsQuery();
  const symbols = data?.symbols;

  const {data: fluctuation} = useGetFluctuationQuery({start_date: "2023-07-01", end_date: "2023-08-01"})

  useMemo(() => {
    for (const property in symbols) {
      setCurrency((prev) => [
        ...prev,
        { label: `${property} ${symbols[property]}` },
      ]);
    }
  }, [symbols]);

  return (
    <main className="">
      <h1 className="text-center mb-5">
        Convert {exchangeSlice?.fullName} to {exchangeSlice?.toFullName}
      </h1>
      <section className="w-full h-full shadow-lg flex gap-10 justify-center rounded-lg p-5 bg-white">
        <div className="flex flex-col gap-5">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={currency}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="From" />}
            onChange={(event, newValue) => {
              setFrom(newValue.label.slice(0, 3));
              dispatch(addFromValue({from: newValue.label.slice(0, 3)}))
              dispatch(addFullName({fullName: newValue.label.substring(3, newValue.label.length)}))
            }}
            onInputChange={(event, newInputValue) => {
              setFromInputValue(newInputValue);
            }}
          />
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: 400 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              variant="filled"
              // value={1}
              inputProps={{style: {fontSize: 20, fontWeight: 600}}}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
          </Box>
        </div>
        <div className="flex flex-col gap-5">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={currency}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="To" />}
            onChange={(event, newValue) => {
              setTo(newValue.label.slice(0, 3));
              dispatch(addToValue({to: newValue.label.slice(0, 3)}))
              dispatch(addToFullName({toFullName: newValue.label.substring(3, newValue.label.length)}))
            }}
            onInputChange={(event, newInputValue) => {
              setToInputValue(newInputValue);
            }}
          />
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: 400 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField 
              inputProps={{style: {fontSize: 20, fontWeight: 600}}}
              id="filled-basic" value={amount ? convert?.result.toFixed(2) : ""} variant="filled"/>

          </Box>
        </div>
      </section>
      <CurrencyLists/>
    </main>
  );
}
