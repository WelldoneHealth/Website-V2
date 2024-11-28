import React from 'react';
import logo from '@/asset/Images/blueLogoWelldone.png';

import facebook from '@/asset/Icons/facebook.svg';
import insta from '@/asset/Icons/insta.svg';
import linkedin from '@/asset/Icons/linkedin.svg';
import twitter from '@/asset/Icons/twitter.svg';
import Link from 'next/link';

const policyData = [
  { linkTo: '/privacy-policy', text: 'Privacy' },
  { linkTo: '/shipping-return', text: 'Shipping & Return' },
  { linkTo: '/refund-cancellation', text: 'Refund & Cancellation' },
  { linkTo: '/product-checkout', text: 'Product & Checkout' },
];

const companyData = [
  { linkTo: '/about', text: 'About' },
  { linkTo: '/terms-conditions', text: 'Terms & Conditions' },
];

const contactUsData = [
  { linkTo: '/', text: 'Welldone Healthcare Private Limited' },
  { linkTo: '/', text: 'CIN: U85100MH2021PTC354141' },
  { linkTo: '/', text: 'G.NO.9/1, PRASAD NAGAR, BHADANE TAL.SAKRI, Dhule, Dhule, Maharashtra, India, 424304 7757080066' },
  { linkTo: '/', text: 'welldonehealth499@gmail.com' },
];

const socialLinks = [
  {
    linkTo: 'https://www.facebook.com/profile.php?id=100092906130450',
    image: facebook,
  },
  {
    linkTo: 'https://www.instagram.com/welldone_health/',
    image: insta,
  },
  {
    linkTo: 'https://twitter.com/health_welldone',
    image: twitter,
  },
  {
    linkTo: 'https://www.linkedin.com/company/welldone-health/',
    image: linkedin,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className=" w-full bg-gray-900 text-gray-400 px-1">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
          <h3 class="text-2xl font-bold text-white mb-4">Welldone Health</h3>
            {/* <img src={logo?.src} alt="Welldone Health Logo" className="mb-4 w-36" /> */}
            <p className="mb-6">
              Your trusted partner in healthcare. Making quality healthcare accessible to everyone through innovative
              digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <Link href={item.linkTo} passHref key={index} target="_blank">
                  <img
                    src={item.image.src}
                    className="w-6 h-6 cursor-pointer transition-colors hover:text-white"
                    alt="Social Media Icon"
                  />
                </Link>
              ))}
            </div>
            <div className="space-y-4 py-4">
              <div className='flex'>
              <a href="#" className="block pr-2">
                <img
                  className="h-10"
                  src="https://placehold.co/120x40/333333/FFFFFF.png?text=App+Store"
                  alt="Download on App Store"
                />
              </a>
              <a href="#" className="block">
                <img
                  className="h-10"
                  src="https://placehold.co/120x40/333333/FFFFFF.png?text=Google+Play"
                  alt="Get it on Google Play"
                />
              </a>

              </div>
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {policyData.map((item, index) => (
                <li key={index}>
                  <Link href={item.linkTo} className="hover:text-white transition-colors">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {companyData.map((item, index) => (
                <li key={index}>
                  <Link href={item.linkTo} className="hover:text-white transition-colors">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contactUsData.map((item, index) => (
                <li key={index} className={`${index === 3 && 'cursor-pointer'}`}>
                  <Link className='blocl=k text-wrap whitespace-normal break-words' href={item.linkTo}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get App */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Get our App</h4>
            <div className="space-y-4">
              <a href="#" className="block">
                <img
                  className="h-10"
                  src="https://placehold.co/120x40/333333/FFFFFF.png?text=App+Store"
                  alt="Download on App Store"
                />
              </a>
              <a href="#" className="block">
                <img
                  className="h-10"
                  src="https://placehold.co/120x40/333333/FFFFFF.png?text=Google+Play"
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 Welldone Health. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {policyData.map((item, index) => (
                <Link key={index} href={item.linkTo} className="text-sm hover:text-white transition-colors">
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
