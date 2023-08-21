import React from "react";
// import { useSelector } from "react-redux";
// import { authSelector } from "@/app/store/slices/authSlice";
import Profile from "../components/Profile/Profile";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

const page = () => {
  // const { user } = useSelector(authSelector);

  return (
    <div className="bg-white h-screen">
      <Navbar />
      <ProtectedRoute>
        {/* <Profile user={user} /> */}
        <Profile />
      </ProtectedRoute>
    </div>
  );
};

export default page;
