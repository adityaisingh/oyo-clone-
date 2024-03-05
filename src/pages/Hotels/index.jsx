import React from "react";
import Hotel from "../pages/Compontent/hotel";
import Header from "../pages/Compontent/Header";

const Hotels = () => {
  return (
    <>
      <Header />
      <div className="m-5">
        <Hotel />
        <Hotel />
      </div>
    </>
  );
};

export default Hotels;
