import React from "react";

const Curiosity = ({ image, fullname, name, Id }) => {
  return (
    <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8 flex font-mono items-center bg-black">
      <div className="max-w-2xl mx-auto bg-gray-400 aspect-square text-center shadow-xl rounded-lg">
        <img className=" item-center  rounded-lg  sm:col-span-8 lg:col-span-full" src={image} alt="" />
        <h3 className="flex-auto text-lg font-bold text-red-900 ">{fullname}</h3>
        <h5 className="flex-auto font-semibold"> {name}</h5>
        <p className="flex-auto font-medium">{Id}</p>
      </div>
    </div>
  );
};

export default Curiosity;
