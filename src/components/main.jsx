import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main5.jpg"
            alt="Card"
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container custom-container">
              <h5 className="card-title display-3">Trendsetting New Releases</h5>
              <p className="card-text fs-4 d-none d-sm-block">
                Unleash your shopping desires with an extensive selection of handpicked products tailored to suit your personal taste. Discover limitless options and indulge in the freedom of making your own choices, all in one convenient online marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .card-img {
            height: auto;
            max-width: 100%;
          }

          .custom-container {
            position: relative;
            left: 15%;
            transform: translateX(-50%);
            max-width: 60%;
          }

          .card-img-overlay {
            animation: hoverAnimation 2s infinite;
          }

          @keyframes hoverAnimation {
            0% { opacity: 1; }
            50% { opacity: 0.3; }
            100% { opacity: 1; }
          }

          @media (max-width: 767.98px) {
            .custom-container {
              max-width: 100%;
              left: 0;
              transform: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
