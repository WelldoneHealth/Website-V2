import React from "react";
import brainIcon from "@/asset/Icons/brain.svg";
import dermaIcon from "@/asset/Icons/derma.svg";
import teethIcon from "@/asset/Icons/teeth.svg";
import babyIcon from "@/asset/Icons/baby.svg";
import virusIcon from "@/asset/Icons/virus.svg";
import allergiesIcon from "@/asset/Icons/allergies.svg";
import Link from "next/link";

const servicesData = [
  {
    icon: dermaIcon,
    title: "Dermatology",
    description: "Expert skin care and treatment services",
    itemId: 417,
  },
  {
    icon: brainIcon,
    title: "Neurology",
    description: "Comprehensive neurological care",
    itemId: 479,
  },
  {
    icon: teethIcon,
    title: "Dentist",
    description: "Complete dental care solutions",
    itemId: 416,
  },
  {
    icon: babyIcon,
    title: "Paediatrics",
    description: "Specialized care for children",
    itemId: 516,
  },
  {
    icon: virusIcon,
    title: "HIV/AIDS",
    description: "Specialized treatment and support",
    itemId: 516,
  },
  {
    icon: allergiesIcon,
    title: "Allergy",
    description: "Allergy testing and treatment",
    itemId: 386,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Doctor Speciality
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 group"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-[#d0eaff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src={service.icon.src}
                    alt={service.title}
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  href={`/search-listing?is_hospital=false&practice-specialty=${service.itemId}`}
                  passHref
                  target="_blank"
                >
                  <button className="mt-4 px-6 py-2 text-primary-600 border border-primary-600 rounded-full hover:bg-[#005499] hover:text-white transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#005499] text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors inline-flex items-center">
            View All Specialties
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
