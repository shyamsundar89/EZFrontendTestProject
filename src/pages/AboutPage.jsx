import React from "react";
import "@fontsource/halant/400.css";
import "@fontsource/island-moments/400.css";
import "@fontsource/instrument-sans/400.css";
import frame23 from "../assets/aboutimg/Frame 23.svg";
import frame22 from "../assets/aboutimg/Frame 22.svg";
import frame9 from "../assets/aboutimg/Frame 9.svg";
import group10 from "../assets/aboutimg/Group 10.svg";
import object from "../assets/aboutimg/OBJECTS.svg";

const AboutPage = () => {
  return (
    <div className=" pt-10" style={{ backgroundColor: "#FBF2EA" }}>
      {/* Halant text */}
      <div className="flex space-x-4 mt-10">
        <div className=" pl-10">
          <p
            className="text-[40px] ml-0"
            style={{ fontFamily: "Halant, serif" }}
          >
            A montage of familiar faces and names.
          </p>

          <p
            className="text-[24px] pl-10 "
            style={{ fontFamily: "Instrument Sans, sans-serif" }}
          >
            Some stories come from the biggest names. <br />
            Others begin with bold, rising voices. <br />
            We’ve been fortunate to walk alongside both – <br />
            listening, creating, and building stories that <br />
            matter.
          </p>
        </div>

        {/* <div className="pl-50 about-text ">
          <p
            className="text-[40px] h-30 w-120 "
            style={{ fontFamily: "Island Moments, cursive" }}
          >
            Every project is more than just a brief – <br />
            it’s a new chapter waiting to be written.
          </p>
          <p
            className="text-[40px] h-50 w-120"
            style={{ fontFamily: "Island Moments, cursive" }}
          >
            Together, we’ve crafted tales that inspire, <br />
            connect, and endure.
          </p>
        </div> */}
      </div>
      <div className="flex ">
        <div className="flex w-[500px]">
          <img src={frame23} alt="" className="h-[233px] w-[200px]" />
          <img
            src={frame22}
            alt=""
            className="h-[233px] w-[200px] -ml-[60px]"
          />
          <img src={frame9} alt="" className="h-[233px] w-[200px] -ml-[60px]" />
        </div>

        <div className="relative h-[400px] w-[400px] ml-100">
          <img src={group10} alt="background" className="  object-cover " />
          <img
            src={object}
            alt="overlay"
            className="absolute top-0 pl-20 w-[350px] h-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
