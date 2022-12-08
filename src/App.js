import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Programs from "./pages/Programs";
// import Navbar1 from "./components/Navbar1";



function App() {
  return (
    <div className="bg-gray-50">     
      <Router>
      {/* <Header /> */}
      <Navbar />
      {/* <Navbar1 /> */}
      
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />          
          <Route path="/faq" element={<Faq />} />          
          <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/test" element={<Test />} />       */}
          <Route path="/online-tuition" element={<Programs />} />
          
                       
                
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
