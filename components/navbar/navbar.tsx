import { Box, Button, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import DarkLightModeSwitch from "../dark-light-mode-switch/switch";

const Navbar = () => {
    const customTheme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: customTheme.palette.primary.main,
                margin: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingInline: "2em",
                minHeight: "7vh",
            }}
        >
            <Typography variant="h3" sx={{ fontWeight: 300 }}>
                Title
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "2em" }}>
                <Link href="/">
                    <Button sx={{ color: customTheme.palette.text.primary }}>Home</Button>
                </Link>
                <Link href="/">
                    <Button sx={{ color: customTheme.palette.text.primary }}>About</Button>
                </Link>
                <Link href="/">
                    <Button sx={{ color: customTheme.palette.text.primary }}>Project</Button>
                </Link>
                <DarkLightModeSwitch />
            </Box>
        </Box>
    );
};

export default Navbar;
