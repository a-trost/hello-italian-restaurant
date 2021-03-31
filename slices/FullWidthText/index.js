import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

const MySlice = ({ slice }) => (
  <section className="flex justify-center px-6 font-serif text-3xl text-center text-white bg-black py-28 sm:text-4xl md:text-5xl">
    <div className="max-w-3xl leading-snug">
      <RichText render={slice.primary.text} />
    </div>
  </section>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      text: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
