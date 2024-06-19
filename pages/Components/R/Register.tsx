import axios from "axios";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { MdAlternateEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState<string[]>([]);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validatePasswordStrength = (password: string): string[] => {
    const errors: string[] = [];
    const minLength = 8;
    if (password.length < minLength) {
      errors.push(`Password must be at least ${minLength} characters long.`);
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must include at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must include at least one lowercase letter.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must include at least one number.");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push("Password must include at least one special character.");
    }
    return errors;
  };

  const validateUsername = (username: string): string => {
    const usernameRegex = /^(?=.*[0-9])[a-z0-9]+$/;
    if (!usernameRegex.test(username)) {
      return "Username must contain only lowercase letters and numbers, and include at least one number.";
    }
    return "";
  };

  async function register(ev: any) {
    ev.preventDefault();

    const usernameValidationError = validateUsername(username);
    if (usernameValidationError) {
      setUsernameError(usernameValidationError);
      return;
    } else {
      setUsernameError("");
    }

    if (password !== confPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    } else {
      setConfirmPasswordError("");
    }

    const passwordValidationErrors = validatePasswordStrength(password);
    if (passwordValidationErrors.length > 0) {
      setPasswordError(passwordValidationErrors);
      return;
    } else {
      setPasswordError([]);
    }

    if (!userType) {
      setMessage("Please select a user type.");
      return;
    }

    const data = {
      name,
      lastname,
      email,
      username,
      password,
      userType,
    };

    try {
      const response = await axios.post("/api/register", data);
      setName("");
      setLastname("");
      setEmail("");
      setUsername("");
      setPassword("");
      setConfPassword("");
      setUserType("");
      setMessage("Message sent successfully!");
      setTimeout(() => {
        setMessage("");
      }, 5000);
      const audio = new Audio("/audio/notification.mp3");
      audio.play();
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.error === "username not available") {
          setUsernameError("Username is not available!");
        } else if (error.response.data.error === "email already registered") {
          setEmailError("Email is already registered!");
          setTimeout(() => {
            setEmailError("");
          }, 6000);
        } else {
          setEmailError("");
        }
      }
    }
  }

  return (
    <form
      action=""
      className="grid items-center justify-center register-form-box"
      onSubmit={register}
    >
      <div className="w-[420px] space-y-4">
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="w-full pl-10 py-2 border border-gray-300 rounded"
            required
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="w-full pl-10 py-2 border border-gray-300 rounded"
            required
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            className="w-full pl-10 py-2 border border-gray-300 rounded"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {emailError && <p className="text-red-500">{emailError}</p>}
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
        {usernameError && <p className="text-red-500">{usernameError}</p>}
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
        {passwordError.length > 0 && (
          <ul className="text-red-500 mt-2">
            {passwordError.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <div className="relative">
          <PiPasswordFill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="w-full pl-10 py-2 border border-gray-300 rounded"
            required
            placeholder="Confirm Password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          {showConfirmPassword ? (
            <AiFillEyeInvisible
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          ) : (
            <AiFillEye
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          )}
        </div>
        {confirmPasswordError && (
          <p className="text-red-500">{confirmPasswordError}</p>
        )}
        {/* <div className="flex items-center gap-4">
          <label>
            <input
              type="radio"
              value="buyer"
              checked={userType === "buyer"}
              onChange={() => setUserType("buyer")}
            />
            Buyer
          </label>
          <label>
            <input
              type="radio"
              value="student"
              checked={userType === "student"}
              onChange={() => setUserType("student")}
            />
            Student
          </label>
        </div> */}

        <div className="flex items-center gap-4">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              value="buyer"
              checked={userType === "buyer"}
              onChange={() => setUserType("buyer")}
              className="hidden"
            />
            <span
              className={`${
                userType === "buyer" ? "bg-blue-600" : "bg-gray-300"
              } relative inline-block w-[2rem] h-[1rem] transition-colors duration-200 ease-out rounded-full`}
            >
              <span
                className={`${
                  userType === "buyer" ? "translate-x-4" : "translate-x-0"
                } absolute left-0 top-0 bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ease-out`}
              ></span>
            </span>
            <span className="ml-2">Buyer</span>
          </label>
          
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              value="student"
              checked={userType === "student"}
              onChange={() => setUserType("student")}
              className="hidden"
            />
            <span
              className={`${
                userType === "student" ? "bg-blue-600" : "bg-gray-300"
              } relative inline-block w-[2rem] h-[1rem] transition-colors duration-200 ease-out rounded-full`}
            >
              <span
                className={`${
                  userType === "student" ? "translate-x-4" : "translate-x-0"
                } absolute left-0 top-0 bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ease-out`}
              ></span>
            </span>
            <span className="ml-2">Student</span>
          </label>
        </div>

        <div className="flex justify-center">
          <button type="submit" className="btn-custom">
            Register Now
          </button>
        </div>
        {message && (
          <span className="bg-[#202648] flex items-center px-4 py-2 rounded-md fixed right-3 top-20 text-white gap-2">
            <HiMiniSpeakerWave className="animate-pulse text-2xl" />
            <p>{message}</p>
          </span>
        )}
      </div>
    </form>
  );
};

export default Register;
