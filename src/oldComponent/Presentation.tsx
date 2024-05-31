import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { DiapoChicha } from "./home/DiapoChicha";
// https://lp-cms-production.imgix.net/2019-06/70114953.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4

export function Presentation () {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box 
        sx={{
            height: "92vh",
            width: "100vw",
            position: "relative",
            backgroundImage: "url(/demo.png)",
            backgroundSize: "cover",
            display: "flex",
            flexWrap: "wrap",
            gap: "5vw",
            justifyContent: "center",
            alignItems: "center"
        }}
    >
        <Box
            sx={{
                bgcolor: "secondary.light",
                minWidth: 210,
                maxWidth: smallScreen ? "80vw" : "40vw",
                padding: 3,
                right: "10vw",
                left: "10vw",
                borderRadius: 6
            }}
        >
            <Typography variant={smallScreen ? "body1" : "h5"} sx={{fontFamily: "Cunia", color:"primary.dark"}} >C'est quoi cozco ?</Typography>
            <span></span>
            <Typography variant={smallScreen ? "body2" : "body1"} >
            Découvrez l'authenticité des sauveurs péruviennes avec Cozco, votre producteur local de boissons
            artisanales, <strong>la Chicha Morada</strong>. <br />
            Nous avons à coeur de satisfaire les papilles parisiennes en tant que fournisseur exclusif pour les restaurants de la région.
            </Typography>
            <br />
            <DiapoChicha />
        </Box>
    </Box>

  );
}
