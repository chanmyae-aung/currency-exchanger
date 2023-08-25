import React, { useState, useMemo } from "react";
// import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  useGetFluctuationQuery,
  useGetLatestQuery,
} from "../redux/api/exchangeApi";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

export default function RealTimeRate() {
  const [currency, setCurrency] = useState([]);
  const [change, setChange] = useState([]);
  // const { data } = useGetLatestQuery({ base: "USD", symbols: "MMK,GBP,EUR,JPY" });
  const { data } = useGetFluctuationQuery({
    start_date: "2023-07-25",
    end_date: "2023-08-25",
    base: "USD",
  });
  // console.log(data)
  const rates = data?.rates;
  console.log(rates);
  // console.log(change);
  useMemo(() => {
    for (const currency in rates) {
      if (rates.hasOwnProperty(currency)) {
        const values = rates[currency];
        const singleObject = {
          currency: currency,
          start_rate: values.start_rate,
          end_rate: values.end_rate,
          change: values.change,
          change_pct: values.change_pct,
        };
        console.log(singleObject);
        setCurrency((prev) => [...prev, singleObject]);
      }
    }
  }, [data]);
  // console.log(currency);
  return (
    <main id="fluctuation">
      <img
        className="w-full px-32 mb-10"
        src="https://cdn.fbsbx.com/v/t59.2708-21/367434243_1745414275896019_172176976386414968_n.gif?_nc_cat=108&ccb=1-7&_nc_sid=041f46&_nc_ohc=3Vr6WHABZRcAX8ijI71&_nc_ht=cdn.fbsbx.com&oh=03_AdQtzmpF3S38RXHE2B8Iizxp2qCYvavxphYU7xf1hhBzhQ&oe=64EA763B"
        alt=""
      />
      <div className="text-center mb-5">
          <h1 className="text-3xl">Fluctuation Rates</h1>
          <p className="font-semibold py-2 text-slate-700 px-32">
            (from 2023-07-25 to 2023-08-25)
          </p>
        </div>
      <TableContainer sx={{maxHeight: 500}} component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, fontSize: 15 }}>
                1 EUR (Based)
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">
                Start Rate
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">
                End Rate
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">
                Change Value
              </TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">
                Change Percentage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ height: 500, overflow: "scroll" }}>
            {currency?.map((i, index) => (
              // console.log(i.currency)
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ fontWeight: 500, fontSize: 15 }}
                  component="th"
                  scope="row"
                >
                  {i.currency}
                </TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: 15 }} align="right">
                  {i.start_rate}
                </TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: 15 }} align="right">
                  {i.end_rate}
                </TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: 15 }} align="right">
                <div className="flex items-center justify-end">
                    <span
                      className={`${
                        i.change > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {i.change}
                    </span>
                    {i.change < 0 ? (
                      <BsCaretDownFill className={"text-red-600"} />
                    ) : (
                      <BsCaretUpFill className={"text-green-600"} />
                    )}
                    </div>
                </TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: 15 }} align="right">
                  <div className="flex items-center justify-end">
                    <span
                      className={`${
                        i.change_pct > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {i.change_pct}
                    </span>
                    {i.change_pct < 0 ? (
                      <BsCaretDownFill className={"text-red-600"} />
                    ) : (
                      <BsCaretUpFill className={"text-green-600"} />
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}