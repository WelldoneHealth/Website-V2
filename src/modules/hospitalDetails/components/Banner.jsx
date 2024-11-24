import React from "react";
const Banner = ({ bannerImage, logoImage }) => {
  return (
    <div className="w-full relative">
      <img src={bannerImage} className=" h-[400px] w-full" alt="load..." />
      <img
        style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
        src={logoImage}
        className=" size-[200px] absolute top-[300px] left-[110px]  "
        alt="load..."
      />
    </div>
  );
};

export default Banner;
