import { InputAdornment, TextField } from "@mui/material";

// eslint-disable-next-line react/prop-types
const AuthInput = ({ children, label, type, register, name }) => {
  return (
    <>
      <TextField
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
    </>
  );
};

export default AuthInput;
