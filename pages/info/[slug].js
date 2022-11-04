import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Items from "../../ecommerce/component/Items";
import { urlFor, client } from "../../ecommerce/sanity/client";
import { useStoreContext } from "../../ecommerce/context/StoreContext";

const ProductDetails = ({ products, product }) => {
  const [state, setState] = useState(0);
  // const { image, name, details, price, quantity } = product;
  const { increase, decrease, produc, AddItem, setShow } = useStoreContext();
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <picture>
              {" "}
              <img
                src={urlFor(product.image && product.image[state])}
                className="product-detail-image"
                alt=""
              />
            </picture>
          </div>
          <div className="small-images-container">
            {product.image.map((el, i) => (
              <picture key={i}>
                {" "}
                <img
                  src={urlFor(el)}
                  className={
                    i === state ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setState(i)}
                  alt=""
                />
              </picture>
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{product.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(35)</p>
          </div>
          <h4>Details : </h4>
          <p className="det">{product.details}</p>
          <p className="price">
            Price :<span className="pr"> ${product.price}</span>{" "}
          </p>
          <div className="quantity">
            <h3>Quantity :</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decrease}>
                <AiOutlineMinus />
              </span>
              <span className="num">{produc}</span>
              <span className="plus" onClick={increase}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => AddItem(product, produc)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="buy-now"
              onClick={() => setShow(true)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h1>Recommend Products</h1>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Items key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
