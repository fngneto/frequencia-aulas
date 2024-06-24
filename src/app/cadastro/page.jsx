// Import necessary components from Material-UI
'use client'

import { Box, Typography, TextField, Container, Link, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/700.css";
import * as React from 'react';
import theme from '../../theme';
import PasswordView from "@/components/PasswordView/PasswordView";


export default function Cadastro() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: '20px'
      }}>
        
        <Box sx={{display:'flex',alignItems:'center', gap:'10px'}}>
          <Typography variant="h4">Cadastro</Typography>
          <Link href="/login" sx={{ color: 'primary' }}>
            <Typography variant="body2">Login</Typography>
          </Link>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',gap: '20px'}}>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <PasswordView id="outlined-basic"/>
        </Box>
        <Box>
          <Link href="/calendario">
            <Button variant='contained' sx={{ borderRadius: 100, width: 343, backgroundColor: 'primary' }}>Cadastrar</Button> 
          </Link>
        </Box>
        <Box>
          <Link href="/recuperar-senha" sx={{ color: 'primary' }}>
            <Typography variant="body2">Esqueceu a senha?</Typography>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
