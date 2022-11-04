import React from "react";
import Link from "next/link";
import { urlFor } from "../sanity/client";

const Items = ({ item: { name, slug, price, image } }) => {
  return (
    <div>
      <Link href={`/info/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            className="product-image"
            width={250}
            height={250}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Items;
