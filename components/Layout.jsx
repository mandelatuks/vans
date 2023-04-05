import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';

function Layout() {
  return (
    <div className="layout">
      <Header />
      {/* //enables use to display any other things we want to for page in our case the home page with vans */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout