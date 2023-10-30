import React from "react";
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Page404 from "./Page404";
import "./index.css";
import CarServise from "./CarServise";
import BikeService from "./BikeService";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to={"/home"}>home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Service</NavLink>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service">
            <Route index element={<Service />} />
            <Route exact path="car" element={<CarServise />} />
            <Route exact path="bike" element={<BikeService />} />
          </Route>
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
