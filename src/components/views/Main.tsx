import {
  Box,
  Toolbar,
  Typography,
  Divider,
  Grid,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { FC } from "react";
import type { Restaurants } from "../../types/restaurants";
import Card from "../Card";

type Props = {
  data: Restaurants[] | undefined;
};
const Main: FC<Props> = ({ data }) => {
  const mdUp = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));
  return (
    <Box flex="1">
      <Toolbar variant="dense">
        <Typography variant="button" noWrap>
          {`Results (${data?.length || 0})`}
        </Typography>
      </Toolbar>
      <Divider />
      <Grid
        container
        sx={{
          mt: 2,
          pl: mdUp ? 2 : 0,
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
