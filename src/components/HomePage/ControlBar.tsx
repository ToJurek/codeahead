import {
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Paper,
  Select,
} from "@material-ui/core";
import { AVAILABLE_CURRENCIES } from "../../types/currencies";
import { useTypedSelector } from "../../store";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { getCurrencyRates } from "../../services/currencyRates";
import { setIsLoading } from "../../store/model/currencyRates";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  paper: {
    height: 80,
    width: "80%",
    backgroundColor: "white",
    display: "inline-flex",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  lastUpdateLabel: {
    display: "grid",
    alignContent: "center",
  },
}));

export const ControlBar = () => {
  const dispatch = useDispatch();

  const { currencyRates } = useTypedSelector((state) => state.currencyRates);
  const handleChange = (event: any) => {
    localStorage.setItem("baseCurrency", event.target.value);
    dispatch(setIsLoading(true));
    dispatch(getCurrencyRates(event.target.value));
  };

  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={2}>
      <Paper className={classes.paper}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Base Currency</InputLabel>
          <Select
            native
            defaultValue={localStorage.getItem("baseCurrency") || ""}
            onChange={handleChange}
          >
            <option aria-label="None" value="" />
            {AVAILABLE_CURRENCIES.map(({ id }) => (
              <option value={id} key={id}>
                {id}
              </option>
            ))}
          </Select>
        </FormControl>
        <Paper className={classes.lastUpdateLabel}>
          Last Update:{" "}
          {moment
            .unix(currencyRates.last_updated)
            .format("MM/DD/YYYY HH:mm:ss")}
        </Paper>
      </Paper>
    </Grid>
  );
};
