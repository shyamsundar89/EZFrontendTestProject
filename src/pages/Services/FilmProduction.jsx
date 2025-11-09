import React from "react";
import "./FilmProduction.css";
import cameraIcon from "../../assets/team/Camera 01.svg";
import cameracreaft from "../../assets/team/Camera 03.svg";
import cameracreaft02 from "../../assets/team/Camera 02.svg";
import FilmProduction01 from "../../assets/team/Frame 31-1.svg";
import { Link } from "react-router-dom";

export default function FilmProduction({
  quote = "“Filmmaking is a chance to live many lifetimes.” – Robert Altman",
  backText = "Back",
  imageSrc = "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200&auto=format&fit=crop",
  imageAlt = "Studio shot with camera and green screen",
  caption = "Film Production",
  bullets = [
    "Documentaries",
    "Corporate Videos",
    "2D Animation Videos",
    "3D Animation Videos",
  ],
  // Optional small decorative SVG/PNG assets (will be positioned around content)
  decoTopRight,
  decoMidRight,
  decoBottomRight,
  decoBottomLeft,
}) {
  return (
    <section className="fpd-page" aria-label="Film Production detail">
      {/* top bar */}
      {/* <header className="fpd-header">
        <a className="fpd-logo" href="#" aria-label="V Films home">
          <span className="v">V</span>Films
        </a>

        <button className="fpd-hamburger" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header> */}

      <div className="fpd-shell">
        {/* Quote */}
        <blockquote className="fpd-quote">{quote}</blockquote>

        {/* Back button */}
        <Link to="/">
          <button className="fpd-back" type="button" aria-label="Go back">
            <span className="fpd-back-icon" aria-hidden="true" />
            {backText}
          </button>
        </Link>

        <div className="fpd-grid">
          {/* Left: polaroid image card */}
          <div>
            <img src={FilmProduction01} alt="" />
          </div>
          {/* Right: copy block */}

          <section className="fpd-copy" aria-label="Description">
            <div className="tca">
              <p>
                Who says films are just an escape? <br />
                We see them as a way to live many lives – <br />
                to feel, to explore, and to tell stories that stay. <br />
                And with each film, we carry new memories <br />
                and new reasons to keep creating.
              </p>
              <div className="camicon">
                <img src={cameraIcon} alt="Camera" />
              </div>
            </div>
            <div className="tca">
              <div>
                <p className="fpd-craftsLead">V crafts:</p>

                <ul className="fpd-list">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="tca1">
                <img src={cameracreaft} alt="" />
              </div>
            </div>
            <div className="tca">
              <a href="#" className="fpd-explore" aria-label="Explore now">
                Explore Now
                <span className="fpd-arrow" aria-hidden="true" />
              </a>
              <img src={cameracreaft02} alt="" className="tca1" />
            </div>
          </section>
        </div>
      </div>

      {/* Decorative corner/side illustrations (optional) */}
      <AsideDeco
        className="fpd-deco tr"
        src={decoTopRight}
        fallback="reel"
        ariaLabel="Film reel doodle"
      />
      <AsideDeco
        className="fpd-deco mr"
        src={decoMidRight}
        fallback="camera"
        ariaLabel="Camera doodle"
      />
      <AsideDeco
        className="fpd-deco br"
        src={decoBottomRight}
        fallback="tripod"
        ariaLabel="Tripod doodle"
      />
      <AsideDeco
        className="fpd-deco bl"
        src={decoBottomLeft}
        fallback="compact"
        ariaLabel="Compact camera doodle"
      />
    </section>
  );
}

/* Small helper that renders your PNG/SVG or a CSS fallback doodle */
function AsideDeco({ className, src, fallback = "reel", ariaLabel }) {
  if (src)
    return (
      <img className={className} src={src} alt="" aria-label={ariaLabel} />
    );
  return (
    <span
      className={`${className} fpd-fallback f-${fallback}`}
      aria-hidden="true"
    />
  );
}
