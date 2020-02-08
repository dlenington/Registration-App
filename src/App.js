import React from "react";
import { Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import themeFile from "./util/theme";
import Home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import profile from "./components/Profile";

import "./App.css";
import NavBar from "./components/NavBar";

const theme = createMuiTheme(themeFile);

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  axios.defaults.headers.common["Authorization"] = token;
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={signup} />
        <Route exact path="/user/:handle" component={profile} />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
