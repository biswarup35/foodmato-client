import { styled } from "@mui/material";
import { Slider } from "@mui/material";

const PriceSlider = styled(Slider)(({ theme }) => {
  return {
    [`& .MuiSlider-valueLabel`]: {
      top: 54,
      backgroundColor: "unset",
      color: theme.palette.text.secondary,
    },
    [`& .MuiSlider-thumbColorPrimary`]: {
      backgroundColor: theme.palette.common.white,
      border: `2px solid ${theme.palette.primary.main}`,
    },
    [`& .MuiSlider-track`]: {
      height: "0px",
    },
    [`& .MuiSlider-rail`]: {
      height: "1px",
      color: theme.palette.text.secondary,
    },
  };
});

export default PriceSlider;
