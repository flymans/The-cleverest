import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

export default function HintTable() {
  const rows = [{ name: 'foo', calories: 50 }, { name: 'bar', fat: 30 }];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="hint table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
