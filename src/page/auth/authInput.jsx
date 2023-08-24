import { InputAdornment, TextField } from "@mui/material";
import { memo } from "react";

// eslint-disable-next-line react/prop-types
const AuthInput = ({ children, label, type, register, name, error }) => {
  const isError = Boolean(error);

  return (
    <TextField
      error={isError}
      helperText={error}
      size="small"
      type={type || `text`}
      margin="dense"
      variant="standard"
      label={label}
      {...register(name)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{children}</InputAdornment>
        ),
      }}
    />
  );
};

export default memo(AuthInput);
