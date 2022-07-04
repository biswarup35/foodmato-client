import * as React from "react";
import {
  Box,
  Toolbar,
  Typography,
  Divider,
  Grid,
  useMediaQuery,
  Theme,
  Stack,
  Drawer,
} from "@mui/material";
import type { Restaurants } from "../../types/restaurants";
import Card from "../Card";
import SortBySelect from "../SortBySelect";
import SortByChips from "../SortByChips";
import FilterButtonMobile from "../FilterButtonMobile";
import DrawerContents from "./DrawerContents";

type Props = {
  data: Restaurants[] | undefined;
};
const Main: React.FC<Props> = ({ data }) => {
  const mdUp = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Box flex="1">
      <Toolbar variant="dense">
        <Typography variant="button" noWrap>
          {`Results (${data?.length || 0})`}
        </Typography>
      </Toolbar>
      <Divider />
      {/* Sorting & Filtering(Mobile) */}
      <Stack sx={{ mt: 4, ml: mdUp ? 4 : 0 }} direction="row">
        {mdUp && <SortByChips />}
        {mdUp || <FilterButtonMobile onClick={handleOpen} />}
        {mdUp || (
          <Drawer open={open} onClose={handleClose}>
            <Box sx={{ width: 345 }}>
              <DrawerContents />
            </Box>
          </Drawer>
        )}
        <SortBySelect />
      </Stack>
      <Grid
        container
        sx={{
          mt: 2,
          pl: mdUp ? 4 : 0,
        }}
        spacing={2}
      >
        {data &&
          data.map(
            ({
              id,
              name,
              cover,
              price,
              rating,
              totalDish,
              totalRatings,
              type,
            }) => (
              <Grid key={id} item xs={12} sm={6} lg={4}>
                <Card
                  name={name}
                  cover={cover}
                  price={price}
                  totalDish={totalDish}
                  rating={rating}
                  totalRatings={totalRatings}
                  type={type}
                />
              </Grid>
            )
          )}
      </Grid>
    </Box>
  );
};

export default Main;
