import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./styles.css";
import grey from "@material-ui/core/colors/grey";
import { MainPage } from "./pages";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#1e1e1e"
    },
    secondary: {
      main: grey[600],
      contrastText: grey[50]
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "0px"
      }
    }
  }
});

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.shape({}).isRequired
};

export default App;
