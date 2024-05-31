import { Box, Typography } from "@mui/material";
export interface IAppProps {
}

export function ProductSecond (props: IAppProps) {
  return (
    <Box className="fullpage"
    sx={{
        display: "flex",
        bgcolor: "secondary.light",
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            height: "100%",
            position: "relative"     
          }}>
            <Box
            className="textContainer"
            sx={{
              maxWidth: "70%",
              bgcolor: "primary.main",
              zIndex: "3"
            }}
            >
              <Typography variant="h4" color="white" align="center" gutterBottom={true}>Vous êtes au bon endroit</Typography>
              <Typography variant="body1" color="white" align="center" gutterBottom={true}>La Chicha Morada, avec sa couleur violette et
ses notes légèrement acides, se marie
parfaitement avec le rhum ou la vodka.
            </Typography>
              <Typography variant="body1" color="white" align="center" gutterBottom={true}>Le Maracuya, avec son arôme tropical et sa
douceur acidulée, ajoute une dimension fruitée.
            </Typography>
            <Typography variant="body1" color="white" align="center" gutterBottom={true}>Utilisez ces trésors péruviens pour des cocktails
étonnants et délicieux.
            </Typography>
            </Box>
            <Box sx={{
              height: "50vh",
              width: "50vh",
              borderRadius: "50%",
              bgcolor: "primary.dark",
              position: "absolute",
              bottom: "60%",
              right: "70%"
              
            }}/>
            <Box sx={{
              height: "50vh",
              width: "50vh",
              borderRadius: "50%",
              bgcolor: "primary.dark",
              position: "absolute",
              top: "80%",
              right: "15%",
            }}/>
        </Box>
        <Box sx={{
            backgroundImage: "url(photos/bartender.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            width: "40%"
            //need a media query
          }}/>
    </Box>
  );
}
