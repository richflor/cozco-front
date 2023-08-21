import { Card, CardContent, CardActions, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductInfo } from '../ProductInfo';

export interface propProduct {
    product:{
        id:number,
        price:number,
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
                width: "60%",
                minWidth: 225,
                height: "fit-content",
                bgcolor: "secondary.light",
                paddingBottom: 4
            }}
        >
            <CardMedia 
                image={`/photos${product.img}`}
                sx={{ 
                    height: smallScreen ? 250 : 350,
                }}
            />
            <CardContent>
                <Typography variant={smallScreen ? "h6" : "h5"} sx={{fontFamily: "Cunia", color: "primary.dark"}}>{product.name}</Typography>
                <Link to={`/product/${product.id}`}></Link>
            </CardContent>
            <CardActions>
                <ProductInfo product={product} />
            </CardActions>
        </Card>
    );
}
