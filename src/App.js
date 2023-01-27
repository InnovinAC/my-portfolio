// import NavbarMain from "./components/includes/Navbar";
// import Layout from "./components/Layout";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
      <BrowserRouter>
         

          <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route  path='/contact' element={<Contact />}></Route>
          </Routes>
      </BrowserRouter>


  );
}

export default App;