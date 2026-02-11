import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../pages/Home"
import RegisterRoute from './RegisterRoute';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/*" element={<RegisterRoute />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
