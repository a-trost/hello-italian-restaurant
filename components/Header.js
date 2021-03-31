import React from "react";
import ArrowIcon from "./ArrowIcon";
import HelloLogo from "./HelloLogo";

export default function Header() {
  return (
    <header className="flex justify-center font-sans text-white text-gray-700 bg-black">
      <div className="flex flex-col flex-wrap justify-between w-full p-5 mx-auto md:items-center max-w-7xl md:flex-row">
        <nav className="flex flex-wrap items-center justify-center text-base">
          <a
            href="#"
            className="mr-5 font-sans text-base text-gray-600 hover:text-gray-800"
          >
            About
          </a>
          <a
            href="#"
            className="mr-5 font-sans text-base text-gray-600 hover:text-gray-800"
          >
            Careers
          </a>
          <a
            href="#"
            className="mr-5 font-sans text-base text-gray-600 hover:text-gray-800"
          >
            Blog
          </a>
          <a
            href="#"
            className="mr-5 font-sans text-base text-gray-600 hover:text-gray-800"
          >
            Pickup
          </a>
        </nav>
        <a href="#" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
          <div className="inline-flex items-center">
            <div className="">
              <HelloLogo width={115} />
            </div>
          </div>
        </a>
        <button className="flex items-center justify-center px-8 py-2 font-serif text-xl text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-900 focus:ring focus:outline-none align-center">
          Make a reservation <ArrowIcon className="ml-4" />
        </button>
      </div>
    </header>
  );
}
