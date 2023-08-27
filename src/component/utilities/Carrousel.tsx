import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Box, Button, Typography,  useMediaQuery, useTheme } from "@mui/material";

//https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0


interface Props {
  children:JSX.Element[],
  backAndForth?:boolean
}
/**
 * Need children array of JSX element
 */
export const Carousel = ({ children, backAndForth = false }:Props) => {

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex:number) => {
    // allow going back to start when hit the end, reverse also true
    if (backAndForth) {
      if (newIndex < 0) {
        newIndex = children.length - 1;
      } else if (newIndex >= children.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
      return;
    }

    if (newIndex >= 0 && newIndex < children.length) {
      console.log("upt")
      setActiveIndex(newIndex);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      style={{
        overflow: "hidden"
      }}
    >
        <Box
            sx={{
                transform: `translateX(-${activeIndex * 100}%)`,
                whiteSpace: "nowrap",
                transition: "transform 0.3s"
            }}
        >
            {children}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10%"
          }}
        >
          <Button 
            variant="text"
            sx={{
              minWidth: 0
            }}
            onClick={()=> updateIndex(activeIndex - 1)}
          >
            <Typography variant={smallScreen ? "h5" : "h3"}>❮</Typography>
          </Button>
          <Button 
            variant="text"
            sx={{
              minWidth: 0
            }}
            onClick={()=> updateIndex(activeIndex + 1)}
          >
             <Typography variant={smallScreen ? "h5" : "h3"}>❯</Typography>
          </Button>
        </Box>
    </div>
  );
};

export default Carousel;
