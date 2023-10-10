import React from 'react'
import mshimg from "../../Images/image 55.png";
import Shoppage from './Shoppage';
const MainShop = () => {
  return (
    <div className='mainshopcls'>
      <div className="position-relative">
        <img src={mshimg} width="100%" style={{ height: "250px" }} />
        <h3
          className="position-absolute top-50 start-50 translate-middle"
          style={{ color: "white" }}
        >
          Shop
        </h3>
      </div>
      <Shoppage/>
    </div>
  );
}

export default MainShop
