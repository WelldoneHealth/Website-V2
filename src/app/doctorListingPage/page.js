"use client";

import React, { useEffect, useRef, useState } from "react";
import searchIcon from "@/asset/Icons/search.svg";
import ratingIcon from "@/asset/Icons/rating.svg";
import doctorImageBig from "@/asset/Images/doctorImageBig.png";
import hospitalIcon from "@/asset/Icons/hospital_icon.svg";
import doctorBagV2Icon from "@/asset/Icons/doctorBagV2.svg";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import smallHatIcon from "@/asset/Icons/smallHat.svg";
import hospitalOutlineIcon from "@/asset/Icons/hospitalOutline.svg";
import doctorImage2 from "@/asset/Images/doctorImage2.png";
import hospitalImageBig from "@/asset/Images/hospitalImageBig.png";
import doctorIcon from "@/asset/Icons/doctor.svg";
import mapImage from "@/asset/Icons/mapImage.svg";
import filterDropdownButtonIcon from "@/asset/Icons/filterDropdownButton.svg";
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";
import rotatingArrowIcon from "@/asset/Icons/rotatingArrow.svg";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay,useMap, Circle, Rectangle } from "react-leaflet";
// import 'leaflet/dist/leaflet.css'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LatLngBounds } from "leaflet";
import DoctorCard from "@/Utilities/listingPageCards/DoctorCard";
import HospitalCard from "@/Utilities/listingPageCards/HospitalCard";


// ---------------------reset button-------------------
const MapResetButton = ({ currentLocation }) => {
  const map = useMap();   
  return (       
//   <div className="flex gap-x-7 items-center absolute right-1 top-2 z-[700]">
// <button className="bg-[#F4F4F4] border-2 border-[#C2BFBA]   p-2 py-[10px] rounded-[10px] flex items-center text-sm font-semibold " >
//  <img src={sliderArrowIcon?.src} className="mr-2 w-2 rotate-180" alt="load..."  /> Expand Map
//     </button>
      <button className="bg-[#F4F4F4] border-2 border-[#C2BFBA]   p-2 rounded-[10px] flex items-center text-sm font-semibold " onClick={()=> map.setView(currentLocation, 13)} >
   <img src={rotatingArrowIcon?.src} className="mr-2" alt="load..."  /> Reset View
    </button>
  // </div>
  )
}

