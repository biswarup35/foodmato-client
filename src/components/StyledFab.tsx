import { Fab, styled } from "@mui/material";

export default styled(Fab)(({ theme }) => ({
  position: "absolute",
  top: "calc(50% - 40px)",
  backgroundColor: "white",
  border: `1px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  boxShadow: "none",
}));
