import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import GoodsPage from "./GoodsPage";
import NotFoundPage from "./NotFoundPage";
import ManageGoodsPage from "./ManageGoodsPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
   return (
      <div className="container-fluid">
         <ToastContainer autoClose={3000} hideProgressBar />
         <Header />
         <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/goods/:token" component={ManageGoodsPage} />
            <Route path="/goods" component={GoodsPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/newGoods" component={ManageGoodsPage} />
            <Redirect from="/about-page" to="about" />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   );
}

export default App;
