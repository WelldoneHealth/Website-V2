import Image from 'next/image';
import clockIcon from "@/asset/Icons/clock2.svg";
import bellIcon from "@/asset/Icons/bell.svg";
import calenderIcon from "@/asset/Icons/calander.svg";

export default function Specialties() {
    
  return (
    <section id="specialties" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Health, One Tap Away!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book doctor appointments faster and manage your health on the go with our app.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <img src={calenderIcon.src} className="h-12 w-12" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Booking</h3>
            <p className="text-gray-600">Find and book appointments in just a few taps.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <img src={clockIcon.src} className="h-12 w-12" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Access</h3>
            <p className="text-gray-600">Manage appointments anytime, anywhere.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <img src={bellIcon.src} className="h-12 w-12" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Reminders & Alerts</h3>
            <p className="text-gray-600">
              Get notified about upcoming appointments and health tips.
            </p>
          </div>
        </div>

        {/* Download Section */}
        {/* <div className="text-center mt-12">
          <p className="text-lg font-semibold text-gray-900 mb-6">
            Download Now for Instant Access
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Image
              src="/Images/googlePlay.png"
              alt="Get it on Google Play"
              width={200}
              height={56}
              className="h-14 w-auto cursor-pointer hover:opacity-90 transition-opacity"
            />
            <Image
              src="/Images/appleButton.png"
              alt="Download on App Store"
              width={200}
              height={56}
              className="h-14 w-auto cursor-pointer hover:opacity-90 transition-opacity"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
