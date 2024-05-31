import { Box, Typography } from "@mui/material";

export interface IAppProps {
}

export function ProductCards (props: IAppProps) {
  return (
    <Box className="fullpage"
    sx={{
      display:"flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      bgcolor: "secondary.light"
    }}
    >
      <Typography variant="h4" color="black">Tarifs</Typography>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        height: "80%",
        width: "100%"
      }}>
      {/* transformer les carte en composant */}
        <Box 
          className="textContainer"
          sx={{
            display:"flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
            padding: "2.5%",
            height: "60%",
            width: "20%",
            minWidth: "200px",
            bgcolor: "primary.main",
        }}>
          <Box sx={{
            borderRadius: "50%",
            height: "30%",
          }}>
            <img src="photos/chicha/chicha-1.jpg" alt="chicha morada" className="product_card_bottle" />
          </Box>
        </Box>
        <Box 
          className="textContainer"
          sx={{
            display:"flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
            padding: "2.5%",
            height: "60%",
            width: "20%",
            minWidth: "200px",
            bgcolor: "primary.main"
        }}>
          <Box sx={{
            height: "30%",
          }}>
            <img src="photos/maracuya/maracuya-1.jpg" alt="chicha morada" className="product_card_bottle" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
