import React from "react";
import Hotel from "./Compontent/hotel";
import Header from "./Compontent/Header";

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
