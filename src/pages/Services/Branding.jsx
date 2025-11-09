import React from "react";
import "./Branding.css";
import Frame34 from "../../assets/team/Frame 34.svg";
import brandingvec from "../../assets/vector/Branding Vector 04.svg";
import brandingvec03 from "../../assets/vector/services/services/Branding Vector 03.svg";
import brandingvec04 from "../../assets/vector/services/Branding Vector 01.svg";
import { Link } from "react-router-dom";

export default function Branding({
  quote = "“A brand is a voice, and a product is a souvenir.” – Lisa Gansky",
  backText = "Back",
  bullets = [
    "Branding & Communication",
    "Market Mapping",
    "Content Management",
    "Social Media Management",
    "Rebranding",
  ],
}) {
  return (
    <section className="bd-page" aria-label="Branding detail">
      {/* Header */}
      {/* <header className="bd-header">
        <a className="bd-logo" href="#" aria-label="V Films home">
          <span className="v">V</span>Films
        </a>
        <button className="bd-hamburger" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header> */}

      <main className="bd-shell">
        {/* Quote */}
        <blockquote className="bd-quote">{quote}</blockquote>

        {/* Back button */}
        <Link to="/">
          <button className="bd-back" type="button" aria-label="Go back">
            <span className="bd-back-icon" aria-hidden="true" />
            {backText}
          </button>
        </Link>

        {/* Grid layout */}
        <div className="bd-grid">
          {/* Image card (no caption) */}
          <figure className="bd-card">
            <div className="bd-photoWrap">
              <img
                className="bd-photo"
                src={Frame34}
                alt="Branding design illustration"
              />
            </div>
          </figure>

          {/* Text content */}
          <section className="bd-copy" aria-label="Branding description">
            <div className="flex">
              <div>
                <p>
                  A brand isn’t just what you see – it’s what <br />
                  you remember, what you carry home, and <br />
                  what you trust.
                </p>
                <p>
                  We shape brands that people remember, <br />
                  return to, and fall in love with.
                </p>
              </div>
              <div className="ml-50">
                <img src={brandingvec} alt="" />
              </div>
            </div>
            <div className="flex">
              <div>
                <p className="bd-craftsLead">V creates:</p>
                <ul className="bd-list">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="ml-70">
                <img src={brandingvec03} alt="" />
              </div>
            </div>
            <div className="flex ">
              <div>
                <a href="#" className="bd-explore" aria-label="Explore now">
                  Explore Now
                  <span className="bd-arrow" aria-hidden="true" />
                </a>
              </div>
              <div className="pl-80">
                <img src={brandingvec04} alt="" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
