import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { globalStyles } from "./styles/GlobalStyles";
import { Global } from "@emotion/react";

import Header from "./components/Header/header";

import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import PrivateRoute from "./routes/PrivateRoute";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./redux";

function App() {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Header />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
