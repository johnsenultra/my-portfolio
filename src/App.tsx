import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./home/Landing";
import About from "./home/About";
import Layout from "./layout/Layout";
import LetsConnect from "./home/LetsConnect";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="message-me" element={<LetsConnect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
