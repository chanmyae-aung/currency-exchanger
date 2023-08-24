import React, { useEffect, useMemo, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import {
  useGetConvertQuery,
  useGetSymbolsQuery,
} from "../redux/api/exchangeApi";
import { useDispatch, useSelector } from "react-redux";
import { addFromValue } from "../redux/features/exchangeSlice";
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

export default function Converter() {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [fromInputValue, setFromInputValue] = useState("");
  const [toInputValue, setToInputValue] = useState("");
  const [amount, setAmount] = useState(1);
  console.log(from, to);
  const [currency, setCurrency] = useState([]);
  // console.log(from, fromInputValue)

  const { data: convert } = useGetConvertQuery({
    to,
    from,
    amount,
  });
  console.log(convert);

  const { data } = useGetSymbolsQuery();
  const symbols = data?.symbols;
  console.log(symbols);

  useMemo(() => {
    for (const property in symbols) {
      console.log(`${property} ${symbols[property]}`);
      setCurrency((prev) => [
        ...prev,
        { label: `${property} ${symbols[property]}` },
      ]);
    }
  }, [symbols]);
  console.log(currency);

  return (
    <main className="">
      <h1 className="text-center mb-5">
        {amount} {from} to {to} - Convert {from} to {to}
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
              value={1}
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
            <TextField id="filled-basic" value={convert?.result} variant="filled" />
          </Box>
        </div>
      </section>
    </main>
  );
}
