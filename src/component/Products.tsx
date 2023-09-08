import { Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import * as items from "../data/products.json"
import { ProductCard } from "./product/ProductCard";
import Carousel from "./utilities/Carrousel";

export function Products () {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const products = items.results;

    const content = products.map(product => <ProductCard product={product} key={product.id}/>)

    return (
        <Box
            sx={{
                width: "100vw",
                paddingBlock: "5vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "secondary.dark"
            }}        
        >
            <Typography variant={smallScreen ? "h5" : "h4"} sx={{color: "primary.dark", fontFamily: "Cunia"}}>Nos Produits</Typography>
            <Typography variant="subtitle2" color="secondary.dark">break</Typography>
            <Box
                sx={{
                    width: smallScreen ? "80vw" : "50vw",
                    maxWidth: 450,
                    // height: "70vh",
                }}
            >
                <Carousel>
                    {content}
                </Carousel>
            </Box>
        </Box>
    );
}
