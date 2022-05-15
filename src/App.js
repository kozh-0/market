import { Routes, Route } from "react-router-dom";

import Main from "./Components/Main";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/Help/NotFound";
import Header from "./Components/Help/Header";
import Footer from "./Components/Help/Footer";


export default function App() {
  return (
    <>
      <Header/>
        <div className="content container">
            <Routes>
              <Route path="/market" element={<Main/>}/>
              <Route path="/market/about" element={<About/>}/>
              <Route path="/market/contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
      <Footer/>
    </>
  );
}
