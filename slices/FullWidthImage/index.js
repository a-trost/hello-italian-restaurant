import React from "react";
// import { array, shape } from 'prop-types';

const MySlice = ({ slice }) => (
  <section className="flex justify-center px-6 py-16 bg-black">
    <img
      className="w-full max-w-7xl"
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
    />
  </section>
);

export default MySlice;
