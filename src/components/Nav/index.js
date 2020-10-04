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
        {menus.map((l) => (
          <Nav.Link href={`/hierarchy/${l.link}`}>{l.label}</Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
};
