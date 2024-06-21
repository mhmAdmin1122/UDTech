import Link from "next/link";
import React from "react";
import Layout from "../Components/L/Layout";
import Head from "next/head";
import Login from "../Components/L/Login";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login Now</title>
      </Head>
      <Layout>
        <div className="px-44 py-14 log-in-container">
          <h1 className="text-4xl font-bold text-center">Login Now</h1>
          <div className="flex flex-wrap items-center gap-2 w-full justify-center my-3">
            <Link
              href={"/register"}
              className="text-xl font-medium py-2 px-2 text-blue-500 transition-all duration-700 hover:text-red-500 hover:!underline cursor-pointer"
            >
              Need an account?
            </Link>
            <Link
              href={"/register"}
              className="btn-custom font-semibold transition-all duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-400"
            >
              Register Now
            </Link>
          </div>
          <Login />
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
