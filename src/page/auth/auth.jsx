import { AccountCircle } from "@mui/icons-material";
import { Button, FormControl, Typography } from "@mui/material";
import AuthInput from "../../component/AuthInput";
import { AuthFormWrapper, AuthWrapper } from "./styled";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <AuthWrapper maxWidth="xs">
      <AuthFormWrapper>
        <Typography textAlign={`center`} variant="h5">
          Login
        </Typography>
        <FormControl sx={{ width: "100%" }}>
          <AuthInput label={`username`}>
            <AccountCircle />
          </AuthInput>
          <AuthInput label={`password`} type={`password`}>
            <AccountCircle />
          </AuthInput>
          <Button color="inherit" sx={{ mt: "1em", mb: "0.5em" }} variant="contained">
            Submit
          </Button>
          <Typography variant="subtitle2">
            dont have an acoount? <Link>signup</Link>
          </Typography>
        </FormControl>
      </AuthFormWrapper>
    </AuthWrapper>
  );
};

export default Auth;
