"use client";

import React, { useEffect, useRef, useState } from "react";
import searchIcon from "@/asset/Icons/search.svg";
import filterDropdownButtonIcon from "@/asset/Icons/filterDropdownButton.svg";
import rotatingArrowIcon from "@/asset/Icons/rotatingArrow.svg";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";
import DoctorCard from "@/Utilities/listingPageCards/DoctorCard";
import HospitalCard from "@/Utilities/listingPageCards/HospitalCard";
import dynamic from "next/dynamic";

// Dynamically import Leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
const useMap = dynamic(
  () => import("react-leaflet").then((mod) => mod.useMap),
  { ssr: false }
);
const LatLngBounds = dynamic(
  () => import("leaflet").then((mod) => mod.LatLngBounds),
  {
    ssr: false,
  }
);

// ---------------------reset button-------------------
const MapResetButton = ({ currentLocation }) => {
  const map = useMap();
  return (
    <button
      className="bg-[#F4F4F4] border-2 border-[#C2BFBA]   p-2 rounded-[10px] flex items-center text-sm font-semibold "
      onClick={() => map.setView(currentLocation, 13)}
    >
      <img src={rotatingArrowIcon?.src} className="mr-2" alt="load..." /> Reset
      View
    </button>
  );
};

export const DoctorListingPage = () => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  const [placeLocation, setPlaceLocation] = useState([
    27.574243738524796, 77.64168862650207,
  ]);

  const handleMarkerClick = (e) => {
    console.log("hello");
  };

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.invalidateSize(); // Update the map size when the view changes
    }
  }, [isMapExpanded]);

  const bounds = new LatLngBounds(
    [40.712216, -74.22655],
    [40.773941, -74.12544]
  );
  useEffect(() => {
    console.log("the new location is", placeLocation);
  }, [placeLocation]);
  const rectangleBounds = [
    [20.993177213245744, 74.31037414942334], // Southwest corner
    [20.993653817710108, 74.31422237720786], // Northeast corner
  ];
  return (
    <div className="w-full max-w-[1600px] mx-auto px-1  asm:px-3 lg:px-0   ">
      {/* --------------navbars--------------- */}
      <div
        style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
        className="w-full my-6 px-4 py-2 bg-white  rounded-[20px] flex justify-between items-center "
      >
        <div className="w-[360px] px-3 py-[6px] flex items-center justify-center rounded-[20px] gap-x-1 text-sm  bg-[#E5E5E5]">
          <input
            type="text"
            className="bg-transparent text-[#6C6C6C] outline-none font-medium w-[95%]"
            placeholder="Search symptoms, disease, specialty, Visit Reason"
          />{" "}
          <img
            src={searchIcon?.src}
            className="w-4 cursor-pointer"
            alt="load..."
          />
        </div>

        <div className="text-[#01549A] text-base font-medium  flex justify-center items-center gap-x-3">
          <p>Filter by:</p>
          <div className="px-3 py-[6px] rounded-[20px] border-[1px] border-[#01549A] ">
            Select a Specialty{" "}
            <button type="button" className="cursor-pointer ml-2">
              <img
                src={filterDropdownButtonIcon?.src}
                className=""
                alt="load..."
              />
            </button>
          </div>

          <div className="px-3 py-[6px] rounded-[20px] border-[1px] border-[#01549A] ">
            Select your Distance​{" "}
            <button type="button" className="cursor-pointer ml-2">
              <img
                src={filterDropdownButtonIcon?.src}
                className=""
                alt="load..."
              />
            </button>
          </div>

          <div className="px-3 py-[6px] rounded-[20px] border-[1px] border-[#01549A] ">
            Select Sort​{" "}
            <button type="button" className="cursor-pointer ml-2">
              <img
                src={filterDropdownButtonIcon?.src}
                className=""
                alt="load..."
              />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-x-3">
          <div className="px-3 py-[6px] rounded-[20px] border-[1px] text-white font-semibold bg-primary">
            Today, 24 Sept
          </div>

          <div className="px-3 py-[6px] rounded-[20px] text-[#01549A] bg-[#EBEBEB] font-medium border-[1px] border-[#01549A] ">
            Next available
          </div>
        </div>
      </div>

      {/* -------------listing page card portions---------- */}
      <div
        className={`w-full my-6 flex justify-between transition-all duration-700 ease-linear ${
          !isMapExpanded && "  flex-wrap"
        }  relative overflow-hidden`}
      >
        {/* -----------lists sections-------------- */}
        <div
          className={`${
            isMapExpanded ? "w-0 h-[200px] " : "lg:w-[65%]"
          }  space-y-5 transition-all duration-700 ease-linear`}
        >
          {/* ----------------doctor card------------- */}
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          
          {/* ----------------hospital card--------------- */}
          {/* <HospitalCard /> */}
        </div>

        {/* ----------------map portions---------- */}

        <div
          style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
          className={`${
            isMapExpanded ? "w-full" : " lg:w-[35%]  "
          }  h-[650px] p-1  sticky top-[100px] rounded-[20px]  border-[1px] border-gray-500 overflow-hidden transition-all duration-700 ease-linear`}
        >
          <MapContainer
            key={placeLocation.join(",")}
            style={{
              height: "700px",
              width: "100%",
              position: "relative",
              zIndex: "5",
              borderRadius: "20px",
            }}
            center={placeLocation}
            zoom={13}
            ref={mapRef}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              className="relative"
              position={placeLocation}
              eventHandlers={{
                click: handleMarkerClick, // Using eventHandlers
              }}
            >
              <Popup className="bg-red-800 " style={{ width: "%" }}>
                <div className=" m-0 w-[500px]  h-[200px] bg-green-600">sd</div>
              </Popup>
            </Marker>

            <div className="flex gap-x-7 items-center absolute right-1 top-2 z-[700]">
              <button
                onClick={() => {
                  setIsMapExpanded(!isMapExpanded);
                }}
                className="bg-[#F4F4F4] border-2 border-[#C2BFBA]   p-2 py-[10px] rounded-[10px] flex items-center text-sm font-semibold "
              >
                <img
                  src={sliderArrowIcon?.src}
                  className="mr-2 w-2 rotate-180"
                  alt="load..."
                />{" "}
                Expand Map
              </button>
              <MapResetButton currentLocation={placeLocation} />
            </div>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default DoctorListingPage;
