import { Box, Typography } from '@mui/material';

export interface IAppProps {
}

export function HomeFirst (props: IAppProps) {
  return (
        <Box
        className="fullpage"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "secondary.light"
        }}>
          <Box sx={{
            backgroundImage: "url(demo.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            width: "50%"
            //need a media query
          }}/>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100%",            
          }}>
            <Box
            className="textContainer"
            sx={{
              maxWidth: "80%",
              bgcolor: "primary.main",
            }}
            >
              <Typography color="secondary.dark" variant='h4'>Bienvenu chez Cozco</Typography>
              <Box sx={{
                width: "50%",
                marginBottom: "0.35em",
                position: "relative"
              }}>
                <img src="logo/full-logo.png" alt="logo" className='logo1stpage' />
                {/* <Typography fontFamily="Cunia" color="black"
                  sx={{
                    position: "absolute",
                    fontSize: "1.3vw",
                    left: "13%",
                    bottom: "0"
                  }}
                >chicha morada</Typography> */}
              </Box>
              <Typography variant='subtitle1' color="secondary.dark" align='center'>Un Héritage Péruvien, Une Saveur Inoubliable</Typography>
              <Typography variant='body1' color="white" align='center'>La Chicha Morada est une boisson traditionnelle péruvienne, prisée pour sa couleur violette intense et un goût unit. Elle est préparée à partir de maïs violet, un type de maïs cultivé dans les Andes depuis des siècles. Ce maïs spécial, connu sous le nom de "maíz morado" est la base de la Chicha Morada.</Typography>
            </Box>
          </Box>
        </Box>
  );
}
