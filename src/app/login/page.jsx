// Import necessary components from Material-UI
'use client'

import { Box, Typography, TextField, Container, Link, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/700.css";
import * as React from 'react';
import theme from '../../theme';


export default function Login() {
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
        <Box>
          <Typography variant="h4">Login</Typography>
        </Box>
        <Box>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
        </Box>
        <Box>
          <TextField id="outlined-basic" type="password" label="Senha" variant="outlined" />
        </Box>
        <Box>
          <Link href="/calendario">
            <Button variant='contained' sx={{ borderRadius: 100, width: 343, backgroundColor: 'primary' }}> Entrar</Button> 
          </Link>
        </Box>
        <Box>
          <Link href="/cadastro" sx={{ color: 'primary' }}>
            <Typography variant="body2">Não tem uma conta?</Typography>
          </Link>
          <Link href="/recuperar-senha" sx={{ color: 'primary' }}>
            <Typography variant="body2">Esqueceu a senha?</Typography>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
