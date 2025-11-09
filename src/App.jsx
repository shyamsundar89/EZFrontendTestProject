import { Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import HeroPage from "./pages/HeroPage.jsx";
import AboutTeamPage from "./pages/AboutTeamPage";
import AboutPage from "./pages/AboutPage.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact";
import FilmProduction from "./pages/Services/FilmProduction";
import Branding from "./pages/Services/Branding";
import ArtCuration from "./pages/Services/ArtCuration";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<HeroPage />} />
        <Route path="/about-team" element={<AboutTeamPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<Services />} /> */}
        <Route path="/services/film-production" element={<FilmProduction />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/art-curation" element={<ArtCuration />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/contact-us" element={<ContactForm />} /> */}
      </Routes>
    </div>
  );
}

export default App;
