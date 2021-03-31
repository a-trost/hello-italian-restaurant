import React from "react";

const MySlice = ({ slice }) => (
  <section className="flex justify-center px-6 py-16 font-serif text-4xl text-center text-white bg-black">
    <div className="grid grid-cols-2 gap-6 auto-rows-auto">
      <img
        src={slice.primary.image1.url}
        alt={slice.primary.image1.alt}
        className="row-span-1"
      />
      <img
        src={slice.primary.image2.url}
        alt={slice.primary.image2.alt}
        className="row-span-2"
      />
      <img
        src={slice.primary.image3.url}
        alt={slice.primary.image3.alt}
        className="row-span-2"
      />
      <img
        src={slice.primary.image4.url}
        alt={slice.primary.image4.alt}
        className="row-span-1"
      />
    </div>
  </section>
);

export default MySlice;
