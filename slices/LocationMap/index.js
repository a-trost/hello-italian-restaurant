import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";
import MapBox from "../../components/MapBox";

const MySlice = ({ slice }) => (
  <section className="location-map">
    <MapBox latLong={slice.primary.location} />
    <div>
      <RichText render={slice.primary.title} />
      <p className="location-map__location">Location</p>
      <RichText render={slice.primary.address} />
    </div>
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
  </section>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
      location: shape({ latitude: number.isRequired }),
      address: array.isRequired,
      image: shape({ url: string.isRequired }),
    }).isRequired,
  }).isRequired,
};

export default MySlice;
