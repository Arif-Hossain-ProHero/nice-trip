import React, { useEffect, useState } from "react";
import Stat from "../../Stat/Stat";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);
  return (
    <div className="my-5">
      <h1 className="text-center py-5">OUR PACKAGES</h1>
      <div className="container mx-auto row row-cols-1 row-cols-md-2 g-4">
        {packages.map((pack) => (
          <Package key={pack.key} pack={pack}></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
