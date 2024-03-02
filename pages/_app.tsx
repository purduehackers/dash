import '../styles/globals.css'
import { AppProps } from "next/app";
import Dash from '.'
import LoginPage from './login';
//import {BrowserRouter, Routes,Route } from "react-router-dom"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
