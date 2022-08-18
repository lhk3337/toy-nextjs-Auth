import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import useMutation from "../../lib/useMutation";
interface IUser {
  email: string;
}
interface MutationResult {
  ok: boolean;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();
  const router = useRouter();
  const [enter, { data: loginData }] = useMutation<MutationResult>("/api/login");
  const onSubmit: SubmitHandler<IUser> = (data) => {
    enter(data);
  };
  useEffect(() => {
    if (loginData?.ok) {
      router.push("/");
    }
  }, [loginData, router]);
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
