import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// https://lp-cms-production.imgix.net/2019-06/70114953.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4

export function Presentation () {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <>
    <a href="#home" aria-hidden="true" id="home"></a>
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
            <Typography variant={smallScreen ? "h6" : "h5"} sx={{fontFamily: "Cunia", color:"primary.dark"}} >C'est quoi cozco ?</Typography>
            <br />
            {/* <Typography variant={smallScreen ? "body2" : "body1"} >
            Cozco est un projet familial né en 2019 avec pour ambition de populariser
            la culture péruvienne à travers une boisson typique, <strong>la Chicha Morada</strong>. <br /> <br />
            Peu connue de la culture occidentale, la Chicha Morada est un jus de fruits
            à base de maïs violet originaire du <strong>Pérou</strong>. Afin de produire notre boisson
            originale, nous importons le maïs violet et le transformons en boisson de
            manière <strong>artisanale</strong> à Saint-Ouen-sur-Seine. <br /> <br />
            A ce jour, Cozco est exclusivement distribué auprès de 12 restaurants en
            Île-de-France. Nous aspirons à renforcer notre présence francilienne,
            notamment grâce à <a target="_blank" href="https://www.saintouen-lesdocks.com/le-projet/la-halle/">la Halle Gourmande</a> de Saint-Ouen-sur-Seine.
            </Typography> */}
            <Typography variant={smallScreen ? "body2" : "body1"} >
            Découvrez l'authenticité des sauveurs péruviennes avec Cozco, votre producteur local de boissons
            artisanales, <strong>la Chicha Morada</strong>. <br />
            Nous avons à coeur de satisfaire les papilles parisiennes en tant que fournisseur exclusif pour les restaurants de la région.
            </Typography>
            <br />
            <video src="/video/demo.mp4"
            style={{
                maxWidth: smallScreen ? 250 : 350,
                borderRadius: 12
            }}
            controls
            ></video>            
        </Box>
    </Box>    
    </>

  );
}
