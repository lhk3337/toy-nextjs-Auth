import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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

  const onSubmit: SubmitHandler<IUser> = (data) => {
    fetch("/api/user/enter", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
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
