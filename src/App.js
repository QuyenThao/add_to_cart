import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from "./components/TopMenu";
import Products from "./pages/products";
import { CartProvider } from "./contexts/Cart";

const Home = () => <h2>Home</h2>;

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />

          <Switch>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}
