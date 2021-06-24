import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    fontSize: "10px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function MainButton(props) {
  const classes = useStyles();

  return (
    <Button
      type={props.type}
      variant="outlined"
      size="small"
      color="primary"
      className={classes.margin}
      onClick={props.onClick}
    >
      {props.value}
    </Button>
  );
}
