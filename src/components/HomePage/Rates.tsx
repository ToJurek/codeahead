import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTypedSelector } from "../../store";
import { LoadingSpinner } from "../LoadingSpinner";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    margin: 40,
    maxWidth: "90%",
  },
});

export default function RatesTable() {
  const classes = useStyles();

  const { currencyRates } = useTypedSelector((state) => state);
  const rates = currencyRates.currencyRates.exchange_rates;

  return (
    <Grid className={classes.root} container spacing={2}>
      {!currencyRates.isLoading ? (
        <TableContainer component={Paper} className={classes.root}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell align="right">Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rates ? (
                Object.keys(rates).map((key) => (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {key}
                    </TableCell>
                    <TableCell align="right">{rates[key]}</TableCell>
                  </TableRow>
                ))
              ) : (
                <div>No Results</div>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <LoadingSpinner />
      )}{" "}
    </Grid>
  );
}
