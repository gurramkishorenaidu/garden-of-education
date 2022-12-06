import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="bg-gray-50">     
      <Router>
      {/* <Header /> */}
      <Navbar />
      
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />          
          <Route path="/faq" element={<Faq />} />          
          <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/contact" element={<Contact />} />
                
                
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
