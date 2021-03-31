import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import MapBox from "../../components/MapBox";

const MySlice = ({ slice }) => (
  <section className="location-map">
    <MapBox
      latLong={slice.primary.location}
      className="w-full col-span-full row-span-full"
    />

    <div>
      <RichText render={slice.primary.title} />
      <p className="location-map__location">Location</p>
      <RichText render={slice.primary.address} />
    </div>
    <img
      className="z-50 col-start-2 row-start-1"
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
    />
  </section>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
