// Importing necessary dependencies
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// Defining the RootLayout component
const RootLayout = () => {
  return (
    <>
      {/* Rendering the Navbar component */}
      <Navbar />

      {/* Rendering the Outlet component */}
      <Outlet />
    </>
  );
};

// Exporting the RootLayout component as the default export
export default RootLayout;
