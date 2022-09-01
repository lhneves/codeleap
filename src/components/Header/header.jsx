import React from "react";

import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Nav, Title } from "./header.style";

export default function Header() {

  return (
    <Nav>
      <Title>CodeLeap Network</Title>

      <Link to="/">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
