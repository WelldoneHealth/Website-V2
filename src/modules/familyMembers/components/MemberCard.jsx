import React from "react";
import {
  Phone,
  MapPin,
  Thermometer,
  Droplet,
  Heart,
  Activity,
  Ruler,
  User,
  Trash2,
} from "lucide-react";

const MemberCard = ({ memberDetails = {}, deleteMember = () => {},patientEditFunc,isOpen }) => {




  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 my-3">
      <div className="w-full h-full p-3 bg-white shadow-sm rounded-lg flex flex-col justify-between border">
        <div className="flex justify-between relative">
          {/* Patient Info */}
          <div className="flex gap-4">
            <img
              alt="pat_img"
              src={
                memberDetails?.avatar ||
                "https://welldonehealth.in/static/media/patient.eebfd104d7f1700c0001.png"
              }
              className="w-12 h-12 bg-white shadow-sm rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <h5 className="font-bold m-0">{`${
                  memberDetails?.first_name ?? ""
                } ${memberDetails?.last_name ?? ""}`}</h5>
                <span className="text-gray-500 text-sm">
                  ({memberDetails?.age},{" "}
                  {memberDetails?.gender?.[0]?.toUpperCase()})
                </span>
                {memberDetails?.relation && (
                  <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                    {memberDetails?.relation}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap mt-2 gap-2">
                {memberDetails?.contact && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded flex items-center gap-1">
                    <Phone size={14} /> {memberDetails?.contact}
                  </span>
                )}
                {memberDetails?.address && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded flex items-center gap-1">
                    <MapPin size={14} /> {memberDetails?.address}
                  </span>
                )}
              </div>
            </div>
          </div>
          

                                 {/* -----------------------patient edit----------------------- */}
{/* <p onClick={()=>{patientEditFunc();isOpen()}} className=" absolute right-0 -top-3 underline underline-offset-2 text-primary cursor-pointer">Edit</p> */}


          {/* Delete Button */}
           <button
            className="text-red-600 pt-5 hover:text-red-800"
            onClick={() => deleteMember(memberDetails)}
          >
            <Trash2 />
          </button>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mt-4">
          {memberDetails?.weight && (
            <span className="bg-gray-100 text-sm px-2 py-1 rounded flex items-center gap-1">
              <Activity size={14} /> {memberDetails?.weight}kg
            </span>
          )}
          {memberDetails?.temperature && (
            <span className="bg-gray-100 text-sm px-2 py-1 rounded flex items-center gap-1">
              <Thermometer size={14} /> {memberDetails?.temperature}°C
            </span>
          )}
          {memberDetails?.low_bp && memberDetails?.high_bp && (
            <span className="bg-gray-100 text-sm px-2 py-1 rounded flex items-center gap-1">
              <Heart size={14} /> {memberDetails?.low_bp}/
              {memberDetails?.high_bp} mm/hg
            </span>
          )}
          {memberDetails?.glucose_level && (
            <span className="bg-gray-100 text-sm px-2 py-1 rounded flex items-center gap-1">
              <Droplet size={14} /> {memberDetails?.glucose_level} mg/DL
            </span>
          )}
          {memberDetails?.pulse && (
            <span className="bg-gray-100 text-sm px-2 py-1 rounded flex items-center gap-1">
              <Activity size={14} /> {memberDetails?.pulse}/min
            </span>
          )}
          {memberDetails?.height && memberDetails?.height_unit && (
            <span className="bg-gray-100 text-sm px-2 py-1 rounded flex items-center gap-1">
              <Ruler size={14} /> {memberDetails?.height}
              {memberDetails?.height_unit}
            </span>
          )}
          {memberDetails?.blood_group && (
            <span className="bg-gray-100 text-sm px-2 py-1 rounded flex items-center gap-1">
              <Droplet size={14} />
              <span className="uppercase">{memberDetails?.blood_group}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
