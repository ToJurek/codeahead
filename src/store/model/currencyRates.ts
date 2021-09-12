import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrenciesResponse } from "../../types/currenciesResponse";
import { emptyResponse } from "../../types/helper/emptyResponse";

interface ICurrencyRateStore {
  currencyRates: ICurrenciesResponse;
  isLoading: boolean;
  isError: boolean;
}

export const initialState: ICurrencyRateStore = {
  currencyRates: emptyResponse,
  isLoading: true,
  isError: false,
};

const currencyRates = createSlice({
  name: "currencyRates",
  initialState,
  reducers: {
    setCurrencyRatesResponse: (
      state: ICurrencyRateStore,
      action: PayloadAction<ICurrenciesResponse>
    ) => {
      state.currencyRates = action.payload;
    },
    setIsError: (state: ICurrencyRateStore, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setIsLoading: (
      state: ICurrencyRateStore,
      action: PayloadAction<boolean>
    ) => {
      state.isLoading = action.payload;
    },
    resetStore: (state: ICurrencyRateStore) => {
      state = initialState;
    },
  },
});

export const {
  setCurrencyRatesResponse,
  setIsError,
  setIsLoading,
  resetStore,
} = currencyRates.actions;

export const currencyRatesReducer = currencyRates.reducer;
