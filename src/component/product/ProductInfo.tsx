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
  return (
  <>
  <Button variant="text" color="primary" onClick={handleOpen}>
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
          <Typography variant="h6" sx={{ fontFamily: "Cunia" }} >{product.name}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography variant="subtitle2">{product.desc}</Typography>
            <br />
            <Typography variant="subtitle2">Composition: {product.ingredients.join(", ")}</Typography>
            <br />
            {Object.entries(product.price).map(q => 
              <>
                <Typography variant="subtitle1" sx={{ color: "primary.dark" }}>{`Quantité : ${q[0]}`}</Typography>
                <Typography variant="subtitle2" sx={{ color: "primary.main" }}>{`Prix : ${q[1]} €`}</Typography>
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
