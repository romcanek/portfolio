import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#ad4f10",
            dark: "#994cf1",
            light: "#994cf1",
        },
        secondary: {
            main: "#000000",
        },
        mode: "dark",
    },
});

export default darkTheme;
