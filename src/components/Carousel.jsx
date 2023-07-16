import React from "react";
function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://give.do/blog/wp-content/uploads/2019/11/10-cancer-care-NGOs-in-India-helping-the-poor-banner.jpg"
            className="d-block w-100 image-carousel"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block centered">
            <div className="heading">
              <h1>BECOME A BHUMI FELLOW</h1>
            </div>
            <h3>Change a million lives in 10 years</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://www.savethechildren.org.nz/assets/the-issues/education/hero-cta-education.jpg"
            className="d-block w-100 image-carousel"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block centered">
            <h1>VOLUNTEER</h1>
            <h3>Be a Part of the volunteering Journey</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/657/140/desktop-wallpaper-school-under-a-bridge-in-this-taken-wednesday-nov-7-2012-underprivileged-indian-children-attend-a-school-ru%E2%80%A6-poor-children.jpg"
            className="d-block w-100 image-carousel"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block centered">
            <h1>DONATE</h1>
            <h3>Experience the Power of Giving</h3>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousel;
