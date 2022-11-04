import React from "react";
import { client } from "../ecommerce/sanity/client";
import { Items, FooterBanner, Banner } from "../ecommerce/component";

const Home = ({ productQuery, bannerInfo }) => {
  return (
    <>
      <Banner banner={bannerInfo.length && bannerInfo[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p style={{ fontSize: "16px", fontWeight: "500" }}>
          Speakers of many variations
        </p>
      </div>
      <div className="products-container">
        {productQuery?.map((item) => (
          <Items key={item._id} item={item} />
        ))}
      </div>
      <FooterBanner footBanner={bannerInfo && bannerInfo[0]} />
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const productQuery = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerInfo = await client.fetch(bannerQuery);
  return {
    props: { productQuery, bannerInfo },
  };
};
export default Home;
