import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Calculator } from "./components/Calculator";
import { getCurrencyRates } from "./services/currencyRates";
import { useDispatch } from "react-redux";
import { ErrorModal } from "./components/ErrorModal";
import { useTypedSelector } from "./store";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencyRates());
    // eslint-disable-next-line
  }, []);
  //
  // useEffect(() =>{
  //     setInterval(() => dispatch(getCurrencyRates()), (10000))
  // })

  return (
    <div className="App">
      <ErrorModal
        isOpen={useTypedSelector((state) => state.currencyRates.isError)}
      />
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: "50px" }}>
          <Switch>
            <Route exact strict path="/">
              <HomePage />
            </Route>
            <Route exact strict path="/calculator">
              <Calculator />{" "}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
