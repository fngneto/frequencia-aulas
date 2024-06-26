"use client";

import { Box, Typography, Container, AppBar, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/system"; // Add import statement for ThemeProvider
import "@fontsource/roboto/700.css";
import CalendarioDate from "../../components/Calendario/Calendario";
import AulasTable from "../../components/MostradorAulasDia/MostradorAulasDia";
import * as React from 'react';
import theme from '../../theme';

const aulasData = [
  { nome: 'Aula 1', horario: '08:00 - 09:30' },
  { nome: 'Aula 2', horario: '10:00 - 11:30' },
  { nome: 'Aula 3', horario: '13:00 - 14:30' },
];

export default function Calendario() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap the component with ThemeProvider */}
      <AppBar position="static" 
      sx={{ backgroundColor:  'primary',
        display: 'flex',
        alignItems: 'center',
        height: '128px',
        justifyContent: 'center',
       }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Calendário
          </Typography>
        </Toolbar>
      </AppBar>
             
        <Box>
          <CalendarioDate />
        </Box>

        <Box>
          <AulasTable aulasData={aulasData} />
        </Box>
      </ThemeProvider>
    );
}