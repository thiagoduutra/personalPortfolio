import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Curriculo from "./Pages/Curriculo/Curriculo";

import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
