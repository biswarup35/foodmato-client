import { styled } from "@mui/material";
// Create horizontal slider component
export default styled("div")(({ theme }) => ({
  display: "inline-block",
  [`: first-of-type`]: {
    marginInlineEnd: theme.spacing(1),
  },
  [`: not(:first-of-type)`]: {
    marginInline: theme.spacing(1),
  },
}));
