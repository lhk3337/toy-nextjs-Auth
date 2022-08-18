import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import useMutation from "../../lib/useMutation";
interface IUser {
  name: string;
  email: string;
}

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const router = useRouter();
  const [enter] = useMutation("/api/create");

  const onSubmit: SubmitHandler<IUser> = (data) => {
    enter(data);
    alert("Account created! Please log in!");
    router.push("/log-in");
  };

  const onInValid = () => {
    console.log("Invalid");
  };

  return (
    <>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit, onInValid)}>
        <div>
          <span>Name:</span>
          <input type="text" {...register("name", { required: "Please write down your name." })} />
          {errors.name?.message}
        </div>
        <div>
          <span>Email:</span>
          <input type="email" {...register("email", { required: "Please write down your email." })} />
          {errors.email?.message}
        </div>
        <input type="submit" value="Create Account" />
      </form>
    </>
  );
};

export default Create;
