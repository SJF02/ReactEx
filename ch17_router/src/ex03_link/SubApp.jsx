// npm install react-router-dom 설치

import Contact from "./Contact";
import Home from "./Home";
import Topics from "./Topics";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

const SubApp = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello React Router DOM</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/topics" element={<Topics/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/*" element={"Not Found"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default SubApp;
