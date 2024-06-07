import React from "react";
import Layout from "../Components/L/Layout";
import Head from "next/head";
import Link from "next/link";
import Register from "../Components/R/Register";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Register Now</title>
      </Head>
      <Layout>
        <div className="px-44 py-14">
          <h1 className="text-4xl font-bold text-center">Register Now</h1>
          <div className="flex flex-wrap items-center gap-2 w-full justify-center my-3">
            <Link
              href={"/login"}
              className="text-xl font-medium py-2 px-2 text-blue-500 transition-all duration-700 hover:text-red-500 hover:!underline cursor-pointer"
            >
              Already have an account?
            </Link>
            <Link
              href={"/login"}
              className="btn-custom font-semibold transition-all duration-700 ease-in-out hover:shadow-lg hover:shadow-gray-400"
            >
              Login Now
            </Link>
          </div>
          <Register />
        </div>
      </Layout>
    </>
  );
};

export default RegisterPage;
