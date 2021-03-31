import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
const Fragment = ({ children }) => {
  return <div>{children}</div>;
};

const MySlice = ({ slice }) => (
  <section className="flex justify-center px-6 py-16 text-white bg-black ">
    <div className="grid w-full font-sans text-lg leading-loose gap-x-6 gap-y-4 md:gap-x-12 max-w-7xl auto-rows-auto md:grid-cols-2">
      <h2 className="row-start-1 row-end-3 font-serif text-4xl sm:text-5xl md:text-6xl">
        {RichText.asText(slice.primary.title)}
      </h2>
      <RichText render={slice.primary.description} />
    </div>
  </section>
);

export default MySlice;
