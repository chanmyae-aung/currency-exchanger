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

export default function RealTimeRate() {
  const [currency, setCurrency] = useState([]);
  // const { data } = useGetLatestQuery({ base: "USD", symbols: "MMK,GBP,EUR,JPY" });
  const { data } = useGetFluctuationQuery({
    start_date: "2023-07-25",
    end_date: "2023-08-25",
    base: "USD",
  });
  console.log(currency);
  const rates = data?.rates;
  useMemo(() => {
    for (const property in rates) {
      setCurrency((prev) => [...prev, `${property}`]);
    }
  }, [data]);
  return (
    <main id="live">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>USD</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Change Value</TableCell>
            <TableCell align="right">Change Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currency?.map((i) => (
          <TableRow
            // key={i}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {i}
            </TableCell>
            <TableCell align="right">{}</TableCell>
            <TableCell align="right">{""}</TableCell>
            <TableCell align="right">{""}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </main>
  );
}
