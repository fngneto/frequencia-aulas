"use client";

import { Box, Typography, Container } from "@mui/material";
import "@fontsource/roboto/700.css";
import CalendarioDate from "../../components/Calendario/Calendario";

export default function Calendario() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <Box>
        <Typography variant="h4">Calendário</Typography>
      </Box>
      <Box>
        <CalendarioDate />
      </Box>
    </Container>
  );
}
