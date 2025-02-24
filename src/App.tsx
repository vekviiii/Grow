import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Facade from "./components/facade";
import Details from "./components/details";
import Footer from "./components/footer";
import FloatingStuff from "./utils/floatingStuff";
import Header from "./components/header";
import ContactUs from "./components/contactUs";
import AboutUs from "./components/aboutUs";
import Playground from "./components/playground";

function App() {

  useEffect(() => {
    document.querySelectorAll("a.nav-links").forEach(link => 
      link.classList.toggle("active-nav", link.getAttribute("href") === window.location.pathname)
    );
  }, []);  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Facade />} />
        <Route
          path="/product"
          element={
            <div className="container mx-auto">
              <Details />
            </div>
          }
        />
        <Route
          path="/about-us"
          element={
            <div className="container mx-auto">
              <AboutUs />
            </div>
          }
        />
        <Route
          path="/contact-us"
          element={
            <div className="container mx-auto">
              <ContactUs />
            </div>
          }
        />
        <Route
          path="/playground"
          element={
            <div className="container mx-auto">
              <Playground />
            </div>
          }
        />
      </Routes>
      <Footer />
      <FloatingStuff />
    </>
  );
}

export default App;
