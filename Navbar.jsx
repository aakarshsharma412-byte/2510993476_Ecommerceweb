import React from "react";

function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          width: 100%;
          height: 70px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 5%;

          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;

          box-sizing: border-box;
        }

        .logo {
          font-size: 22px;
          font-weight: 700;
          color: #2948a5;
        }

        .logo span {
          color: #7552dc;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
        }

        .nav-links a {
          text-decoration: none;
          color: #374151;
          font-size: 15px;
          font-weight: 500;
        }

        .nav-links a:hover {
          color: #4f46e5;
        }

        .login-btn {
          border: none;
          padding: 10px 22px;

          border-radius: 5px;

          color: white;

          background: linear-gradient(
            135deg,
            #4f46e5,
            #7048e8
          );

          font-size: 14px;
          cursor: pointer;
        }

        .login-btn:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 650px) {
          .navbar {
            height: auto;
            padding: 18px 5%;
            flex-wrap: wrap;
            gap: 15px;
          }

          .nav-links {
            order: 3;
            width: 100%;
            justify-content: center;
            gap: 20px;
          }
        }
      `}</style>

      <nav className="navbar">

        <div className="logo">
          Shop<span>Easy</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="login-btn">
          Login
        </button>

      </nav>
    </>
  );
}

export default Navbar;