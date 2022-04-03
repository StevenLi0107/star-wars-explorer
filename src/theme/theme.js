import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary: { 
        main: "#FFFFFF",
        text1: "#FFFFFF",
        text2: "black",
        text3: "#616161"
    },
    background: { 
        main: "#2C3EF6",
        b1:"#E0E0E0",
        b2:"#2F41FF",
        b3:"#FFFFFF"
    }
  }
});