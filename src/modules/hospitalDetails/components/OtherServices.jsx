import React from "react";

const OtherServices = ({ services }) => {
  return (
    <div className="my-12 w-full  rounded-[20px]  px-4 py-5 space-y-5">
      <p className="text-[20px]  font-medium ">Other services available​</p>
      <div className="w-full flex gap-x-4 gap-y-5 items-center flex-wrap">
        {services?.map((item, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            className="py-[10px] px-4  flex justify-center items-center rounded-[20px]  text-sm "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
