import { yupResolver } from "@hookform/resolvers/yup";
import { AccountCircle, Key, Password } from "@mui/icons-material";
import { Box, Button, FormControl, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import auth from "../../redux/auth";
import AuthInput from "./authInput";
import authSchema from "./authSchema";
import { AuthFormWrapper, AuthWrapper } from "./styled";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const dispatch = useDispatch();

  const schema = authSchema(isLogin);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const authState = useSelector((state) => state.auth);

  console.log(authState);

  const onSubmit = (data) => {
    if (!isLogin) {
      dispatch(auth.request.register(data));
      authState.isSuccess && navigate("?mode=login");
    }
    if (isLogin) {
      dispatch(auth.request.login(data));
      authState.data.isLogin && navigate("/");
    }
  };

  return (
    <Box bgcolor="background.default">
      <AuthWrapper maxWidth="xs">
        <AuthFormWrapper>
          <Typography textAlign={`center`} variant="h5">
            {isLogin ? "login" : "signup"}
          </Typography>
          <FormControl
            onSubmit={handleSubmit(onSubmit)}
            sx={{ width: "100%" }}
            component={`form`}
          >
            <AuthInput
              label={`username`}
              register={register}
              name={`username`}
              error={errors.username?.message}
            >
              <AccountCircle />
            </AuthInput>
            <AuthInput
              label={`password`}
              type={`password`}
              register={register}
              name={`password`}
              error={errors.password?.message}
            >
              <Key />
            </AuthInput>
            {!isLogin && (
              <AuthInput
                label={`confirm password`}
                type={`password`}
                register={register}
                name={`confirmPassword`}
                error={errors.confirmPassword?.message}
              >
                <Password />
              </AuthInput>
            )}
            <Button
              color="inherit"
              sx={{ mt: "1em", mb: "0.5em" }}
              variant="contained"
              type="submit"
            >
              {isLogin ? "submit" : "register"}
            </Button>
            {isLogin && (
              <Typography>
                dont have an account? <Link to={`?mode=signup`}>singup</Link>
              </Typography>
            )}
            {!isLogin && (
              <Typography>
                have an account? <Link to={`?mode=login`}>login</Link>
              </Typography>
            )}
          </FormControl>
        </AuthFormWrapper>
      </AuthWrapper>
    </Box>
  );
};

export default Auth;
