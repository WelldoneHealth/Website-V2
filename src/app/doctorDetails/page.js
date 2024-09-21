
"use client"
import React from 'react'
import doctorDetailsImage from "@/asset/Images/doctorDetailsImage.png"
import certificateImage1 from "@/asset/Images/certificate1.png"
import certificateImage2 from "@/asset/Images/certificate2.png"
import certificateImage3 from "@/asset/Images/certificate3.png"
import certificateImage4 from "@/asset/Images/certificate4.png"
import clockIcon from "@/asset/Icons/clock.svg"


export default function page() {

const educationalData=[
    {
        eduType: "Bachelor of Surgery (MBBS)" ,
        eduCollage: "harvard medical school"
    },  {
        eduType: "Master of Surgery (MS)",
        eduCollage: "Indiana University School of Medicine"
    },  {
        eduType:"Bachelor of Dental Surgery (MDS)" ,
        eduCollage: "University of Colorado School of Medicine"
    },  {
        eduType: "Diplomate of National Board (DNB)",
        eduCollage: "University of Michigan Medical School"
    }
]



  return (
   <>
   
   <div className="w-full max-w-[1800px] mx-auto px-1  asm:px-3 lg:px-0  mt-8 flex  flex-col lg:flex-row lg:justify-between justify-center  lg:items-start  gap-x-7">

<div className="w-full lg:w-[68%]  ">

{/* -----doctor detail scetion---------- */}
<div className="w-full flex flex-col max-md:items-center md:flex-row   gap-x-6 gap-y-8 ">
<div className="w-[60%] asm:w-[50%] sm:w-[42%] md:w-[38%] lg:w-[35%]  overflow-hidden">
    <img src={doctorDetailsImage?.src} className='w-full rounded-md' alt="load..." />
</div>
<div className=" flex-1   ">
<div className="flex gap-x-3">
    <div className="border-2 flexCenter rounded-md cursor-pointer text-base font-medium px-2 py-[2px] border-[#E8E8E8] hover:bg-[#01549A] hover:text-white hover:border-transparent  text-[#01549A]">Haematology</div>
    <div className="bg-[#01549A] rounded-md text-base font-medium  flex justify-center items-center min-w-[100px] text-white cursor-pointer hover:text-[#01549A] hover:bg-white border-2 border-[#01549A]">(124)</div>
</div>
<h3 className= 'my-3  text-[#01549A] font-semibold text-[26px] '>Dr. Roksana Rahman</h3>
<div className="flex flex-col gap-y-3 ">
    <p className='text-[#A7A7A7] font-normal text-base '>MDS - Periodontology and Dentist, Dental Surgeon</p>
<p className='text-[#A7A7A7] font-normal text-base' >Georgia, USA</p></div>
<hr className='my-7  w-[95%]' />
<p className='w-full lg:w-[95%] text-[#A7A7A7] font-normal text-base leading-relaxed ' >Nullam posuere arcu in nisi gravida commodo a sit amet dolor. Quisque imperdiet nisl sed ante ultrices auctor. Nulla odio lacus, auctor sed tortor in, auctor imperdiet erat. Cras dignissim quis metus nec accumsan.</p>
<div className="my-2 flex justify-between items-center flex-wrap gap-y-3 ">
    <div className="">
            <div className="">
                {/* --img */}
                </div>
                <div className="">
                    <p className='text-[#A7A7A7] font-normal text-base'><i className="fas fa-camera"></i>Our Call Service!</p>
                    <p className='text-[#01549A] text-lg asm:text-[22px] font-semibold'>+99 00 555 222 33</p>
                </div>
    </div>
    <div className="mx-2 flex gap-x-2">
        {/* --icons- */}
        <div className="w-8 h-8 rounded-full cursor-pointer hover:bg-[#01549A] bg-[#EFF8FF]"></div>
        <div className="w-8 h-8 rounded-full cursor-pointer hover:bg-[#01549A] bg-[#EFF8FF]"></div>
        <div className="w-8 h-8 rounded-full cursor-pointer hover:bg-[#01549A] bg-[#EFF8FF]"></div>
    </div>
</div>

</div>

</div>

{/* ------about section------------- */}
<div className="w-full my-9">
    <h3 className=' my-3 text-2xl text-[#01549A] font-semibold'>About Me</h3>
    {/* <div className="space-y-7 mb-3">
        <p className='text-base font-normal text-[#A7A7A7] '>Integer sit amet magna fringilla, consequat odio ac, varius tellus. Etiam eget varius dolor, et sodales quam. Mauris ut sapien diam. Nam imperdiet fringilla dui, id varius purus ultricies eget. Aliquam venenatis, est ac porttitor finibus, lectus magna semper diam, eu cursus mi diam posuere erat. Cras porttitor, velit vitae gravida fringilla, felis erat semper nulla, eu tristique sem nisi quis velit. Mauris interdum, mi nec vulputate vehicula, magna augue tempus massa, egestas accumsan justo lacus eu velit. In sed magna felis. In quis nibh ut ipsum aliquam tincidunt.Integer sit amet magna fringilla, consequat odio ac, varius tellus. Etiam eget varius dolor, et sodales quam. Mauris ut sapien diam. Nam imperdiet fringilla dui, id varius purus ultricies eget. Aliquam venenatis, est ac porttitor finibus</p>
        <p className='text-base font-normal text-[#A7A7A7]'>Cras blandit mauris leo. Sed sagittis id felis eu viverra. Nulla non ligula a sapien laoreet accumsan. Morbi egestas tincid unt tellus sed vulputate. Praesent fringilla, ex quis vulputate accumsan, nibh elit porttitor diam, sed vehicula mi lacus et magna. Mauris fringilla massa nec nisl facilisis bibendum. Mauris eu felis odio.</p>
    </div> */}
    <div className="flex justify-center max-md:flex-wrap gap-x-2 gap-y-4 md:gap-x-4 mt-8 ">
        {[certificateImage1,certificateImage2,certificateImage3,certificateImage4].map((item,index)=><div key={index} className="imgAnimate w-[99%] relative  overflow-hidden cursor-pointer asm:w-[48%] md:w-1/4">
            <img src={item?.src} className='w-full ' alt="load..." />
            {/* <div className="absolute w-full h-full inset-0 bg-green-500 -top-full hover:top-0 opacity-90 transition-all duration-500 ease-in-out flex justify-center items-center">
    <div className="w-12 h-12 bg-white rounded-full"></div>
  </div> */}
        </div>)}
       
    </div>
</div>

{/* -------specialities--- */}
<div className="w-full my-5">
    <h3 className=' my-3 text-2xl text-[#01549A] font-semibold'>Specialities</h3>
    <div className=" ">
        <p className='text-base font-normal text-[#A7A7A7]'>Integer sit amet magna fringilla, consequat odio ac, varius tellus. Etiam eget varius dolor, et sodales quam. Mauris ut sapien diam. Nam imperdiet fringilla dui, id varius purus ultricies eget. Aliquam venenatis, est ac porttitor finibus, lectus magna semper diam, eu cursus mi diam posuere erat.</p>
      <div className="">
        {/* ------speciality boxes-------- */}
        {["Obstetrics & Gynecology","Dermatology","General Dentistry"].map((item,index,arrLen)=><div key={index} className={`my-4 w-full md:w-[70%]     flex gap-x-14 items-center   ${index!==(arrLen.length-1) && " border-b-[1px] border-[#E5EBF1]"}`}>
            <div className=" my-7  flex flex-col gap-y-5 ">
                <h5 className='text-[#01549A] text-base font-semibold'>{item}</h5>
                <p className='text-base  font-normal text-[#A7A7A7]'>Pellentesque sit amet urna justo. Fusce velit nibh commdo vestibulum condimentu.</p>
            </div>
            <div className="rounded-full  max-sm:hidden p-6 bg-[#F2F5F8] border-l-[12px] border-[#E5EBF1]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_815_3071)"><path d="M25.7725 0.739953C23.0832 -0.782714 19.6352 0.134619 18.0872 2.78662C17.3379 4.06929 17.1379 5.56395 17.5245 6.99462C17.9139 8.43862 18.8512 9.64262 20.1632 10.3866L20.3579 10.492L19.0925 11.7573C17.9592 12.892 17.3352 14.3973 17.3352 16V32H18.6685V16C18.6685 14.7533 19.1539 13.5813 20.0352 12.7L20.9525 11.7826C20.9485 11.7906 20.9445 11.7986 20.9405 11.8066C19.5512 14.4453 20.5232 17.784 23.2125 19.3066C24.0899 19.7786 25.0299 20.004 25.9525 20.004C27.8805 20.004 29.7312 19.02 30.7619 17.2533C31.8165 15.4466 32.0019 13.7066 32.0019 10.7186C32.0019 7.60129 30.3645 3.34395 25.7725 0.739953ZM29.6085 16.5813C28.4472 18.5706 25.9139 19.2506 23.7619 18.088C21.7979 16.9746 21.0605 14.436 22.1179 12.4266C23.1539 10.46 21.5979 9.63862 21.0112 9.32929L20.8179 9.22529C19.8179 8.65862 19.1045 7.74262 18.8099 6.64662C18.5179 5.56262 18.6699 4.43062 19.2365 3.45729C20.0312 2.09595 21.4819 1.33329 22.9712 1.33329C23.6992 1.33329 24.4379 1.51595 25.1125 1.89862C29.2059 4.21862 30.6645 7.97595 30.6645 10.7173C30.6645 13.5186 30.5112 15.0293 29.6072 16.58L29.6085 16.5813Z" fill="#59D3C2"></path><path d="M11.6427 10.492L11.8373 10.3866C13.1493 9.64262 14.0867 8.43729 14.476 6.99462C14.8613 5.56395 14.6613 4.06929 13.912 2.78662C12.364 0.134619 8.916 -0.782714 6.228 0.739953C1.636 3.34262 0 7.60129 0 10.7186C0 13.7066 0.185333 15.4466 1.24 17.2533C2.26133 19.004 4.088 19.9866 6.03067 19.9866C6.98533 19.9866 7.968 19.7493 8.89467 19.2493C11.4787 17.784 12.4507 14.4453 11.0613 11.8066C11.0573 11.7986 11.0533 11.7906 11.0493 11.7826L11.9667 12.7C12.848 13.5813 13.3333 14.7546 13.3333 16V32H14.6667V16C14.6667 14.3973 14.0427 12.8906 12.9093 11.7573L11.6427 10.492ZM8.156 18.1333C6.08267 19.2506 3.55067 18.568 2.39067 16.5813C1.48533 15.0293 1.33333 13.5186 1.33333 10.7186C1.33333 7.97729 2.792 4.21995 6.88533 1.89995C7.56133 1.51595 8.29867 1.33462 9.02667 1.33462C10.5173 1.33462 11.968 2.09729 12.7613 3.45862C13.3293 4.43062 13.4813 5.56395 13.188 6.64795C12.892 7.74395 12.18 8.65995 11.18 9.22795L10.9867 9.33195C10.4013 9.64129 8.84533 10.4626 9.88 12.4293C10.9373 14.4373 10.2 16.976 8.156 18.1333Z" fill="#59D3C2"></path></g><defs><clipPath id="clip0_815_3071"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>
            </div>
        </div>)}       
      </div>
    </div>
   
</div>

{/* ------------education section----------- */}
<div className="w-full my-7">
    <h3 className=' my-3 text-2xl text-[#01549A] font-semibold'>Education</h3>
    <div className="space-y-7 mb-6 ">
        <p className='text-base font-normal text-[#A7A7A7] '>Integer sit amet magna fringilla, consequat odio ac, varius tellus. Etiam eget varius dolor, et sodales quam. Mauris ut sapien diam. Nam imperdiet fringilla dui, id varius purus ultricies eget. Aliquam venenatis, est ac porttitor finibus, lectus magna semper diam, eu cursus mi diam posuere erat.</p>
        <p className='text-base font-normal text-[#A7A7A7]'>Cras blandit mauris leo. Sed sagittis id felis eu viverra. Nulla non ligula a sapien laoreet accumsan. Morbi egestas tincid unt tellus sed vulputate. Praesent fringilla, ex quis vulputate accumsan, nibh elit porttitor diam, sed vehicula mi lacus et magna. Mauris fringilla massa nec nisl facilisis bibendum. Mauris eu felis odio</p>
    </div>
   <div className=" my-14 ml-0 max-sm:ml-2  w-full flex flex-wrap  gap-y-6">
    {/* -----------education cards------------ */}
   {educationalData.map((item,index)=><div key={index} className="w-full md:w-1/2  flex items-center gap-x-2">
        <div className="bg-[#01549A] w-16 h-16 flexCenter rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40" fill="none"><path d="M15 20C20.515 20 25 15.515 25 10C25 4.485 20.515 0 15 0C9.485 0 5 4.485 5 10C5 15.515 9.485 20 15 20ZM15 1.66667C19.595 1.66667 23.3333 5.405 23.3333 10C23.3333 14.595 19.595 18.3333 15 18.3333C10.405 18.3333 6.66667 14.595 6.66667 10C6.66667 5.405 10.405 1.66667 15 1.66667ZM15 23.3333C6.72833 23.3333 0 30.0617 0 38.3333V39.1667C0 39.6267 0.373333 40 0.833333 40C1.29333 40 1.66667 39.6267 1.66667 39.1667V38.3333C1.66667 33.4117 4.355 29.1133 8.33333 26.8033V31.785C6.9 32.1583 5.83333 33.4517 5.83333 35C5.83333 36.8383 7.32833 38.3333 9.16667 38.3333C11.005 38.3333 12.5 36.8383 12.5 35C12.5 33.4517 11.4333 32.1583 10 31.785V25.9817C11.545 25.3533 13.2317 25 15 25C16.7683 25 18.455 25.3533 20 25.9817V31.7517C18.1 32.1383 16.6667 33.8217 16.6667 35.8333V39.1667C16.6667 39.6267 17.04 40 17.5 40C17.96 40 18.3333 39.6267 18.3333 39.1667V35.8333C18.3333 34.455 19.455 33.3333 20.8333 33.3333C22.2117 33.3333 23.3333 34.455 23.3333 35.8333V39.1667C23.3333 39.6267 23.7067 40 24.1667 40C24.6267 40 25 39.6267 25 39.1667V35.8333C25 33.82 23.5667 32.1383 21.6667 31.7517V26.805C25.645 29.115 28.3333 33.4117 28.3333 38.335V39.1683C28.3333 39.6283 28.7067 40.0017 29.1667 40.0017C29.6267 40.0017 30 39.6283 30 39.1683V38.335C30 30.0633 23.2717 23.335 15 23.335V23.3333ZM10.8333 35C10.8333 35.92 10.0867 36.6667 9.16667 36.6667C8.24667 36.6667 7.5 35.92 7.5 35C7.5 34.08 8.24667 33.3333 9.16667 33.3333C10.0867 33.3333 10.8333 34.08 10.8333 35Z" fill="white"></path></svg>
        </div>
        <div className="flex-1">
            <p className='text-[#01549A] text-xl sm:text-[17px] md:text-xl font-semibold'>{item?.eduType}</p>
            <p className='text-[#A7A7A7] font-normal text-base'>{item?.eduCollage}</p>
        </div>
    </div>) }
   
   </div>
</div>

</div>

{/* -------------appointement section */}
<div className="flex-1  lg:w-[90%]">
    {/* -----appointemnet part-------- */}
<div className="w-full h-auto bg-[#F2F5F8] rounded-md px-4 sm:px-7 py-5 ">
<p className='text-[26px] font-medium text-[#01549A]'>Doctor Visit <span className='text-[#59D3C2]'>$20</span></p>
<p className='my-3 text-[#858585] font-medium'>Sunday to Friday: <span className='text-red-500'>10:00am - 02:00pm</span></p>
<div className="my-5 space-y-6 w-full">
    <div className="w-full rounded-md bg-white flex gap-x-3 px-7 py-5">
        <img src={clockIcon?.src} className='w-4'  /><input type="date" className='text-[#B6B6B6] outline-none' placeholder='dd-mm-yyyy'  />
    </div> 
    <div className="w-full rounded-md bg-white flex gap-x-3 px-7 py-5">
        <img src={clockIcon?.src} className='w-4'  /><input type="text" className='text-[#B6B6B6] outline-none' placeholder='08:00 AM'  />
    </div> 
    <div className="w-full rounded-md bg-white flex gap-x-3 px-7 py-5">
        <img src={clockIcon?.src} className='w-4'  /><input type="text" className='text-[#B6B6B6] outline-none' placeholder='Patient Name'  />
    </div> 
<button type="button" className='w-full flexCenter  rounded-md bg-[#01549A] font-normal hover:bg-opacity-90 text-white px-7 py-5 cursor-pointer'  >Book Appointement</button>
</div>
<div className="">
    <h6 className='text-[#023C77] font-medium'>Select Service</h6>
    <div className="flex my-3 gap-x-5 ">
    {[1,2,3].map((item,index)=>  <span key={index} className="  px-2 py-1 rounded-md  hover:bg-[#01549A] hover:text-white cursor-pointer transitiona-all linear duration-300   text-[13px]   border-[1px] hover:border-transparent border-[#898989]">Consult</span>)}
    </div>
</div> 
</div>
{/* -----------------social icons-------- */}
<div className="my-5 w-full  border-[1px] border-[#A7A7A7] rounded-md px-4 sm:px-7 py-5 ">
<p className='text-[26px]  font-medium text-[#023C77]'>Social Icon</p>

<div className="my-2 flex flex-wrap gap-x-4 gap-y-2 ">
        {/* --icons- */}
        <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-[#01549A] bg-[#EFF8FF]"></div>
        <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-[#01549A] bg-[#EFF8FF]"></div>
        <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-[#01549A] bg-[#EFF8FF]"></div>
        <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-[#01549A] bg-[#EFF8FF]"></div>
     
     
    </div>
</div>

</div>
   </div>


   </>
  )
}
