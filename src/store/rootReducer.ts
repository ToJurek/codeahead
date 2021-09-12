import { combineReducers } from "@reduxjs/toolkit";
import { currencyRatesReducer } from "./model/currencyRates";

const rootReducer = combineReducers({
  currencyRates: currencyRatesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
