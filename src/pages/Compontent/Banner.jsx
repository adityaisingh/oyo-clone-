import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-500 h-60   ">
      <div className="flex justify-center font-bold py-10 text-3xl text-white text-bold">
        <h1>Over 174,000+ hotels and homes across 35+ countries</h1>
      </div>
      <div className="flex justify-center  my-2 mx-10 ">
        <input
          type="text"
          placeholder="Search by city...."
          className=" h-16 outline-none px-3 text-2xl border-r-2 border-gray-300  col-span-3"
        />
        <input
          type="text"
          placeholder="Sat,24 feb - Mon,26feb"
          className=" h-16 outline-none px-3  text-2xl border-r-2 border-gray-300 col-span-2"
        />
        <input
          type="text"
          placeholder="1 ROOM , 1 GUEST"
          className=" h-16 outline-none px-3 text-2xl border-r-2 border-gray-300 col-span-2"
        />
        <button
          type="submit "
          className=" h-16 w-40 px-2 py-3 text-bold text-3xl bg-green-400  hover:cursor-pointer  ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
