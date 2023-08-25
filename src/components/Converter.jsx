import React, { useEffect, useMemo, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import CurrencyLists from "./CurrencyLists";
import {
  useGetConvertQuery,
  useGetFluctuationQuery,
  useGetSymbolsQuery,
  useGetTimeSeriesQuery,
} from "../redux/api/exchangeApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addFromValue,
  addFullName,
  addToFullName,
  addToValue,
} from "../redux/features/exchangeSlice";
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
  const exchangeSlice = useSelector((state) => state.exchangeSlice);
  const fromValue = exchangeSlice?.fromValue;
  const toValue = exchangeSlice?.toValue;
  // const amount = exchangeSlice?.amount

  const { data: convert } = useGetConvertQuery({
    to: "MMK",
    from,
    amount,
  });

  const { data } = useGetSymbolsQuery();
  const symbols = data?.symbols;


  useMemo(() => {
    for (const property in symbols) {
      setCurrency((prev) => [
        ...prev,
        { label: `${property} ${symbols[property]}` },
      ]);
    }
  }, [symbols]);


  return (
    <main id="home" className="">
     <div className="text-primary text-center text-lg my-5">
     <h1 className="text-[3rem]">Fx Portal</h1>
     <p className="font-semibold px-40 my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore magni veniam officiis. Laboriosam quasi atque labore, vel voluptate cupiditate quisquam.</p>
     </div>
      <section className="w-full h-full shadow-lg flex flex-col items-center gap-10 rounded-lg p-5 bg-white">
      <h1 className="text-center mb-5 text-primary">
        Convert {exchangeSlice?.fullName} to {exchangeSlice?.toFullName}
      </h1>
        <div className="flex gap-10 justify-center">
        <div className="flex flex-col gap-5">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={currency}
            sx={{ width: 500}}
            renderInput={(params) => <TextField  {...params} label="From" />}
            onChange={(event, newValue) => {
              setFrom(newValue.label.slice(0, 3));
              dispatch(addFromValue({ from: newValue.label.slice(0, 3) }));
              dispatch(
                addFullName({
                  fullName: newValue.label.substring(3, newValue.label.length),
                })
              );
            }}
            onInputChange={(event, newInputValue) => {
              setFromInputValue(newInputValue);
            }}
          />
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: 500 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              variant="filled"
              label={"Amount"}
              inputProps={{ style: { fontSize: 20, fontWeight: 600, color: ""} }}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
          </Box>
        </div>
        <div className="flex flex-col gap-5">
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={currency}
            getOptionDisabled
            value={`MMK ${exchangeSlice?.toFullName}`}
            sx={{ width: 500 }}
            renderInput={(params) => <TextField {...params} label="To" />}
            onChange={(event, newValue) => {
              setTo(newValue.label.slice(0, 3));
              dispatch(addToValue({ to: newValue.label.slice(0, 3) }));
              dispatch(
                addToFullName({
                  toFullName: newValue.label.substring(
                    3,
                    newValue.label.length
                  ),
                })
              );
            }}
            onInputChange={(event, newInputValue) => {
              setToInputValue(newInputValue);
            }}
          /> */}
          <TextField value={`MMK ${exchangeSlice?.toFullName}`} id="outlined-basic" label="To" variant="outlined" />
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: 500 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              inputProps={{ style: { fontSize: 20, fontWeight: 600 } }}
              id="filled-basic"
              value={amount ? convert?.result : ""}
              variant="filled"
              label={"Result"}
              
            />
          </Box>
        </div>
        </div>
          <div className={`${!convert?.result && "hidden"} text-lg font-bold text-primary `}>
            <h2>
              {amount} {exchangeSlice?.fullName} = {convert?.result}{" "}
              {exchangeSlice?.toFullName}
            </h2>
          </div>
      </section>
      <CurrencyLists id="list"/>
    </main>
  );
}
