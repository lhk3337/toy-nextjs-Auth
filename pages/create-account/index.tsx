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
    console.log(data);
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
          <input type="text" {...register("name", { required: true })} />
        </div>
        <div>
          <span>Email:</span>
          <input type="email" {...register("email")} />
        </div>
        <input type="submit" value="Create Account" />
      </form>
    </>
  );
};

export default Create;
