import React,{useState} from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function PasswordView() {
    const [showPassword, setShowPassword] = useState(false)

    function clickEye(){setShowPassword(!showPassword)}

    return (
        <TextField
          type={showPassword ? 'text' : 'password'}
          label="Password"
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  color= 'primary'
                  onClick={clickEye}
                >
                  {showPassword ? <Visibility />:<VisibilityOff /> }
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      );
}