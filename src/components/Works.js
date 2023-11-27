import React from "react";
import utoob from "../assets/utoob.png";
import food from "../assets/food.png" 

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6 text-2xl">Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${utoob})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 backdrop-blur-lg  flex justify-center items-center flex-col rounded-md">
              <span className=" mt-2 text-lg font-bold text-white tracking-wider">
                Utoob Clone
              </span>
              <p className="text-center">
                A Youtube Clone built with React and Youtube APIs
              </p>
              <div className="p-6 text-center">
                <a
                  href="https://utoob-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/aryannov25/utoob-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${food})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 backdrop-blur-2xl flex justify-center items-center flex-col rounded-md">
              <span className="mt-2 text-lg font-bold text-white tracking-wider">
                Hunger Wheel
              </span>
              <p className="text-center text-white">
                A Food delivering web application built with React and Swiggy Apis
              </p>
              <div className="p-6 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${food})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 backdrop-blur-2xl flex justify-center items-center flex-col rounded-md">
              <span className="mt-2 text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="p-6 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div><div
            style={{ backgroundImage: `url(${food})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 backdrop-blur-2xl flex justify-center items-center flex-col rounded-md">
              <span className="mt-2 text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="p-6 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div><div
            style={{ backgroundImage: `url(${food})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 backdrop-blur-2xl flex justify-center items-center flex-col rounded-md">
              <span className="mt-2 text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="p-6 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div><div
            style={{ backgroundImage: `url(${food})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 backdrop-blur-2xl flex justify-center items-center flex-col rounded-md">
              <span className="mt-2 text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="p-6 text-center">
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
