import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import auth from "../../redux/auth";
import AuthForm from "./Form";
import authFormValidation from "./validation";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const isLoginUrl = searchParams.get("mode") == "login";

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const schema = authFormValidation(isLoginUrl);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (isLoginUrl) {
      dispatch(auth.request.login(data)).then((data) => {
        if (!data.error) navigate("/");
      });
    }

    if (!isLoginUrl) {
      dispatch(auth.request.register(data));
    }
  };

  return (
    <div className="w-screen h-screen bg-zinc-950">
      <div className="container mx-auto flex justify-center items-center w-screen h-screen  max-w-md px-4">
        <div className="bg-neutral-900 p-10 w-full border border-zinc-800 rounded">
          <h5 className="text-center text-3xl mb-1">
            {isLoginUrl ? "Login" : "Signup"}
          </h5>
          <AuthForm
            isLoginUrl={isLoginUrl}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            error={errors}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
