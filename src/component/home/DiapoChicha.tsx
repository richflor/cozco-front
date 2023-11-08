import Typography from '@mui/material/Typography'
import Carousel from '../utilities/Carrousel';
import { Box, useMediaQuery, useTheme } from '@mui/material';

export function DiapoChicha () {
    const content:JSX.Element[] = [];

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const ingredients = [
        ["Maïs violet", "maiz.png"],
        ["Pommes","manzada.png"],
        ["Citrons","lemon.png"],
        ["Canelle","canelle.png"],
        ["Clou de girofle","girofle.png"],
        ["Ananas","pina.png"],
        ["Sucre","sucre.png"]
    ]

    content[0] = <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    }}>
        <Typography variant={smallScreen ? "subtitle1" : "h6"} color="white" fontFamily="Cunia" sx={{transform: "rotate(-11deg)", whiteSpace: "normal",  maxWidth: "90%", textAlign: "center"}}>mais qu'est-ce que la chicha morada ?</Typography>
    </div>

    content[1] = <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        padding: 4
    }}>
        <Typography variant={smallScreen ? "subtitle2" : "h6"} color="white" fontFamily="Cunia" sx={{ alignSelf: "start"}}>Histoire :</Typography>
        <Typography variant={smallScreen ? "body2" : "body1"} color="white" sx={{ whiteSpace:"normal"}}>Selon la tradition, la chicha a été découverte après l'inondation d'entrepôts contenant la récolte
        de maïs violet provoquant un maltage partiel. <br /> Les incas refusèrent alors de jeter le maïs et préférèrent goûter la boisson nouvellement
        obtenue.
        </Typography>    
    </Box>
    
    content[2] = 
    <Box
        sx={{
            display:"flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            padding: 2,
            boxSizing: "border-box"
        }}
    >
        {ingredients.map((item,i)=> <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
        }}>
            <Typography 
                variant="body1" 
                color="white"
                sx={{
                    position: "relative"
                }}
            >
                {item[0]}
                <img src={`/icon_fruits/${item[1]}`} alt={item[1]} style={{
                    height: smallScreen ? 25 : 35,
                    objectFit: "cover",
                    position: "absolute",
                    left: i%2 === 0 ? -50 : 70,
                }}/>
            </Typography>
        </div>)}
        <img src="/logo/full-logo.png" alt="logo" style={{
                height: smallScreen ? 30 : 40,
                objectFit: "cover",
                alignSelf: "start"
        }}/>  
    </Box>


  return (
    <Carousel backAndForth={true}>
        {content.map(element => 
            <Box sx={{
                display: "inline-block",
                backgroundColor: "primary.main",
                height: smallScreen ? "37vh" : "40vh",
                width: "100%",
                verticalAlign: "top"
            }}
            >
                {element}
            </Box>)}
    </Carousel>
  );
}
