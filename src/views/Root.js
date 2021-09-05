import React from "react";
//views
import CartView from "./CartView";
import ProductView from "./ProductView";
import MenuView from "./MenuView";
import FooterView from "./FooterView";
//style
import GlobalStyle from "../theme/GlobalStyle";
//router
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MenuView />
      <FooterView />
      <Switch>
        <Route exact path="/" component={ProductView} />
        <Route exact path="/cart" component={CartView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