export default function page() {

  const [isMapExpanded,setIsMapExpanded]=useState(false)


  const [placeLocation, setPlaceLocation] = useState([
    27.574243738524796, 77.64168862650207,
  ]);

  const handleMarkerClick=(e)=>{
console.log("hello")
  }

  const mapRef = useRef(null);

  
  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current; 
      map.invalidateSize(); // Update the map size when the view changes
    }
  }, [isMapExpanded]); 



  // useEffect(()=>console.log(isMapExpanded),[])

  // useEffect(()=>{setPlaceLocation([27.574243738524796, 77.64168862650207])},[])
  const bounds = new LatLngBounds([40.712216, -74.22655], [40.773941, -74.12544])
  useEffect(() => {
    console.log("the new location is", placeLocation);
  }, [placeLocation]);
  const rectangleBounds = [
    [20.993177213245744, 74.31037414942334],  // Southwest corner
    [20.993653817710108, 74.31422237720786]    // Northeast corner
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
          <div className="px-3 py-[6px] rounded-[20px] border-[1px] text-white font-semibold bg-[#01549A]">
            Today, 24 Sept
            {/* <button type='button' className='cursor-pointer ml-2'><img src={filterDropdownButtonIcon?.src} className='' alt="load..." /></button> */}
          </div>

          <div className="px-3 py-[6px] rounded-[20px] text-[#01549A] bg-[#EBEBEB] font-medium border-[1px] border-[#01549A] ">
            Next available
          </div>
        </div>
      </div>

      {/* -------------listing page card portions---------- */}
      <div className={`w-full my-6 flex justify-between transition-all duration-700 ease-linear ${ !isMapExpanded && "  flex-wrap"  }  relative overflow-hidden`}>

{/* -----------lists sections-------------- */}
        <div className={`${
            isMapExpanded ? "w-0" : "lg:w-[65%]"
          } min-h-screen  transition-all duration-700 ease-linear`}>
          {/* ----------------doctor card------------- */}     
<DoctorCard  />
   {/* ----------------hospital card--------------- */}
<HospitalCard  />        
        </div>




{/*london :         51.562861336440584, -0.2900755252434501               */}
{/* mumbau taj:                      18.92182770820119, 72.83309207016369             */}
{/* krishna hotel  :         27.57720624450594, 77.65281687140784           */}
{/* sakri :                   20.993413468795033, 74.31671585316849              */}





        {/* ----------------map portions---------- */}
        
        <div   style={{ boxShadow: "0px 0px 4px 1px #00000040" }}  className={`${
            isMapExpanded ? "w-full" : " lg:w-[35%]  "
          }  h-[650px] p-1  relative rounded-[20px]  border-[1px] border-gray-500 overflow-hidden transition-all duration-700 ease-linear`}>
          {/* <button type="button" onClick={()=>setIsMapExpanded(!isMapExpanded)} className="text-white m-7 rounded-[20px] bg-black font-semibold border-2 border-red-700 p-4" >{!isMapExpanded?"expand":"contract"}</button> */}
          <MapContainer
             key={placeLocation.join(",")}
            style={{ height: "700px", width: "100%",position:"relative" ,zIndex:"5", borderRadius:"20px" }}
            center={placeLocation}
            zoom={13}
            ref={mapRef}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker className="relative" position={placeLocation} eventHandlers={{
          click: handleMarkerClick,  // Using eventHandlers
        }} >
              <Popup className="bg-red-800 " style={{width:"%"}}>
           <div className=" m-0 w-[500px]  h-[200px] bg-green-600">sd</div> 
              </Popup>   
            </Marker>

         

<div className="flex gap-x-7 items-center absolute right-1 top-2 z-[700]">
<button onClick={()=>{
  setIsMapExpanded(!isMapExpanded) 
}} className="bg-[#F4F4F4] border-2 border-[#C2BFBA]   p-2 py-[10px] rounded-[10px] flex items-center text-sm font-semibold " >
 <img src={sliderArrowIcon?.src} className="mr-2 w-2 rotate-180" alt="load..."  /> Expand Map
    </button>
<MapResetButton currentLocation={placeLocation} />
  </div>

     </MapContainer>


 


{/* ----------------lists of doctors----------------- */}
 {/* <div className="w-full absolute bottom-16 z-40 flexCenter gap-x-3 whitespace-nowrap overflow-x-auto ">


{[1,2,3,45].map((item,index)=><div key={index}   style={{ boxShadow: "0px 0px 4px 1px #00000040" }}  className="w-[42%] p-3 bg-[#FFFFFF] text-black rounded-[20px] flex flex-col items-start  gap-y-[2px] flex-shrink-0">
  <img src={doctorImage2?.src} className="w-20 rounded-full" alt="load..." />
  <p className="font-medium text-sm">Dr. Nilesh Bhamare</p>
  <p className="text-xs text-[#646464]" >MBBS</p>
  <p className="text-xs text-[#646464]">Ophthalmic Doctor</p>
  <p className="text-xs text-[#646464]">Shivaji Nagar, pune​</p>
</div>)}  




 ---------------------new doctor popup list on map------------- 
<div  style={{ boxShadow: "0px 0px 4px 1px #00000040" }}  className="p-3 z-40 w-[300px] space-y-3  max-h-[500px] rounded-[20px]  border-[1px] border-gray-500 overflow-y-auto whitespace-nowrap">
{[1,2,3].map((item,index)=><div key={index}  style={{ boxShadow: "0px 0px 4px 1px #00000040" }} className="p-4 rounded-[20px] w-full space-y-2">
  <div className="w-full flex items-center gap-x-3">
    <img src={doctorImage2?.src} className="w-14" alt="load..."  />
    <div className="">
    <p className="font-medium text-base">Dr. Nilesh Bhamare</p>
    <p className="text-xs font-medium text-[#646464]" >MBBS</p>
    <p className="text-xs font-medium text-[#646464]" >Orthopaedic</p>
    </div>
    </div>
    <p className="text-xs font-medium  w-full text-wrap ">
                    <img
                      src={redGeoLocationIcon?.src}
                      className="w-3 mr-2  inline"
                      alt="load..."
                    />
                   352 7th Ave, Ste 601, New York, 700028
                  </p>
                  
                  <button
                type="button"
                className=" mt-6 w-full cursor-pointer py-[6px] flex items-center justify-center bg-[#01549A] text-sm text-white font-medium rounded-[10px] "
              >
                Book Appointment
              </button>
              <button
                type="button"
                className=" mt-6 w-full cursor-pointer py-[6px] flex items-center justify-center  text-sm text-[#01549A] border-[1px] border-[#01549A] font-medium rounded-[10px] "
              >
              View Details
              </button>

</div>)}
</div>

</div>  */}

        </div>


      </div>
    </div>
  );
}
