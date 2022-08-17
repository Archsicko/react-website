import React from "react";

import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Dolla</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
