import { Container, Typography, Box, Button } from "@mui/material";


export function Contact () {
  return (
    <Box sx={{ bgcolor: "secondary.light"}}>
      <Container
            maxWidth="sm"
            sx={{
              height: "77vh",
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
              <br />
              <br />
              <div style={{
                display:"flex",
                justifyContent: "center"
              }}>
                <Button variant="contained" color="primary">
                <a target="_blank" href="https://www.instagram.com/cozco_off/">
                  <Typography 
                    variant="inherit" 
                    color="white" 
                    sx={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}>
                    Suivez-nos actualités sur instagram !</Typography>
                </a>
                </Button>
              </div>
            </div>
      </Container>      
    </Box>
    
  );
}
