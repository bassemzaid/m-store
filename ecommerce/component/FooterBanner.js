import React from "react";
import Link from "next/link";
import { urlFor } from "../sanity/client";

const FooterBanner = ({ footBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footBanner.discount}</p>
          <h3>{footBanner.largeText1}</h3>
          <h3>{footBanner.largeText2}</h3>
          <p>{footBanner.saleTime}</p>
        </div>
        <div className="right">
          <p>{footBanner.smallText}</p>
          <h3> {footBanner.midText}</h3>
          <p>{footBanner.desc}</p>
        </div>
        <img src={urlFor(footBanner.image)} className="footer-banner-image" />
      </div>
    </div>
  );
};

export default FooterBanner;

//<Link href={`/info/${footBanner.product}`}>
//<button type="button">{footBanner.buttonText}</button>
//</Link>//
