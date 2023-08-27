import { Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import * as items from "../data/products.json"
import { ProductCard } from "./product/ProductCard";
import Carousel from "./utilities/Carrousel";

export function ProductsBis () {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const products = items.products;

    const content = products.map(product => <ProductCard product={product} />)

    return (
        <>
        <a href="#product" aria-hidden="true" id="product"></a>
        <Box
            sx={{
                width: "100vw",
                // height: "120vh",
                paddingBlock: "5vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "secondary.dark"
            }}        
        >
            <Typography variant={smallScreen ? "h5" : "h3"} sx={{color: "primary.dark", fontFamily: "Cunia"}}>Nos Produits</Typography>
            <Box
                sx={{
                    width: smallScreen ? "80vw" : "70vw",
                    height: "70vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: smallScreen ? "space-around" : "space-between",
                }}
            >
                <Carousel>
                    {content}
                </Carousel>
            </Box>
        </Box>
        </>
    );
}
