import React, { useState } from "react";
import "./Portfolio.css";

// ✅ Local assets
import Group11 from "../../src/assets/team/Group 11.svg"; // Poster frame
import CamGroup from "../../src/assets/team/Cam Group.svg"; // Left ornament
import FooterVector from "../../src/assets/team/Footer Vector.svg"; // Right ornament

export default function Portfolio({
  title = "The Highlight Reel",
  subtitle = "Watch the magic we’ve captured.",
  videoId = "dQw4w9WgXcQ", // Replace with your YouTube ID
  poster = Group11, // ✅ Poster (center frame)
  leftOrnamentSrc = CamGroup, // ✅ Left image
  rightOrnamentSrc = FooterVector, // ✅ Right image
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="hr-page" aria-label="Highlight Reel">
      {/* Header */}
      {/* <header className="hr-header">
        <a className="hr-logo" href="#" aria-label="V Films home">
          <span className="v">V</span>Films
        </a>
        <button className="hr-hamburger" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header> */}

      {/* Left ornament */}
      <div className="hr-ornament hr-ornament-left" aria-hidden="true">
        <img src={leftOrnamentSrc} alt="Camera group illustration" />
      </div>

      {/* Right ornament */}
      <div className="hr-ornament hr-ornament-right" aria-hidden="true">
        <img src={rightOrnamentSrc} alt="Decorative footer vector" />
      </div>

      {/* Main content */}
      <div className="hr-shell">
        <h2 className="hr-title">{title}</h2>
        <p className="hr-sub">{subtitle}</p>

        <FilmStrip>
          <CarouselButton direction="prev" onClick={() => {}} />
          <VideoViewport
            playing={playing}
            poster={poster}
            videoId={videoId}
            onPlay={() => setPlaying(true)}
          />
          <CarouselButton direction="next" onClick={() => {}} />
        </FilmStrip>
      </div>
    </section>
  );
}

/* ——— Subcomponents ——— */

function FilmStrip({ children }) {
  return (
    <div className="filmstrip" role="group" aria-label="Film frame">
      <div className="filmstrip-inner">{children}</div>
    </div>
  );
}

function CarouselButton({ direction = "next", onClick }) {
  return (
    <button
      className={`hr-arrow ${direction}`}
      aria-label={direction === "next" ? "Next" : "Previous"}
      onClick={onClick}
      type="button"
    >
      <span aria-hidden="true" />
    </button>
  );
}

function VideoViewport({ playing, poster, videoId, onPlay }) {
  return (
    <div className="hr-viewport" aria-label="Video player">
      {playing ? (
        <iframe
          className="hr-iframe"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="Highlight Reel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          className="hr-posterBtn"
          onClick={onPlay}
          aria-label="Play video"
        >
          <img className="hr-poster" src={poster} alt="Video poster" />
          <span className="hr-play" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
