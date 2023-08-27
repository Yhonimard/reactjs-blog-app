import { memo } from "react";
import AuthInput from "./Input";
import { Link } from "react-router-dom";
const AuthForm = ({ isLoginUrl, register, handleSubmit, onSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        name="username"
        register={register}
        placeholder="username"
        error={error?.username}
      />
      <AuthInput
        name="password"
        type="password"
        register={register}
        placeholder="password"
        error={error.password}
      />
      {!isLoginUrl && (
        <AuthInput
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          register={register}
          error={error.confirmPassword}
        />
      )}

      <button
        className="py-3 px-4 bg-neutral-800 w-full hover:opacity-90 active:opacity-75 mt-5 text-base  transition-all rounded-sm"
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

export default AuthForm;
// export default AuthForm;
