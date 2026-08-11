import React from "react";

function Hero() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 390px;

          display: flex;
          align-items: center;

          padding: 40px 10%;

          box-sizing: border-box;

          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4fbff 55%,
            #eef5ff 100%
          );
        }

        .hero-content {
          width: 100%;
        }

        .hero-content h1 {
          font-size: 48px;
          line-height: 1.2;

          margin: 0 0 20px;

          color: #111827;
        }

        .hero-content p {
          font-size: 22px;

          color: #4b5563;

          margin: 0 0 30px;
        }

        .shop-btn {
          border: none;

          padding: 14px 30px;

          border-radius: 6px;

          color: white;

          background: linear-gradient(
            135deg,
            #315eea,
            #6042e8
          );

          font-size: 16px;

          cursor: pointer;
        }

        .shop-btn:hover {
          transform: translateY(-2px);

          box-shadow:
            0 8px 20px rgba(
              49,
              94,
              234,
              0.3
            );
        }

        @media (max-width: 700px) {

          .hero {
            padding: 60px 7%;
          }

          .hero-content h1 {
            font-size: 36px;
          }

          .hero-content p {
            font-size: 18px;
          }
        }
      `}</style>

      <section className="hero" id="home">

        <div className="hero-content">

          <h1>
            Find products you love
          </h1>

          <p>
            Discover our latest products at amazing prices!
          </p>

          <button className="shop-btn">
            Shop Now
          </button>

        </div>

      </section>
    </>
  );
}

export default Hero;