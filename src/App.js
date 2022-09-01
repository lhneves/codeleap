import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { globalStyles } from "./styles/GlobalStyles";
import { Global } from "@emotion/react";

import Header from "./components/Header/header";

import Login from "./pages/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
