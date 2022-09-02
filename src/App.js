import { BrowserRouter as Router } from "react-router-dom";

import { globalStyles } from "./styles/GlobalStyles";
import { Global } from "@emotion/react";

import Header from "./components/Header/header";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./redux";
import MyRoutes from "./routes/myRoutes";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header />
          <Global styles={globalStyles} />
          <MyRoutes />
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
