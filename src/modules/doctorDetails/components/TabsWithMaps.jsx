"use client";

import React, { useState } from "react";
import SectionTabsWithMaps from "@/components/setionTabsWithMaps/SectionTabsWithMaps";

const TabsWithMaps = () => {
  const [newTabData, setNewTabData] = useState(1);
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
        {[1, 2, 3].map((item) => (
          <button
            key={item}
            onClick={() => changeTab(item)}
            type="button"
            className={`px-6 py-2 font-medium rounded-t-lg hover:bg-[#F3FAFF] hover:text-[#01549A] ${
              newTabData === item
                ? "bg-[#F3FAFF] text-[#01549A]"
                : "bg-[#F5F5F5] text-[#919196]"
            }`}
          >
            Office {item}
          </button>
        ))}
      </div>

      {newTabData === 1 ? (
        <SectionTabsWithMaps tab="1" />
      ) : newTabData === 2 ? (
        <SectionTabsWithMaps tab="2" />
      ) : newTabData === 3 ? (
        <SectionTabsWithMaps tab="3" />
      ) : null}
    </div>
  );
};

export default TabsWithMaps;
