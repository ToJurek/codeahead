import { Grid, makeStyles } from "@material-ui/core";
import RatesTable from "./Rates";
import { ControlBar } from "./ControlBar";

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

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={1}>
          <ControlBar />
          <RatesTable />
        </Grid>
      </Grid>
    </Grid>
  );
};
