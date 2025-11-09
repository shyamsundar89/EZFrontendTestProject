import React from "react";
import { Link } from "react-router-dom";
import FilmProduction03 from "../assets/team/Frame 31 (1).svg";
import brandingimg from "../assets/team/Frame 32.svg";
import girlimg from "../assets/aboutimg/Frame 33.svg";

export default function Services() {
  const services = [
    {
      title: "Film Production",
      img: brandingimg,
      link: "/services/film-production",
      desc: "Bringing stories to life with cinematic excellence.",
    },
    {
      title: "Branding",
      img: FilmProduction03,
      link: "/services/branding",
      desc: "Building brands that speak and connect with audiences.",
    },
    {
      title: "Art Curation",
      img: brandingimg,
      link: "/services/art-curation",
      desc: "Curating meaningful artistic experiences and exhibitions.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#fbf2ea] px-6 py-16 md:px-16">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          The storyboard reveals the breadth of our craft.
        </h2>

        {/* Card Container */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="overflow-hidden flex justify-center bg-gray-50">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>

                <div className="mt-4">
                  <span className="inline-flex items-center text-indigo-600 font-medium text-sm group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Full width bottom image with same background */}
      <div className="w-full bg-[#fbf2ea] mb-0">
        <img
          src={girlimg}
          alt="Creative illustration"
          className="w-full object-contain"
        />
      </div>
    </>
  );
}
