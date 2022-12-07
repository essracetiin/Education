import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";

function App() {
  return (
    <>
      {/* browser router layoutu en üstte göstermeyi sağlıyor */}
      <BrowserRouter>
        <Layout />

        {/* routes alta gelecek sayfalar */}
        <Routes>
          <Route path="*" element={<Notfound />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
