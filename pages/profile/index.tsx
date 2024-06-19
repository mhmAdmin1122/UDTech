import React from "react";
import Layout from "../Components/L/Layout";
import Logout from "../Components/L/Logout";

const ProfilePage = () => {
  return (
    <Layout>
      <div>
        <h2>Profile</h2>
        <Logout />
      </div>
    </Layout>
  );
};

export default ProfilePage;
