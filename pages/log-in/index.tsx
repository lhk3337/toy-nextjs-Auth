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
  const onInvalid = () => {
    alert("이메일을 입력하세요");
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div>
          <span>Email:</span>
          <input type="email" {...register("email", { required: true })} />
        </div>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
