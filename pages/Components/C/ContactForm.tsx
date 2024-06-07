import axios from "axios";
import React, { useState } from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  async function contact(ev: any) {
    ev.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    const response: any = await axios.post("/api/contact", data);
    if (response.ok) {
      alert("Form submission failed.");
    } else {
      setName("");
      setEmail("");
      setMessage("");
      setConfirmationMessage("Message sended successfully!");
      setTimeout(() => {
        setConfirmationMessage("");
      }, 5000);
      const audio = new Audio("/audio/notification.mp3");
      audio.play();
    }
  }
  return (
    <div className="contactForm bg-[#fff] px-[40px] py-[15px] rounded-xl">
      <h1 className="font-bold text-2xl text-center cursor-context-menu">
        Contact Form
      </h1>
      <form action="" className="grid items-center" onSubmit={contact}>
        <label htmlFor="">Full Name: </label>
        <input
          type="text"
          placeholder="Jhon Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">E-mail: </label>
        <input
          type="email"
          placeholder="example@xyz.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Message: </label>
        <textarea
          rows={5}
          cols={20}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex flex-wrap justify-center items-center gap-6 my-3">
          <button
            type="submit"
            className="bg-green-500 px-4 py-2 rounded-md cursor-pointer text-white"
          >
            Submit
          </button>
        </div>
        {confirmationMessage && (
          <span className="bg-[#202648] flex items-center px-4 py-2 rounded-md fixed right-3 top-20 text-white gap-2">
            <HiMiniSpeakerWave className="animate-pulse text-2xl" />
            <p>{confirmationMessage}</p>
          </span>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
