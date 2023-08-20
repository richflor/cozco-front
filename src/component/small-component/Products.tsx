import { Box, Button, Slide, Typography, useMediaQuery, useTheme} from "@mui/material";
import * as items from "../../data/products.json"
import { ProductCard } from "./ProductCard";
import { useState } from "react";

export function Products () {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const products = items.results;

    const content = products.map(product => <ProductCard product={product} />)

    const [indexP, setIndex] = useState(0);
    const [left, showLeft] = useState(false);
    const [right, showRight] = useState(false);

    const clickLeft = (index:number) => {
        if(index > 0) {
            setIndex((i) => i-1);
            showLeft(true);
            showRight(false);
        }
        console.log(indexP)
    }

    const clickRight = (index:number) => {
        if(index < content.length - 1) {
            setIndex((i) => i+1);
            showRight(true);
            showLeft(false);
        }
        console.log(indexP)
    }

    return (
        <Box
            sx={{
                width: "100vw",
                height: "70vh",
                paddingTop: "5vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "secondary.dark"
            }}        
        >
            <Typography variant={smallScreen ? "h5" : "h3"} sx={{color: "primary.main", fontFamily: "Cunia"}}>Nos Produits</Typography>
            <Box
                sx={{
                    width: smallScreen ? "100vw" : "70vw",
                    height: "70vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: smallScreen ? "space-around" : "space-between",
                }}
            >
                <Button 
                    variant="text"
                    sx={{
                        minWidth: 0
                    }}
                    onClick={()=> clickLeft(indexP)}
                >
                    <Typography variant={smallScreen ? "h5" : "h3"}>❮</Typography>
                </Button>
                    {content[indexP]}
                <Button 
                    variant="text"
                    sx={{
                        minWidth: 0
                    }}
                    onClick={()=> clickRight(indexP)}
                >
                    <Typography variant={smallScreen ? "h5" : "h3"}>❯</Typography>
                </Button>
            </Box>
        </Box>
    );
}
