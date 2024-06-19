import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Sign-in credentials states
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);
  
  const login = async (e: any) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    if (!username) {
      setError("Username is invalid");
      setTimeout(() => {
        setError("");
      }, 10000);
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      setTimeout(() => {
        setError("");
      }, 10000);
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError("Invalid Username or password");
      setTimeout(() => {
        setError("");
      }, 10000);
      if (res?.url) router.replace("/");
    } else {
      setError("");
    }
  };

  return (
    <form className="grid items-center justify-center loginForm-box" onSubmit={login}>
      <div className="w-[420px] flex justify-center flex-col gap-2">
        <div className="relative">
          <MdAlternateEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="w-full pl-10 py-2 border border-gray-300 rounded"
            required
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full pl-10 py-2 border border-gray-300 rounded"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <AiFillEyeInvisible
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <AiFillEye
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        {error && error}
        <div className="flex justify-center mt-4">
          <button type="submit" className="btn-custom">
            Login Now
          </button>
        </div>
      </div>
    </form>
  );
};
export default Login;
