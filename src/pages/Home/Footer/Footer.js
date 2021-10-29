import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4">
        {/* contact */}
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est maxime
            soluta ducimus tenetur laboriosam aperiam quibusdam doloribus,
            pariatur quae labore iste odio molestias reprehenderit veritatis
            deleniti modi amet. Labore, necessitatibus?
          </p>
        </div>
        {/* info */}
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est maxime
            soluta ducimus tenetur laboriosam aperiam quibusdam doloribus,
            pariatur quae labore iste odio molestias reprehenderit veritatis
            deleniti modi amet. Labore, necessitatibus?
          </p>
        </div>
        {/* menu */}
        <div className="col menu">
          <div>
            <a href="">
              <p>
                <span>{`>`}</span>About Us
              </p>
            </a>
            <a href="">
              <p>
                <span>{`>`}</span>About Us
              </p>
            </a>
            <a href="">
              <p>
                <span>{`>`}</span>About Us
              </p>
            </a>
            <a href="">
              <p>
                <span>{`>`}</span>About Us
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
