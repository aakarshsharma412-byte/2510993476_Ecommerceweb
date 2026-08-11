import React from "react";

function ProductCard({ category, name, price }) {
  return (
    <>
      <style>{`
        .product-card {
          min-height: 225px;

          padding: 30px;

          box-sizing: border-box;

          border: 1px solid #dce4ef;

          border-radius: 6px;

          background: #ffffff;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          text-align: center;

          transition: 0.25s;

          box-shadow:
            0 2px 5px rgba(0, 0, 0, 0.02);
        }

        .product-card:hover {
          transform: translateY(-5px);

          border-color: #9eb2ee;

          box-shadow:
            0 12px 25px rgba(
              48,
              78,
              160,
              0.12
            );
        }

        .category {
          font-size: 15px;

          color: #6b7280;

          margin: 0 0 25px;
        }

        .product-name {
          font-size: 20px;

          color: #111827;

          margin: 0 0 20px;
        }

        .price {
          font-size: 18px;

          font-weight: 600;

          color: #111827;

          margin: 0 0 25px;
        }

        .buy-btn {
          border: none;

          padding: 11px 20px;

          border-radius: 5px;

          color: white;

          background: linear-gradient(
            135deg,
            #315eea,
            #6042e8
          );

          font-size: 14px;

          cursor: pointer;

          transition: 0.2s;
        }

        .buy-btn:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="product-card">

        <p className="category">
          {category}
        </p>

        <h3 className="product-name">
          {name}
        </h3>

        <p className="price">
          {price}
        </p>

        <button className="buy-btn">
          Buy Now
        </button>

      </div>
    </>
  );
}

export default ProductCard;