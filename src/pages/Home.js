import React from "react";

const Home = () => {
  return(
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://previews.123rf.com/images/limbi007/limbi0071304/limbi007130400225/19333878-shopping-bags-with-white-text-online-shop-white-background-.jpg"
              height="500px"
              className="d-block w-100"
              alt="lorem"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/235/200/300"
              height="500px"
              className="d-block w-100"
              alt="lorem"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/239/200/300"
              height="500px"
              className="d-block w-100"
              alt="lorem"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/232/200/300"
              height="500px"
              className="d-block w-100"
              alt="lorem"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
};

export default Home;
