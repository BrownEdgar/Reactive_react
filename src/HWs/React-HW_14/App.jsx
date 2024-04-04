import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import OurProducts from "../../pages/OurProducts/OurProducts";
import News from "../../pages/News/News";
import Contact from "../../pages/Contact/Contact";

import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourproducts" element={<OurProducts />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
