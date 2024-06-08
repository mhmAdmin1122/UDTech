import React from "react";
import Navbar from "../N/Navbar";
import Footer from "../F/Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-gray-100 relative">
      <Navbar />
      <div className="min-h-screen py-5 flex itemms-center justify-center body-box">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
