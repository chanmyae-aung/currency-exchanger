import {
  Card,
  CardContent,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell from '@mui/material/TableCell';
import React from "react";

export default function CurrencyLists() {
  
    const rows = [
        
      ];
  return (
    <div className="w-full rounded-lg overflow-hidden">
        <div className="flex bg-blue-200 p-5 justify-center">
          <h2 className="text-xl font-bold">Convert US Dollor to Myanmar Kyats</h2>
        </div>
          <TableContainer sx={{paddingX: "50px"}} variant="none" component={Paper} >
            <Table  aria-label="customized table">
              <TableHead >
                <TableRow >
                  <TableCell sx={{fontWeight: 600, fontSize: "1.2rem"}}>USD</TableCell>
                  <TableCell sx={{fontWeight: 600, fontSize: "1.2rem"}} align="right">MMK</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map((row) => ( */}
                  <TableRow >
                    <TableCell sx={{fontSize: "1.1rem"}} component="th" scope="row">
                      1 USD
                    </TableCell>
                    <TableCell sx={{fontSize: "1.1rem"}} align="right">
                    2100 MMK
                    </TableCell>
                  </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
    </div>
  );
}
