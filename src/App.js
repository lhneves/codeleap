import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { globalStyles } from "./styles/GlobalStyles";
import { Global } from "@emotion/react";

import Header from "./components/Header/header";

import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
