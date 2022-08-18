import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

const Home = () => {
  const router = useRouter();
  const { data, error } = useSWR("/api/user");
  useEffect(() => {
    if (error) {
      router.replace("/create-account");
    }
  }, [router, error]);

  return (
    <div>
      <h1>Welcome to {data?.name}!!</h1>
      <p>Your email is: {data?.email}</p>
    </div>
  );
};
export default Home;
