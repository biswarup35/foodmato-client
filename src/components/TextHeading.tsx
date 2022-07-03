import { Typography, styled } from "@mui/material";
export default styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  textTransform: "uppercase",
  color: theme.palette.common.black,
}));
