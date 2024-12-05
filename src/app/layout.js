import localFont from "next/font/local";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// In pages/_app.js or pages/_document.js
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import Navbar from "@/components/Layout/Navbar/Navbar";
// import Head from "next/head";
import Providers from "./providers";
import Footer from "@/components/Layout/Footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
// import 'leaflet/dist/leaflet.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Welldone Health",
  description: "Transform Your Practice with an Efficient Appointment Booking Platform",
  icons: {
    icon: "./favicon.ico", // Path to your favicon file
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // For Apple touch devices (optional)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      {/* <Head>
   <script src="https://kit.fontawesome.com/65eba670e4.js" crossorigin="anonymous" onLoad={()=>console.log("the scrpt has vbeen loaded")} ></script>
      </Head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <NextTopLoader />
          <main className=" mx-auto lg:container mt-[60px]  md:mt-[68px] min-h-[calc(100vh-100px)] ">
            <Toaster />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
