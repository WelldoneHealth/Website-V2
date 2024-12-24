import React from "react";
import mobileBanner2 from "@/asset/Images/mobileBanner2.png";


export default function MobileAppBanner() {
  const featuresInfo = [
    {
      boldText: "Seamless Booking:",
      text: "Schedule appointments with just a few clicks.",
    },
    {
      boldText: "Personalized Dashboard:",
      text: "Keep track of your health records and appointments.",
    },
    {
      boldText: "Exclusive Updates:",
      text: "Be the first to know about special offers and new services.",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto sm:px-2 lg:px-8 flex flex-col-reverse lg:flex-row items-center lg:items-end">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-4">
            Download Our App for a Smarter Healthcare Experience!
          </h3>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            Join thousands of users who trust our app to manage their health
            efficiently. Stay connected, stay healthy!
          </p>

          <div className="mb-6">
            <p className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
              Why Choose Our App?
            </p>
            <ul className="space-y-1">
              {featuresInfo.map((item, index) => (
                <li key={index} className="text-gray-600 text-sm sm:text-base">
                  <span className="font-semibold text-gray-900">
                    {item.boldText}
                  </span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Download Buttons */}
          {/* <div className="flex justify-center lg:justify-start gap-4 mb-6">
            <Link
              href="https://play.google.com/store/apps/details?id=com.welldone.welldone_app&hl=en_IN"
              passHref
              target="_blank"
            >
              <img
                src={GOOGLE_PLAY}
                alt="Download on Google Play"
                className="w-36 sm:w-40 hover:scale-105 transition-transform"
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.welldone.welldone_app&hl=en_IN"
              passHref
              target="_blank"
            >
              <img
                src={APPLE_STORE}
                alt="Download on the App Store"
                className="w-36 sm:w-40 hover:scale-105 transition-transform"
              />
            </Link>
          </div> */}

          {/* Newsletter Subscription */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-base font-medium text-gray-900 mb-3">
              Subscribe to Our Newsletter
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="submit"
                className="bg-[#005499] text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 max-w-lg mx-auto lg:ml-auto mb-6 lg:mb-0">
          <img
            src={mobileBanner2?.src}
            alt="Mobile App Banner"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
