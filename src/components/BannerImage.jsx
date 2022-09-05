
//import useState hook to create menu collapse state
import React from "react";
import image from '../assets/banner2.jpg'; 
import "../assets/Banner.css";


const BannerImage = () => {
  
  return (
    <>
      <div className="banner-image" >
        <img src={image} alt="banner"/>
      </div>
    </>
  );
};

export default BannerImage;
