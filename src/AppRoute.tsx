import Home from "components/Home";
import Portfolio from "components/Portfolio";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { init } from "redux/actions/threeAction";
import store from "redux/store";
import * as THREE from "three";

const AppRoute = () => {
  const scene = useSelector((state: any) => state.scene);
  const renderer = useSelector((state: any) => state.renderer);
  const camera = useSelector((state: any) => state.camera);

  useEffect(() => {
    store.dispatch(init());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
