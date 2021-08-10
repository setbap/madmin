import { createTheme } from "@material-ui/core";
import { amber, green } from "@material-ui/core/colors";
import { faIR } from "@material-ui/core/locale";

const theme = createTheme(
  {
    direction: "rtl",
    props: {
      MuiButtonBase: {
        TouchRippleProps: {
          classes: {
            root: "CustomizeTouchRipple",
          },
        },
      },
    },
    palette: {
      primary: amber,
      secondary: green,
    },
    typography: {
      fontFamily: "vazir, 'sans-serif'",
    },
  },
  faIR
);

export default theme;
