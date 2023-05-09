import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
