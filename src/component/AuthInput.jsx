import { InputAdornment, TextField } from "@mui/material";

const AuthInput = ({ children, label, type }) => {
  return (
    <>
      <TextField
        size="small"
        type={type || `text`}
        margin="dense"
        variant="standard"
        label={label}
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
