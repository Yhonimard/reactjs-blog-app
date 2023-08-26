import { memo } from "react";
import AuthInput from "./Input";
import { Link } from "react-router-dom";
const AuthForm = ({ isLoginUrl, register, handleSubmit, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthInput name="username" register={register} />
      <AuthInput name="password" type="password" register={register} />
      <button
        className="py-3 px-4 bg-neutral-800 w-full hover:opacity-90 active:opacity-75 my-2 text-base  transition-all rounded-sm"
        type="submit"
      >
        {isLoginUrl ? "Login" : "Signup"}
      </button>
      <p>
        {isLoginUrl ? "dont have an account?" : "have an account?"}{" "}
        <Link
          className="btn-link"
          to={isLoginUrl ? "?mode=signup" : "?mode=login"}
        >
          {isLoginUrl ? "Signup" : "Login"}
        </Link>
      </p>
    </form>
  );
};

export default memo(AuthForm);
// export default AuthForm;
