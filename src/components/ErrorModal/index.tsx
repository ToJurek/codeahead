import { makeStyles, Modal } from "@material-ui/core";

interface IProps {
  isOpen: boolean;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const ErrorModal = ({ isOpen }: IProps) => {
  const classes = useStyles();

  return (
    <Modal open={isOpen} className={classes.modal}>
      <div className={classes.paper}>
        <h2 id="server-modal-title">ERROR</h2>
        <p id="server-modal-description">
          Refresh your browser if you see me or contact admin
        </p>
      </div>
    </Modal>
  );
};
