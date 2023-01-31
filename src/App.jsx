import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NavbarHome from "./components/shared/Navbar";
import { useSelector } from "react-redux";
import Loader from "./components/shared/Loader";
import WhatWeDo from "./components/what-we-do/WhatWeDo";
import HowWeDoIt from "./components/how-we-do-it/HowWeDoIt";
import WhereItWorks from "./components/where-it-works/WhereItWorks";

const App = () => {
  return (
    <div className="App">
      <NavbarHome />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={"/what-we-do"} element={<WhatWeDo />} />
          <Route path={"/how-we-do-it"} element={<HowWeDoIt />} />
          <Route path={"/where-it-works"} element={<WhereItWorks />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
