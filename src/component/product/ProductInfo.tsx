import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";
import { propProduct } from "./ProductCard";

export function ProductInfo ({ product }: propProduct) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const quantityDisplay = (quantity:string):string => {
    let str:string;
    switch (quantity) {
      case "16x1l":
        str = "16 bouteilles 1L"
        break;
      case "32x0.5l":
        str = "32 bouteilles 50cl"
        break;
      default:
        str = ""
    }
    return str;
  }
  return (
  <>
  <Button 
    variant="contained" 
    color="primary"
    onClick={handleOpen}
    sx={{ 
      "&:hover": {
        textDecoration: "underline",
        color: "secondary.light"
      },
      borderRadius: 2
    }}
  >
    Description
  </Button>
  <Dialog
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{
          bgcolor: "secondary.light",
          color: "primary.dark",
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h6" sx={{ fontFamily: "Cunia" }} align="center">{product.name}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography variant="body1">{product.desc}</Typography>
            <br />
            <Typography variant="subtitle1">Composition: {product.ingredients.join(", ")}</Typography>
            <br />
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>Pas disponible à l'unité, uniquement en caissettes.</Typography>
            {Object.entries(product.price).map(q => 
              <>
                <Typography variant="subtitle1" sx={{ color: "primary.dark" }}>{`Quantité : ${quantityDisplay(q[0])}`}</Typography>
                <Typography variant="subtitle2" sx={{ color: "primary.main"  }}>{`Prix HT : ${q[1]} €`}</Typography>
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Retour</Button>
        </DialogActions>
      </Box>
  </Dialog>
  </>
  );
}
