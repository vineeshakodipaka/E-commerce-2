import React from "react";
import Carouselfile from "./Carouselfile";
import Imgsfile from "./Imgsfile";
import Brands from "./Brands";

import Cardsimgs from "./Cardsimgs";
import Ourproducts from "./Ourproducts";


const Home = () => {
  return (
    <div>
      <Carouselfile />
      <Imgsfile />
      <Ourproducts />
      <Brands />

      <Cardsimgs />
    </div>
  );
};

export default Home;
