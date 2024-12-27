
import React from 'react';

export default function FamilyPageSkeleton() {
  return (
    <div className="w-screen mx-auto max-w-[1600px] px-2 sm:px-3 lg:px-[2rem] py-[1px] mt-24 mb-7 ">
 <div class="mb-6 ml-3 h-5 w-[80%] asm:w-[350px] bg-gray-200 rounded skeleton "></div>        
      <div className="mx-auto mt-1  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {/* Boxes */}
        <FamilyMemberCard />
        <FamilyMemberCard />
        <FamilyMemberCard />
        <FamilyMemberCard />
      
      
        
      </div>
    </div>
  );
}

const FamilyMemberCard = () => (
  <div className="w-full max-w-[520px] mx-auto px-4 py-4 border rounded-lg shadow-md bg-white">
    <div className="flex items-center gap-x-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full skeleton"></div>
      <div className="flex-1 space-y-3">
        <div className="flex gap-2">
          <div className="h-4 w-1/2 bg-gray-200 rounded skeleton"></div>
          <div className="h-4 w-[30px] bg-gray-200 rounded skeleton"></div>
        </div>
        <div className="h-4 w-1/3 bg-gray-200 rounded skeleton"></div>
      </div>
    </div>
    <div className="mt-7 flex gap-x-5">
      <div className="h-5 w-28 bg-gray-200 rounded skeleton"></div>
      <div className="h-5 w-28 bg-gray-200 rounded skeleton"></div>
    </div>
  </div>
);

