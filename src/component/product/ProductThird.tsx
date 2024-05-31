import { Box, Typography } from "@mui/material";
export interface IAppProps {
}

export function ProductThird (props: IAppProps) {
  return (
    <Box className="fullpage" sx={{
      bgcolor: "primary.main",
      position: "relative",
      zIndex: "3"
    }}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "100%",   
      }}>
        <Box className="textContainer" 
        sx={{
          bgcolor: "secondary.light",
          maxWidth: "80%"
        }}>
        <Typography variant="h5" gutterBottom={true} color="primary.main" fontFamily="Cunia">Un Gout Unique et
Incomparable
        </Typography>
        <Typography variant="body1" color="primary.dark">Le maïs violet utilisé dans la Chicha
Morada offre une expérience gustative
unique, très différente de celle du maïs
jaune traditionnel. Contrairement au
maïs jaune, qui est généralement doux
et sucré, le maïs violet est légèrement
plus acide. Cette acidité subtile,
combinée avec des notes terreuses et
florales, crée une saveur complexe et
rafraîchissante. En infusion avec les
fruits et les épices, il en résulte une
boisson qui allie douceur, acidité et
profondeur aromatique, offrant ainsi
une expérience unique.
        </Typography>
        </Box>
      </Box>
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "50%"
        }}>
          <img src="photos/chicha/inside.png" alt="" className="bottle_inside" />
        </Box>
    </Box>
  );
}
