import * as React from 'react';
import { Table, TableContainer, TableBody, TableRow, TableCell, Paper } from '@mui/material';

export default function AulasTable({ aulasData }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="aulas table">
        <TableBody>
          {aulasData.map((aula, index) => (
            <TableRow key={index} onClick={() => IniciarChamada}>
              <TableCell component="th" scope="row">
                {aula.nome}
              </TableCell>
              <TableCell align="right">{aula.horario}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}