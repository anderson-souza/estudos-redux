import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";

import { store, persistor } from "./store";

import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
