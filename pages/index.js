import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner, Laptop } from "../components";

const Home = ({ products, bannerData, laptopData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>
      <h2>Speaker</h2>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const laptopQuery = '*[_type =="laptop"]';
  const laptopData = await client.fetch(laptopQuery);

  return {
    props: { products, bannerData, laptopData },
  };
};

export default Home;
