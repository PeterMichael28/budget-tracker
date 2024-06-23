import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
 return (
  <div>
   <MobileNavbar />
   <DesktopNavbar />
  </div>
 );
};

export default Navbar;
