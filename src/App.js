import React from "react";
import { Router } from "@reach/router";
import { Redirect } from "@reach/router";

import { Context } from "./Context";
import { GlobalStyle } from "./Styles/GlobalStyles";

import { Logo } from "./components/Logo/index";
import { NavBar } from "./components/NavBar";
import { Detail } from "./pages/Detail";
import { User } from "./pages/User";
import { Favs } from "./pages/Favs";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Home } from "./pages/Home";

const UserLogged = ({ children }) => {
  return children({ isAuth: false });
};

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>

      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>

      <NavBar />
    </div>
  );
};
