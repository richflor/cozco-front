import { Box, Typography } from "@mui/material";

export interface IAppProps {
}

export function HomeThird (props: IAppProps) {
  return (
    <Box 
      className="fullpage"
      sx={{
        bgcolor: "secondary.light",
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-around",
          height: "100%",
          width: "60%"
        }}>
          <Box 
          className="textContainer"
          sx={{
            bgcolor: "primary.main"
          }}>
            <Typography variant='body1' color="white">
            La Chicha Morada est populaire pour sa
capacité à rassembler les gens et à offrir un goût
authentique de la tradition péruvienne. Sa
renommée a dépassé les frontières du Pérou,
séduisant les amateurs de boissons exotiques et
les passionnés de santé à travers le monde.
            </Typography>
          </Box>
          <Box 
            className="textContainer"
            sx={{
              bgcolor: "primary.main",
              position: "relative"
            }}>
            <Typography variant='body1' color="white" sx={{
              marginLeft: "45%"
            }}>
            En intégrant la Chicha Morada de Cozco
dans votre quotidien, vous découvrez
non seulement une boisson délicieuse,
mais vous embrassez également une
riche tradition culturelle péruvienne.
Profitez de cette expérience authentique,
directement dans vos verres !
            </Typography>
            <Box sx={{
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              // justifyContent: "center",
              height: "50vh",
              width: "50vh",
              borderRadius: "50%",
              bgcolor: "secondary.dark",
              position: "absolute",
              right: "60%"
            }}/>
            <img src="trivia/glass.png" alt="bottle_inside" className="glass" />
          </Box>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          height: "100%",
          width: "50%"
        }}>
          <img src="photos/chicha/outside.png" alt="" className="bottle_outside" />
        </Box>
    </Box>
  );
}
