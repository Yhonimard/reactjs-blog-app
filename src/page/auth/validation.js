import * as yup from "yup";

const authFormValidation = (isUrlLogin) => {
  const loginSchema = yup.object().shape({
    username: yup.string().min(3).required("username is required"),
    password: yup
      .string()
      .min(3)
      .required("password is required"),
  });

  const signupShema = yup.object().shape({
    username: yup.string().min(3).required("username is required"),
    password: yup
      .string()
      .min(3)
      .required("password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "should be same as password")
      .required("confirm password is required"),
  });

  if (isUrlLogin) return loginSchema;

  if (!isUrlLogin) return signupShema;

  return null;
};

export default authFormValidation;
