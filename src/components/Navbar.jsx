import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import VFilmsLogo from "../assets/logo/vlogo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e) {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        const btn = document.getElementById("vf-menu-btn");
        if (btn && btn.contains(e.target)) return;
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <header className={`vf-nav p-2 ${open ? "is-open" : ""}`} role="banner">
      <div className="vf-bar">
        <a className="vf-logo" href="#" aria-label="V Films">
          <img src={VFilmsLogo} alt="V Films Logo" />
        </a>

        <button
          id="vf-menu-btn"
          className={`vf-menuBtn ${open ? "open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="vf-menu-panel"
          onClick={() => setOpen((s) => !s)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="vf-menu-panel"
        className="vf-panel"
        ref={panelRef}
        aria-hidden={!open}
      >
        <ul className="vf-links" role="menu">
          <li role="none">
            <a role="menuitem" href="#services">
              Services
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="#stories">
              Their Stories
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="#our-story">
              Our Story
            </a>
          </li>
          <li role="none">
            <a role="menuitem" href="#varnan">
              Varnan
            </a>
          </li>
          <li role="none">
            <Link role="menuitem" to="/contact" className="vf-cta">
              Let’s Talk <i aria-hidden="true" />
            </Link>
          </li>
        </ul>

        {/* Close icon at extreme right for mouse users */}
        {/* <button
          className="vf-close"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
          type="button"
        >
          <span />
        </button> */}
      </nav>
    </header>
  );
}
