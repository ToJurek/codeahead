import { FormControl, Grid, makeStyles, TextField } from "@material-ui/core";
import { useTypedSelector } from "../../store";
import { ControlledCurrencySelect } from "../CurrencySelect";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 400,
  },
  control: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

export const Calculator = () => {
  const classes = useStyles();

  const { register, watch, control } = useForm({ mode: "onBlur" });

  const rates = useTypedSelector(
    (state) => state.currencyRates.currencyRates.exchange_rates
  );

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={1}>
          <Grid className={classes.paper} item>
            <FormControl className={classes.formControl}>
              <ControlledCurrencySelect
                name={"baseCurrency"}
                defaultValue={localStorage.getItem("baseCurrency") || ""}
                control={control}
              />
              <TextField
                type={"number"}
                {...register("amountOfMoney", { required: true })}
                label={"Amount Of Money"}
              />
            </FormControl>
          </Grid>
          <Grid className={classes.paper} item>
            <FormControl className={classes.formControl}>
              <ControlledCurrencySelect
                name={"changeCurrency"}
                control={control}
              />
              <TextField
                disabled
                value={
                  watch("amountOfMoney") * rates[watch("changeCurrency")] || ""
                }
                label={"Result"}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
