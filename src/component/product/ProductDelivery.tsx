import { Box, Typography } from "@mui/material";

export interface IAppProps {
}

export function ProductDelivery (props: IAppProps) {
  return (
    <Box className="fullpage"
    sx={{
      display:"flex",
      flexDirection: "column",
      // justifyContent: "space-evenly",
      alignItems: "center",
      bgcolor: "primary.main"
    }}
    >
      <Typography variant="h4" color="white">Et pour la livraison ?</Typography>
      <img src="logo/colis.png" alt="colis" className="colis" />
      <Box
      className="textContainer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        height: "40%",
        width: "50%",
        maxWidth: "700px",
        bgcolor: "secondary.light"
      }}>
        <img src="logo/livraison.png" alt="livraison" className="livraison" />
      </Box>
    </Box>
  );
}
