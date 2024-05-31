import { Box } from '@mui/material';
import * as React from 'react';

export interface IAppProps {
}

export function ProductFirst (props: IAppProps) {
  return (
    <Box className="fullpage"
    sx={{
        backgroundImage: "url(photos/cocktails.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        zIndex: "3"
    }}></Box>
  );
}
