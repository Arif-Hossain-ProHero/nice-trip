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
                src="https://theluxurytravelexpert.com/wp-content/uploads/2019/04/BEST-BEACH-DESTINATIONS-IN-THE-WORLD.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block fs-5">
                <h2 className="fw-bold text-white">
                  WELCOME TO <span className="text-warning">NICE TRIP</span>{" "}
                  TOURISM COMPANY
                </h2>
                <p className="text-dark">
                  We are the largest and most celebrated network of professional
                  travel agents in North America. Wherever you want to go,
                  however you want to get there, whatever you want to do—we have
                  the ideal travel agent match just for you.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.discoverwalks.com/blog/wp-content/uploads/2016/07/eiffel-big-1280x720.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block fs-5">
                <h2 className="text-warning fw-bold">
                  WE DELIVER THE BEST SERVICES AROUND THE WORLD
                </h2>
                <p className="text-dark">
                  Nice Trip ensure you to provide you the safe and hygiene
                  hospitality during your visit. Tours or activities will not
                  consist of more than 15 people per group.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://static.toiimg.com/thumb/86844352/india-travel-visa.jpg?width=1200&height=900"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block fs-5">
                <h2 className="text-white fw-bold">
                  Best-selling Holiday Destinations
                </h2>
                <p className="text-dark">
                  Grab exciting discounts for your upcoming trips to our
                  most-loved destinations
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
      <div className="booking py-4">
        <h1 className="text-center py-4">Find Package</h1>
        <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4">
          <div>
            <input
              class="form-control"
              type="date"
              placeholder="Default input"
              aria-label="default input example"
            ></input>
          </div>
          <div class="input-group mb-3 col">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose City</option>
              <option value="1">Cox-Bazar</option>
              <option value="2">Male-Maldives</option>
              <option value="3">Paris-France</option>
              <option value="3">Barcelona-Spain</option>
              <option value="3">Bangkok-Thailand</option>
            </select>
            <label
              class="input-label input-group-text"
              for="inputGroupSelect01"
            >
              Options
            </label>
          </div>
          <div class="input-group mb-3 col">
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Choose Category</option>
              <option value="1">Business</option>
              <option value="2">Family</option>
              <option value="3">Honeymoon</option>
              <option value="3">Bachelor</option>
              <option value="3">Adventure</option>
            </select>
            <label
              class="input-label input-group-text"
              for="inputGroupSelect02"
            >
              Options
            </label>
          </div>
          <div class="input-group mb-3 col">
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Min Price</option>
              <option value="1">$300</option>
              <option value="2">$450</option>
              <option value="3">$700</option>
              <option value="3">$1000</option>
              <option value="3">$1500</option>
            </select>
            <label
              class="input-label input-group-text"
              for="inputGroupSelect02"
            >
              Options
            </label>
          </div>
          <div class="input-group mb-3 col">
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Max Price</option>
              <option value="1">$800</option>
              <option value="2">$1200</option>
              <option value="3">$2000</option>
              <option value="3">$2500</option>
              <option value="3">$3000</option>
            </select>
            <label
              class="input-label input-group-text"
              for="inputGroupSelect02"
            >
              Options
            </label>
          </div>
          <div className="w-50">
            <button className="btn btn-warning">FIND PACKAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
