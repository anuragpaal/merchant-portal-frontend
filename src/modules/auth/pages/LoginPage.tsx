import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../shared/hooks/useAppDispatch";

import AppInput from "../../../shared/components/Input/Input";
import AppButton from "../../../shared/components/Button/Button";

import { loginSchema } from "../validations/login.schema";
import type { LoginRequest } from "../types/login.types";
import { loginRequest } from "../store/authSlice";


const LoginPage = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginRequest) => {
    dispatch(loginRequest(data));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">
        Login
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div>
          <AppInput
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <AppInput
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        <AppButton type="submit">
          Login
        </AppButton>
      </form>
    </div>
  );
};

export default LoginPage;