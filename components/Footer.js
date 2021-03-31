import React from "react";
import HelloLogo from "./HelloLogo";

export default function Footer() {
  return (
    <footer className="p-6 py-12 pb-40 text-gray-700 bg-black border-t body-font">
      <div className="flex flex-col flex-wrap mx-auto max-w-7xl md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
        <div className="flex flex-wrap flex-grow mx-auto mt-10 -mb-10 text-left md:mt-0 ">
          <div className="w-full lg:w-1/3 md:w-full">
            <HelloLogo />
          </div>
          <div className="w-full text-right lg:w-1/3 md:w-1/2">
            <p className="mb-3 text-sm font-semibold tracking-widest text-gold title-font">
              Restaurant
            </p>
            <nav className="mb-10 list-none text-gray">
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">
                  Pickup
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full text-right lg:w-1/3 md:w-1/2">
            <p className="mb-3 text-sm font-semibold tracking-widest text-gold title-font">
              Cities
            </p>
            <nav className="mb-10 list-none text-gray">
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">
                  Los Angeles
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">
                  Miami
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">
                  New York
                </a>
              </li>
              <li>
                <a className="text-sm text-gray-600 hover:text-gray-800">
                  Chicago
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
