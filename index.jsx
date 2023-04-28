import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Van from './pages/vans/Van';
import  VanDetails from "./pages/vans/vanDetails"
import Layout from "./components/Layout";
import Dashboard from './pages/host/Dashboard';
import Reviews from './pages/host/Reviews';
import Income from './pages/host/Income';
import HostLayout from './components/HostLayout';
import Vans from './pages/host/Vans'
import HostVansDetails from "./pages/host/HostVansDetails";

import './server'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="van" element={<Van />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<Vans />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans/:id" element={<HostVansDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);