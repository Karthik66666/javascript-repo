import logo from "./logo.svg";
import "./App.css";
import { Home } from "./componets/home/profile";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./componets/about/multiplelogin";
import { Contact } from "./contact/contact";
function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Main />} />
          <Route path="/contact"element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );

}

export default App;
