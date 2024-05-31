import { Box, Typography } from '@mui/material';

export interface IAppProps {
}

export function HomeSecond (props: IAppProps) {
  return (
        <Box 
        className="fullpage"
        sx={{
          // display: "flex",
          // flexWrap: "wrap",
          // justifyContent: "center",
          // alignItems: "center",
          // gap: "10%",
          // width: "100%",
          // height: "100%",
          bgcolor: "primary.main"
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "40%",
            height: "100%"
          }}>
            <img src="trivia/trivia-1.png" alt="trivia" className='trivia'/>
            <img src="trivia/trivia-2.png" alt="trivia" className='trivia'/>
          </Box>
          <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",            
            // minWidth: "50%"
            width: "60%"
          }}>
            <Box
            className="textContainer"
            sx={{
              maxWidth: "80%",
              bgcolor: "secondary.light",
            }}>
              <Typography variant='h5' color="primary.main" align="center" gutterBottom={true}>Une boisson qui traverse le temps et l'histoire</Typography>
              <Typography variant='body1' color="primary.dark" align="center" gutterBottom={true}>La Chicha Morada a une histoire ancienne remontant à
l'époque des Incas il y a plus de 500 ans. Les Incas
cultivaient le maïs morado pour l'alimentation et ses
propriétés médicinales, l'utilisant également dans des
cérémonies et rituels sacrés.</Typography>
              <Typography variant='body1' color="primary.dark" align="center" gutterBottom={true}>Au Pérou, la Chicha Morada est bien plus qu’une simple
boisson ; c’est un symbole de la culture et de l’héritage
andin. Elle est consommée lors de diverses occasions, des
repas familiaux quotidiens aux grandes célébrations.
Partout dans le pays, des stands de marchés aux
restaurants gastronomiques, vous trouverez des gens
savourant cette boisson unique.</Typography>
            </Box>
          </Box>
        </Box>
  );
}
