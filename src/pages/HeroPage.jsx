import React, { useEffect, useState } from "react";
import "./HeroPage.css";
import VFilmsMandala from "../assets/hero/HeroMandala.svg";
import VFilmsLogo from "../assets/logo/vlogo.svg";

export default function HeroPage() {
  // simple mount flag for subtle fade-in
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <div className={`vh-page ${ready ? "is-ready" : ""}`}>
      {/* <HeaderMenu /> */}
      <main className="vh-shell" role="main">
        <LogoPanel />
        <HeroContent />
      </main>
    </div>
  );
}

// top-right hamburger
function HeaderMenu() {
  return (
    <button className="vh-menu" aria-label="Open menu">
      <span />
      <span />
      <span />
    </button>
  );
}

// left square with mandala and brand
function LogoPanel() {
  return (
    <aside className="vh-logoCard" aria-label="Brand mark">
      {/* lightweight mandala */}
      <img
        className="vh-mandala"
        src={VFilmsMandala}
        alt=""
        aria-hidden="true"
      />

      <h1 className="vh-brand" aria-label="V Films">
        <img className="vh-logo" src={VFilmsLogo} alt="" aria-hidden="true" />
      </h1>
    </aside>
  );
}

// right column hero copy
function HeroContent() {
  return (
    <section className="vh-hero" aria-labelledby="vh-title-line1">
      <h2 className="vh-title">
        <span id="vh-title-line1">Varnan is where stories find</span>
        <span>their voice and form</span>
      </h2>

      <nav className="vh-links" aria-label="Primary categories">
        <a href="#" aria-label="Films">
          Films
        </a>
        <span className="dot"> · </span>
        <a href="#" aria-label="Brands">
          Brands
        </a>
        <span className="dot"> · </span>
        <a href="#" aria-label="Art">
          Art
        </a>
      </nav>

      <p className="vh-blurb">
        Since 2008, V has been telling stories—of people, their journeys, and
        the places that shape them. Some begin in polished boardrooms, others in
        humble village squares; every story starts the same way: by listening
        with intention. V believes it takes patience and an eye for the unseen
        to capture what truly matters; V doesn’t just tell stories—V honors
        them.
      </p>
    </section>
  );
}
