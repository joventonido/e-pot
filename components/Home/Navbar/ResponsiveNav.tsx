"use client";

import React from "react";
import Nav from "./Nav";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNav = () => {
  const [showNav, setshowNav] = React.useState(false);
  const openNavHandler = () => setshowNav(true);
  const closeNavHandler = () => setshowNav(false);

  return (
    <div>
      <Nav openNav={openNavHandler} />
      <MobileNavbar showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
