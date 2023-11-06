import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserDataProvider from './contexts/UserData';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Toast from './components/Toast';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <UserDataProvider>
          <BrowserRouter>
            <Routes />
            <GlobalStyle />
            <Toast />
          </BrowserRouter>
        </UserDataProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
