import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container mt-5 pb-4">
      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4">
        {/* contact */}
        <div className="col">
          <h3 className="text-center text-white pb-3">CONTACT</h3>
          <div>
            <p className="text-white">
              We are the largest and most celebrated network of professional
              travel agents in North America. Wherever you want to go, however
              you want to get there, whatever you want to do—we have the ideal
              travel agent match just for you.
            </p>
            <div className="fst-italic contact">
              <address>
                <i class="fas fa-map-marker-alt pe-2"></i>4th Floor, Mahboob's
                Building, Mirpur-12
              </address>
              <p>
                <i class="fas fa-phone-alt pe-2"></i>+880-XXXXXXXXXX
              </p>
              <p>
                <i class="far fa-envelope pe-2"></i>nice-trip@support.com
              </p>
            </div>
          </div>
        </div>
        {/* info */}
        <div className="col">
          <div>
            <h3 className="text-center text-white">SEND FEEDBACK</h3>
            <div class="mb-3">
              <label
                for="exampleFormControlInput1"
                class="form-label text-white"
              >
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label
                for="exampleFormControlTextarea1"
                class="form-label text-white"
              >
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button className="btn regular-btn">SEND</button>
          </div>
        </div>
        {/* menu */}
        <div className="col menu ">
          <h3 className="text-center text-white pb-3">MENU</h3>
          <div>
            <Link to="/about">
              <p>
                <span className="me-3 text-warning">{`>`}</span>About Us
              </p>
            </Link>
            <Link to="/blog">
              <p>
                <span className="me-3 text-warning">{`>`}</span>Blog
              </p>
            </Link>
            <Link to="/contact">
              <p>
                <span className="me-3 text-warning">{`>`}</span>Contact Us
              </p>
            </Link>
            <Link to="/services">
              <p>
                <span className="me-3 text-warning">{`>`}</span>Services
              </p>
            </Link>
            <Link to="/support">
              <p>
                <span className="me-3 text-warning">{`>`}</span>Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
