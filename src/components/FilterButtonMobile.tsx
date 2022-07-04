import * as React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Button } from "@mui/material";

type Props = {
  onClick: () => void;
};

const FilterButtonMobile: React.FC<Props> = ({ onClick }) => {
  return (
    <Box flex="1">
      <Button onClick={onClick} endIcon={<FilterAltIcon />}>
        Filters
      </Button>
    </Box>
  );
};

export default FilterButtonMobile;
