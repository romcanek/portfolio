import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#ff812d",
            dark: "#994cf1",
            light: "#994cf1",
        },
        secondary: {
            main: "#000000",
        },
        mode: "light",
    },
});

export default lightTheme;
