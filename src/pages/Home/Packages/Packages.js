import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Stat from "../../Stat/Stat";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const { isLoading, setIsLoading } = useAuth();
  useEffect(() => {
    setIsLoading(true);
    fetch("https://gruesome-phantom-41535.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  //spinner
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-24">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="my-5">
      <h1 className="text-center py-5">OUR PACKAGES</h1>
      <div className="container mx-auto row row-cols-1 row-cols-md-2 g-4">
        {packages.map((pack) => (
          <Package key={pack._id} pack={pack}></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
