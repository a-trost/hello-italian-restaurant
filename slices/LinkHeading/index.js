import React from "react";
import { Link, RichText } from "prismic-reactjs";
import ArrowIcon from "../../components/ArrowIcon";

const MySlice = ({ slice }) => (
  <section className="flex justify-center px-6 pt-32 pb-8 font-serif text-center text-white bg-black">
    <div className="flex justify-between w-full max-w-7xl">
      <h2 className="text-6xl">{RichText.asText(slice.primary.title)}</h2>
      <a
        className="flex items-center justify-center p-4 -mr-4 text-xl"
        href={Link.url(slice.primary.link)}
      >
        {slice.primary.linkText} <ArrowIcon className="ml-4" />
      </a>
    </div>
  </section>
);

export default MySlice;
