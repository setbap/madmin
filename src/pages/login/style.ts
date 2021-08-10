import { makeStyles } from "@material-ui/core";

const useLoginStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paperBack: {
    backgroundColor: "white",
    zIndex: 1000,
    borderRadius: theme.shape.borderRadius,
  },
  paper: {
    margin: theme.spacing(8, 4),

    display: "flex",
    alignSelf: "center",
    placeSelf: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: "1.2rem",
    borderRadius: theme.spacing(1),
  },
}));

export default useLoginStyles;
