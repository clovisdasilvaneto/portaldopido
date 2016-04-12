import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";

const app = document.getElementById("app");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/noticias/:tag/:article" component={Noticias}></Route>
    </Route>
  </Router>,
app);
