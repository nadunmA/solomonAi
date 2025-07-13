import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const LayOut = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayOut;
