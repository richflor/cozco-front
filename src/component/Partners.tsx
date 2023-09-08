import { Box, Typography } from "@mui/material";
import Carousel from "./utilities/Carrousel";
import * as items from "../data/partners.json";
import { PartnerCard } from "./partner/PartnerCard";

export function Partners () {

  const partners = items.results;

  const content = partners.map(partner => <PartnerCard partner={partner} key={partner.id}/>)

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "84vh",
        paddingTop: "5vh",
        bgcolor: "primary.light",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          minWidth: 250,
          maxWidth: 550,
          width: "70%",
        }}
      >
        <Typography variant="h4" color="primary.dark" align="center" fontFamily="Cunia">Restaurants Partenaires</Typography>
        <Typography variant="subtitle2" color="primary.light">break</Typography>
        <Typography variant="subtitle2" color="primary.light">break</Typography>
        <Carousel backAndForth={true}>
          {content}
        </Carousel>
      </Box>
    </Box>
  );
}
