import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IUser {
  email: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Email:</span>
          <input type="email" {...register("email", { required: "Please write down your email." })} />
          {errors.email?.message}
        </div>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
