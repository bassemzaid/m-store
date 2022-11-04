import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity/client";

const Banner = ({ banner }) => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{banner.smallText} </p>
      <h3>{banner.midText}</h3>
      <h1>{banner.largeText1}</h1>
      <img
        src={urlFor(banner.image)}
        alt="headphne"
        className="hero-banner-image"
      />
      <div className="med">
        <div className="desc">
          <h5>{banner.desc}</h5>
          <p>{banner.saleTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

//   <Link href={`/info/${banner.product}`}>
// <button type="button">{banner.buttonText}</button>
// //{" "}
//  </Link>//
