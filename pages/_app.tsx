import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
