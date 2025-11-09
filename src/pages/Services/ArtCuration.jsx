import React from "react";
import "./ArtCuration.css";
import Frame32 from "../../assets/Artimg/Services/Frame 32.svg";
import artculimg1 from "../../assets/Artimg/Services/Art Curation Icons 03.svg";
import artculimg2 from "../../assets/Artimg/Services/Services/Art Curation Icons 04.svg";
import artculimg3 from "../../assets/hero/Services/Art Curation Icons 02.svg"; // left-side icon
import articulimg4 from "../../assets/hero/Services/Services/Art Curation Icons 01.svg";
import { Link } from "react-router-dom";

export default function ArtCuration({
  quote = "“V take art where it belongs, to the people.” – Vernita Verma",
  backText = "Back",
  bullets = [
    "Art Festivals",
    "Live Performances",
    "Community Events",
    "Cultural Storytelling",
  ],
  decoTopRight = "artculation.svg",
  decoMidRight = "artculation2.svg",
  decoBottomRight = "artculation3.svg",
  decoBottomLeft = "artculation4.svg",
}) {
  return (
    <section className="ac-page" aria-label="Art Curation detail">
      {/* Header */}
      {/* <header className="ac-header">
        <a className="ac-logo" href="#" aria-label="V Films home">
          <span className="v">V</span>Films
        </a>
        <button className="ac-hamburger" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header> */}

      <main className="ac-shell">
        {/* Quote */}
        <blockquote className="ac-quote">{quote}</blockquote>

        {/* Back button */}
        <Link to="/">
          {" "}
          <button className="ac-back" type="button" aria-label="Go back">
            <span className="ac-back-icon" aria-hidden="true" />
            {backText}
          </button>
        </Link>

        {/* Main content */}
        <div className="ac-grid">
          {/* Frame + Left-side icon */}
          <div className="relative inline-block">
            {/* ✅ Left-side image using Tailwind */}
            <img
              src={artculimg3}
              alt="Decorative art curation icon"
              className="absolute left-[-130px] top-3/4 -translate-y-1/2 w-[140px] h-auto"
            />
            <img
              src={Frame32}
              alt="Art curation illustration"
              className="w-full h-auto"
            />
          </div>

          {/* Text content */}
          <section className="ac-copy" aria-label="Art curation description">
            <div className="flex">
              <div>
                <p>
                  Art isn’t meant to sit on distant walls – it’s <br />
                  meant to breathe, to travel, to belong. <br />
                </p>
                <p>
                  Through every festival, every performance, <br />
                  and every gathering, we help stories find <br />
                  their stage and their people.
                </p>
              </div>
              <div className="pl-60 ">
                <img src={artculimg1} alt="" className="h-25 w-25" />
              </div>
            </div>

            <div className="flex">
              <div>
                <p className="ac-craftsLead">V curates:</p>
                <ul className="ac-list">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="pl-50">
                <img src={articulimg4} alt="" className="h-20 w-20" />
              </div>
            </div>

            <div className="flex">
              <div>
                <a href="#" className="ac-explore" aria-label="Explore now">
                  Explore Now
                  <span className="ac-arrow" aria-hidden="true" />
                </a>
              </div>
              <div className="pl-80">
                <img src={artculimg2} alt="" className="h-25 w-25" />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Decorative SVGs */}
      <img
        className="ac-deco tr"
        src={decoTopRight}
        alt=""
        aria-hidden="true"
      />
      <img
        className="ac-deco mr"
        src={decoMidRight}
        alt=""
        aria-hidden="true"
      />
      <img
        className="ac-deco br"
        src={decoBottomRight}
        alt=""
        aria-hidden="true"
      />
      <img
        className="ac-deco bl"
        src={decoBottomLeft}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}
