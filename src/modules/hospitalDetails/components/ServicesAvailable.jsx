import React from "react";

const ServicesAvailable = ({ services }) => {
  return (
    <div className="my-12 w-full  rounded-[20px]  px-4 py-5 space-y-5">
      <p className="text-[20px]  font-medium ">
        Convenience services available​
      </p>
      <div className="w-full flex gap-x-4 items-center flex-wrap gap-y-5">
        {services?.map((item, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            className="capitalize py-[10px] px-4  flex justify-center items-center gap-x-2 rounded-[10px]  text-sm "
          >
            {/* <img src={item.img?.src} className="w-4" alt="load..." /> */}
            {item?.split("_")?.join(" ")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAvailable;
