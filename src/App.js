import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Subheader from "./Subheader";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51Kiy5jBRtDXjneIxzrTMsyaInoczG9RWmFshnVDJbDnYe97SQfjyG14Iw67CdPisLJJYw0NbdGQYkwS9ePWxdJaS00PBaFGC4Q"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("USER IS", authUser)

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Subheader />
            <Orders />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Subheader />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Subheader />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Subheader />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
