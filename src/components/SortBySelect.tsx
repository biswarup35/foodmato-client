import * as React from "react";
import {
  Stack,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
const SortBySelect = () => {
  const [sortBy, setSortBy] = React.useState<string>("Most Popular");

  const sortOptions = [
    "Most Popular",
    "Highest Rated",
    "Lowest Rated",
    "Price High",
    "Price Low",
  ];

  const handleChange = React.useCallback((event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  }, []);
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="subtitle1">{`Sort by : `}</Typography>
      <FormControl sx={{ width: "180px" }}>
        <Select
          size="small"
          displayEmpty
          value={sortBy}
          onChange={handleChange}
        >
          {sortOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
export default SortBySelect;
