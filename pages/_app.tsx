import type { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "styled-components";
import color from "theme/color";
import font from "theme/font";

const theme = {
  color,
  font,
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
