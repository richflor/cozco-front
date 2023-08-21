import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// https://lp-cms-production.imgix.net/2019-06/70114953.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4

export function Presentation () {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Box 
        sx={{
            height: "60vh",
            width: "100vw",
            position: "relative"
        }}
    >
        <a href="#home" aria-hidden="true" id="home"></a>
        <img
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }}
            src="/demo.png" alt="photo"/>
        <Box
            sx={{
                bgcolor: "secondary.light",
                position: "absolute",
                minWidth: 210,
                maxWidth: smallScreen ? "80vw" : "40vw",
                padding: 3,
                top: "15%",
                right: "10vw",
                left: "10vw",
                borderRadius: 6
            }}
        >
            <Typography variant={smallScreen ? "h6" : "h5"} sx={{fontFamily: "Cunia", color:"primary.dark"}} >C'est quoi cozco ?</Typography>
            <Typography variant={smallScreen ? "body2" : "body1"} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, ea odit! Maiores, ipsum. Delectus asperiores, corrupti, quas ut ea dolorum et quisquam voluptates molestiae, rem sit. Excepturi, nemo! Quaerat, dolores.</Typography>
        </Box>
    </Box>
  );
}
