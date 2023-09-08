import { Container, Typography, Box } from "@mui/material";


export function Contact () {
  return (
    <Box sx={{ bgcolor: "secondary.light"}}>
      <Container
            maxWidth="sm"
            sx={{
              height: "75vh",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5%%"
            }}
          >
            <img src="/logo/full-logo.png" alt="logo" style={{width: "60%"}} />
          <div style={{
            height: "50%",
          }}>
              <Typography variant="h4" color="primary.dark" align="center" fontFamily="Cunia">Comment nous contacter ?</Typography>
              <br />
              <br />
              <Typography variant="body1" align="center">Jorge Mellado - Fondateur</Typography>
              <Typography variant="body1" align="center">Téléphone : 06 64 31 68 83</Typography>
              <Typography variant="body1" align="center">Mail : contact.cozco@gmail.com</Typography>
            </div>
      </Container>      
    </Box>
    
  );
}
