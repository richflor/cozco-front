import { Card, CardContent, CardActions, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductInfo } from './ProductInfo';

export interface propProduct {
    product:{
        id:number,
        price:{
            [key:string]:number
        },
        name:string,
        img:string,
        desc: string;
        ingredients: string[];
    }
}

export function ProductCard ({product}:propProduct) {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Card
            sx={{
                width: "100%",
                minWidth: 225,
                height: "fit-content",
                bgcolor: "secondary.light",
                paddingBottom: 2,
                paddingTop: 2,
                display: "inline-block"
            }}
        >
            <CardMedia 
                image={`/photos${product.img}`}
                sx={{ 
                    height: smallScreen ? 250 : 350,
                    backgroundSize: "contain",
                }}
            />
            <CardContent>
                <Typography variant={smallScreen ? "h6" : "h5"} sx={{paddingLeft:1, fontFamily: "Cunia", color: "primary.dark"}}>{product.name}</Typography>
               
            </CardContent>
            <CardActions sx={{ paddingLeft: 3}}>
                <ProductInfo product={product} />
            </CardActions>
        </Card>
    );
}
