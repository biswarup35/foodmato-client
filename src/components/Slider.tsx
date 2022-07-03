import { styled } from "@mui/material";
// Create horizontal slider component
export default styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  overflowX: "scroll",
  overflowY: "hidden",
  whiteSpace: "nowrap",
  WebkitOverflowScrolling: "touch",
  [`&::-webkit-scrollbar`]: {
    display: "none",
  },
}));
