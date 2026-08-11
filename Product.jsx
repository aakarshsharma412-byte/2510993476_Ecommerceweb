import React from "react";
import ProductCard from "./ProductCard";

function Product() {
  const products = [
    {
      id: 1,
      category: "Electronics",
      name: "Product 1",
      price: "$19",
    },
    {
      id: 2,
      category: "Fashion",
      name: "Product 2",
      price: "$29",
    },
    {
      id: 3,
      category: "Gadgets",
      name: "Product 3",
      price: "$39",
    },
    {
      id: 4,
      category: "Home",
      name: "Product 4",
      price: "$49",
    },
  ];

  return (
    <>
      <style>{`
        .products {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 35px;
          padding: 35px 5% 65px;
          box-sizing: border-box;
          background: #ffffff;
        }

        @media (max-width: 900px) {
          .products {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .products {
            grid-template-columns: 1fr;
            padding: 30px 7%;
          }
        }
      `}</style>

      <section className="products" id="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
          />
        ))}
      </section>
    </>
  );
}

export default Product;