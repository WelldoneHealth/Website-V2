"use client";

import React, { useState } from "react";
import SectionTabsWithMaps from "@/components/setionTabsWithMaps/SectionTabsWithMaps";

const TabsWithMaps = ({officeInfo}) => {
  const [newTabData, setNewTabData] = useState(0);
  const changeTab = (tabNumber) => setNewTabData(tabNumber);

  return (
    <div
      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
      className="w-full my-7 rounded-[20px] px-2 sm:px-4 py-2"
    >
      <h3 className="my-3 text-[22px] sm:text-2xl text-[#01549A] font-semibold">
        Clinic/ Hospital details
      </h3>

      <div className="w-full text-[15px] flex flex-wrap gap-y-5 justify-start gap-x-5 border-b-2 border-[#EFEFEF]">
        {officeInfo && officeInfo.map((item,index) => (
          <button
            key={item?.id}
            onClick={() => changeTab(index)}
            type="button"
            className={`px-6 py-2 font-medium rounded-t-lg hover:bg-[#F3FAFF] hover:text-[#01549A] ${
              newTabData === index
                ? "bg-[#F3FAFF] text-[#01549A]"
                : "bg-[#F5F5F5] text-[#919196]"
            }`}
          >
            Office {index+1}
          </button>
        ))}
      </div>

  <SectionTabsWithMaps tab={newTabData} tabDetails={officeInfo[newTabData]} />

    </div>
  );
};

export default TabsWithMaps;
