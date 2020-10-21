import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import GoodsPage from "./GoodsPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageGoodsPage from "./ManageGoodsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   return (
      <div className="container-fluid">
         <ToastContainer autoClose={3000} hideProgressBar />
         <Header />
         <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/allgoods" component={GoodsPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/goods/:token" component={ManageGoodsPage} />
            <Route path="/goods" component={ManageGoodsPage} />
            <Redirect from="/about-page" to="about" />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   );
}

export default App;
