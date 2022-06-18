import "../styles/globalStyles.css";

import type { AppProps } from "next/app";
import lightTheme from "../components/themes/lightTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
