import React from "react";
import Blogs from "../Blogs/Blogs";
import Packages from "../Packages/Packages";
import Header from "../Header/Header";
import Stat from "../../Stat/Stat";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Packages></Packages>
      <Stat></Stat>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
