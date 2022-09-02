import React from "react";

import { FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { Nav, Title } from "./header.style";

import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../actions/auth'

import { rem } from "../../styles/variables";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(actions.logout())
    
    navigate("/", { replace: true });
  }

  return (
    <Nav>
      <Title>CodeLeap Network</Title>

      <div style={{ display: "flex", alignItems: "center", gap: `${rem(20)}` }}>
        {isLoggedIn && <Title>Hello, {user}!!</Title>}
        <Link to="/">
          <FaSignInAlt size={24} onClick={handleLogout} />
        </Link>
      </div>
    </Nav>
  );
}
