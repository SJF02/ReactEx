// npm install react-router-dom 설치

import Contact from "./Contact";
import Home from "./Home";
import Topics from "./Topics";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const SubApp = () => {
  return (
    // 리액트 라우터를 사용하려면 최상위 컴포넌트를 <BrowserRouter>로 감싼다
    <BrowserRouter>
      <div>
        <h1>Hello React Router DOM</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/topics">Topics</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        {/* 위의 경로를 누르면 아래의 <Route>에 지정한 경로가 표현된다. */}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/topics" element={<Topics/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default SubApp;
