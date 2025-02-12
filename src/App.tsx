import { BrowserRouter, Route, Routes } from "react-router-dom";

import Facade from "./components/facade";
import Details from "./components/details";
import Footer from "./components/footer";
import FloatingStuff from "./utils/card component/floating Stuff";
import Header from "./components/header";
import ContactUs from "./components/contactUs";

function App() {
  return (
    <BrowserRouter>
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
          path="/contact-us"
          element={
            <div className="container mx-auto">
              <ContactUs />
            </div>
          }
        />
      </Routes>
      <Footer />
      <FloatingStuff />
    </BrowserRouter>
  );
}

export default App;
