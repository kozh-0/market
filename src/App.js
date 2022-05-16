import { Routes, Route } from "react-router-dom";


import Contact from "./Components/Contact";
import NotFound from "./Components/Help/NotFound";
import Header from "./Components/Help/Header";
import Footer from "./Components/Help/Footer";
import Products from "./Components/Products";
import Main from "./Components/Main";


export default function App() {
  return (
    <>
      <Header/>
            <Routes>
              <Route path="/market" element={<Main/>}/>
              <Route path="/market/products" element={<Products/>}/>
              <Route path="/market/contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
      <Footer/>
    </>
  );
}
