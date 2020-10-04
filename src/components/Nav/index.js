import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const DynamicNavBar = () => {
  // could fetch from api if properly cached
  const menus = [
    { link: "canton", label: "Canton" },
    { link: "departement", label: "Departement" },
  ];

  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">Historical Maps</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/map">Map</Nav.Link>
        {menus.map((l, i) => (
          <Nav.Link href={`/hierarchy/${l.link}`} key={i}>
            {l.label}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
};
