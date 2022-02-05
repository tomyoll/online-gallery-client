import React from 'react';
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {createTheme, ThemeProvider, useMediaQuery} from "@mui/material";
import Header from "./components/Header";

const App = observer(() => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <AppRouter/>
    </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
