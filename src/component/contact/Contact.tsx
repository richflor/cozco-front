import { Box, Typography } from "@mui/material";

export interface IAppProps {
}

export function Contact (props: IAppProps) {
  return (
    <Box className="fullpage"
      sx={{
        bgcolor: "secondary.light",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
      }}>
        <img src="photos/Jorge.png" alt="CEO" className="jorge" />
        <img src="logo/full-logo.png" alt="" className="logoContact" />
      </Box>
      <Typography variant="h4" color="black">
          Où nous Trouver ?
      </Typography>
    </Box>
  );
}
