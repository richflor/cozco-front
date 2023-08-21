
import { Box, Button, SwipeableDrawer, useMediaQuery, useTheme, Typography, Link } from "@mui/material";
import { useState } from "react";
// import { Link } from "react-router-dom";

export function Navbar () {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, setDrawer] = useState(false);  

    const toggleDrawer = (val:boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDrawer(val);
    };

    const menuBtn = <Button onClick={toggleDrawer(true)}><Typography variant="h4" color="secondary">☰</Typography></Button>
    
    const links = [
        ["home", "Accueil"],
        ["product", "Produits"],
        ["partners", "Ou nous trouver ?"],
        ["contact", "Contact"]
    ]

    const content = links.map(link => {
        return <Link 
                    color="secondary.dark"
                    variant="subtitle2"
                    href={`#${link[0]}`}
                    underline="hover"
                    onClick={toggleDrawer(false)}
                >{link[1]}</Link>
        // return <Link style={{width: "fit-content"}} to={link[0]}>{link[1]}</Link>
    })  

    return (
        <nav className="navBar light-purple">
            <img src="/logo/full-logo.png" alt="logo_cuzco" />
            {smallScreen ? menuBtn :
            <div className="links_nav_container">
                {content}
            </div>}
            <SwipeableDrawer
                anchor={"top"}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                transitionDuration={180}
            >
                <Box
                    sx={{
                        width: "100vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        paddingTop: "10vh",
                        bgcolor: "primary.main"
                    }}
                >
                    {content}
                    <Button 
                        variant="text" 
                        color= "primary"
                        onClick={toggleDrawer(false)}
                    >
                        <Typography variant="h4" color="secondary">×</Typography>
                    </Button>
                </Box>
          </SwipeableDrawer>
        </nav>
    );
}
