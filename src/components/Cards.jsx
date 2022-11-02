import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* card 1 */}
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-2.5rem] bg-transparent"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium  ">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start Trial
          </button>
        </div>

        {/* Card two */}
        <div className="w-full shadow-xl  bg-gray-100  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-2.5rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Two Users</h2>
          <p className="text-center text-4xl font-bold">$225</p>
          <div className="text-center font-medium  ">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2.5 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start Trial
          </button>
        </div>

        {/* Card 3 */}

        <div className="w-full shadow-xl  bg-gray-100  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-2.5rem] bg-transparent"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Three Users</h2>
          <p className="text-center text-4xl font-bold">$300</p>
          <div className="text-center font-medium  ">
            <p className="py-2 border-b mx-8 mt-8">1000 GB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 3.5 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
