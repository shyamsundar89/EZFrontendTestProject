import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HeroPage from "./HeroPage";
import AboutTeamPage from "./AboutTeamPage";
import AboutPage from "./AboutPage";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function HomePage() {
  const portfolioRef = useRef(null);
  const pages = [
    { name: "Hero", path: "/" },
    { name: "About Team", path: "/about-team" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Film Production", path: "/services/film-production" },
    { name: "Branding", path: "/services/branding" },
    { name: "Art Curation", path: "/services/art-curation" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Contact Form", path: "/contact-us" },
  ];

  useEffect(() => {
    // This will run when the component mounts (i.e., when the page loads)
    fetch(import.meta.env.VITE_NOTIFY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "/",
      },
      body: JSON.stringify({
        name: "Shyam Sundar",
      }),
    });
    // .then((res) => res.json())
    //  .then((data) => {
    //   console.log("Notification API response:", data);
    // })
    // .catch((error) => {
    //   console.error("Error calling notify API:", error);
    // });
  }, []);

  return (
    <>
      <HeroPage />
      <AboutTeamPage />
      <AboutPage />
      <Services />
      <Portfolio />
      <Contact />

      {/* <div className="min-h-screen bg-[#FDD0C1] flex flex-col items-center justify-center p-10 space-y-8">
        <h1 className="text-5xl font-bold text-[#001F3F] mb-8 text-center">
          Welcome to <span className="text-[#E43D12]">V Films</span>
        </h1>

        <p className="text-lg text-[#001F3F]/80 mb-10 text-center max-w-xl">
          Explore our world of storytelling — from film production and branding
          to art curation. Choose a page to begin your journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              to={page.path}
              className="bg-white/70 hover:bg-white text-[#001F3F] font-medium py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div> */}
    </>
  );
}
