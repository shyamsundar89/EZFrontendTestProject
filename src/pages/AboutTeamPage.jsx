import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import group9 from "../assets/team/Group 9.svg";
import indiaGate from "../assets/team/indiagate.svg";
import group2 from "../assets/team/Group 2.svg";
import vector1 from "../assets/team/Vector (1).svg";
import vector2 from "../assets/team/Vector (2).svg";
import vector3 from "../assets/team/Vector.svg";

export default function AboutTeamPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      className={`st-page min-h-screen w-full bg-[#fbf2ea] text-[#1f2f44] font-serif overflow-x-hidden transition-opacity duration-700 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <main className="flex flex-col md:flex-row justify-between items-start px-6 md:px-16 py-10 gap-10 md:gap-16">
        {/* LEFT SECTION */}
        <section className="flex flex-col items-center md:items-start space-y-10 relative">
          <div className="relative">
            <img
              src={group9}
              alt="Sticky note with storytelling text"
              className="w-[280px] sm:w-[320px] md:w-[350px]"
            />
          </div>

          <div className="pt-8">
            <img
              src={indiaGate}
              alt="India Gate illustration"
              className="w-[200px] sm:w-[220px] md:w-[250px]"
            />
          </div>
        </section>

        {/* RIGHT SECTION */}
        <section className="flex flex-col items-center md:items-start space-y-10 relative mt-10 md:mt-0 w-full md:w-auto">
          <div className="relative w-full md:w-[400px]">
            <img
              src={group2}
              alt="Team silhouettes"
              className="w-[250px] sm:w-[300px] md:w-[400px] drop-shadow-lg mx-auto md:mx-0"
            />

            {/* Film Makers */}
            <div className="absolute -top-6 left-1/2 md:left-[25%] transform -translate-x-1/2 text-center">
              <p className="italic text-sm sm:text-base md:text-lg">
                Film Makers
              </p>
              <img src={vector3} alt="" className="w-16 sm:w-20 mx-auto mt-1" />
            </div>

            {/* Branding Experts */}
            <div className="absolute bottom-0 -left-8 sm:-left-16 text-center">
              <img
                src={vector1}
                alt=""
                className="w-16 sm:w-20 mx-auto mt-8 sm:mt-20"
              />
              <p className="italic text-sm sm:text-base md:text-lg mt-1">
                Branding Experts
              </p>
            </div>

            {/* Art Curators */}
            <div className="absolute top-4 right-0 sm:right-4 md:right-0 text-center">
              <p className="italic text-sm sm:text-base md:text-lg">
                Art Curators
              </p>
              <img src={vector2} alt="" className="w-16 sm:w-20 mx-auto mt-1" />
            </div>
          </div>

          {/* CTA */}
          <section className="text-center pt-5 px-4 md:px-0">
            <p className="text-base sm:text-lg md:text-xl font-medium mb-4">
              Take a closer look at the stories{" "}
              <span className="font-bold text-[#E43D12]">V</span> bring to life.
            </p>
            <Link to="/portfolio">
              <button className="bg-[#E43D12] hover:bg-[#ff6740] text-white font-semibold py-2 px-6 rounded-full shadow-md transition-colors duration-300">
                View Portfolio
              </button>
            </Link>
          </section>
        </section>
      </main>
    </div>
  );
}
