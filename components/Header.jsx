import React from 'react';
import { Link } from "react-router-dom";
 
 const Header = () => {
   return (
     <header>
       <Link className="site-logo" to="/">
         #VanLife
       </Link>
       <nav>
         <Link to="/host">Host</Link>
         <Link to="/about">About</Link>
         <Link to="/van">Vans</Link>
       </nav>
     </header>
   );
 }
 
export default Header;