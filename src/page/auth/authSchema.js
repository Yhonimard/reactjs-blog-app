import * as yup from "yup";

const authSchema = (isLogin) => {
  const signupSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "username at least 3 character")
      .required("username is required"),
    password: yup
      .string()
      .min(3, "password at least 3 character")
      .required("password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "it should be same with the password")
      .required("you should confirm the password"),
  });
  const loginSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "username at least 3 character")
      .required("username is required"),
    password: yup
      .string()
      .min(3, "password at least 3 character")
      .required("password is required"),
  });

  if (isLogin) return loginSchema;
  if (!isLogin) return signupSchema;
  return null;
};

export default authSchema;
