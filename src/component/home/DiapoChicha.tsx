import Typography from '@mui/material/Typography'
import Carousel from '../utilities/Carrousel';
import { Box, useMediaQuery, useTheme } from '@mui/material';

export function DiapoChicha () {
    const content:JSX.Element[] = [];

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const ingredients = [
        ["Maïs violet", "maiz.png"],
        ["Pommes","manzada.png"],
        ["Citrons","lemon.png"],
        ["Canelle","canelle.png"],
        ["Clou de girogle","girofle.png"],
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
        <Typography variant="subtitle1" color="white" fontFamily="Cunia" sx={{transform: "rotate(-11deg)"}}>mais qu'est-ce que la chicha morada ?</Typography>
    </div>

    content[1] = <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        padding: 4
    }}>
        <Typography variant="h6" color="white" fontFamily="Cunia" sx={{ alignSelf: "start"}}>Histoire :</Typography>
        <Typography variant="subtitle1" color="primary.main">break</Typography>
        <Typography variant="body1" color="white" sx={{ whiteSpace:"normal"}}>Selon la tradition, la chicha a été découverte après l'inondation d'entrepôts contenant la récolte
        de maïs violet provoquant un maltage partiel. <br /> Les incas refusèrent alors de keter le maïs et préférèrent goûter la boisson nouvellement
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
                    height: 35,
                    objectFit: "cover",
                    position: "absolute",
                    left: i%2 === 0 ? -50 : 70,
                }}/>
            </Typography>
        </div>)}
        <img src="/logo/full-logo.png" alt="logo" style={{
                height: 40,
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
                height: smallScreen ? "35vh" : "40vh",
                width: "100%",
                verticalAlign: "top"
            }}
            >
                {element}
            </Box>)}
    </Carousel>
  );
}
