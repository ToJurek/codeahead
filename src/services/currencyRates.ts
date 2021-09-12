import axios from "axios";
import {
  setCurrencyRatesResponse,
  setIsError,
  setIsLoading,
} from "../store/model/currencyRates";
import { ICurrenciesResponse } from "../types/currenciesResponse";

// @ts-ignore
export const getCurrencyRates =
  (base? = "USD") =>
  async (dispatch) =>
    await axios
      .get<ICurrenciesResponse>(
        `https://exchange-rates.abstractapi.com/v1/live/`,
        { params: { api_key: process.env.REACT_APP_API_KEY, base } }
      )
      .then((res) => {
        dispatch(setCurrencyRatesResponse(res.data));
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        dispatch(setIsLoading(false));
        dispatch(setIsError(error));
      });
