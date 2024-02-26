import React from "react";

const Curiosity = ({ image, fullname, name, Id }) => {
  return (
    <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8 flex font-mono items-center justify-center bg-black">
      <div className="max-w-2xl mx-auto bg-gray-400 aspect-square  text-center shadow-xl rounded-lg">
        <img className=" item-center  p-10  sm:col-span-8 lg:col-span-full" src={image} alt="" />
        <h3 className="flex-auto text-lg font-bold  mb-1 text-red-900 bg-black">{fullname}</h3>
        <h5 className="flex-auto font-semibold mb-1" > {name}</h5>
        <p className="flex-auto font-medium pb-5" >{Id}</p>
      </div>
    </div>
  );
};

export default Curiosity;
