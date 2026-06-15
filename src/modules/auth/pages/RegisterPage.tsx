import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AppButton from "../../../shared/components/Button/Button";
import AppInput from "../../../shared/components/Input/Input";

import {
  registerSchema,
} from "../validations/register.schema";

import type { RegisterSchemaType } from "../validations/register.schema";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (
    data: RegisterSchemaType
  ) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">
        Register
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div>
          <AppInput
            placeholder="Name"
            {...register("name")}
          />

          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

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
            placeholder="Mobile"
            {...register("mobile")}
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">
              {errors.mobile.message}
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

        <div>
          <AppInput
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <AppButton
          type="submit"
          className="w-full"
        >
          Register
        </AppButton>
      </form>
    </div>
  );
};

export default RegisterPage;