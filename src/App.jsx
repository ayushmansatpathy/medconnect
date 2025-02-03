import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Presidents } from "./components/presidents";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Premed } from "./components/premed"
import { Predent } from "./components/predent";
import { Prepa } from "./components/prepa";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header data={landingPageData.Header} />
                <About data={landingPageData.About} />
                {/* <Services data={landingPageData.Services} /> */}
                <Gallery data={landingPageData.Gallery} />
                {/* <Testimonials data={landingPageData.Testimonials} /> */}
                <Presidents data={landingPageData.presidents} />
                <Team data={landingPageData.Team} />
                <Contact data={landingPageData.Contact} />
                {/* <Features data={landingPageData.Features} /> */}
              </>
            }
          />
          <Route path="/premed" element={<Premed data={landingPageData.Premed} />} />
          <Route path="/predent" element={<Predent data={landingPageData.Predent} />} />
          <Route path="/prepa" element={<Prepa data={landingPageData.Prepa} />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
