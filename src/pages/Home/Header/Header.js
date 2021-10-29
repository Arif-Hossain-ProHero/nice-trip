import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* Carousel */}
      <div className="carousel-container">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.expatica.com/app/uploads/sites/5/2014/05/10-best-places-to-visit-in-France-1920x1080.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>First slide label</h2>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.expatica.com/app/uploads/sites/5/2014/05/10-best-places-to-visit-in-France-1920x1080.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.expatica.com/app/uploads/sites/5/2014/05/10-best-places-to-visit-in-France-1920x1080.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* booking option */}
      <div className="booking">
        <h1>Find Package</h1>
        <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4">
          <div class="input-group mb-3 col">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label class="input-group-text" for="inputGroupSelect01">
              Options
            </label>
          </div>
          <div class="input-group mb-3 col">
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label class="input-group-text" for="inputGroupSelect02">
              Options
            </label>
          </div>
          <div class="input-group mb-3 col">
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label class="input-group-text" for="inputGroupSelect02">
              Options
            </label>
          </div>
          <div class="input-group mb-3 col">
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label
              class="input-label input-group-text"
              for="inputGroupSelect02"
            >
              Options
            </label>
          </div>
        </div>
        <button className="btn btn-success">FIND</button>
      </div>
    </div>
  );
};

export default Header;
