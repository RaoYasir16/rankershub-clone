import Layout from "./components/Layout/Layout ";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
    <BrowserRouter>
     <Layout>
      <Routes>
       <Route path="/" element={<Home/>} /> 
       <Route path="/about" element={<About/>} /> 
       <Route path="/services" element={<ServicesPage/>}/>
       <Route path="/contact" element={<Contact/>}/>
     </Routes>
     </Layout>
     </BrowserRouter>
    </>
  );
}

export default App;


//https://rankershub.ai/