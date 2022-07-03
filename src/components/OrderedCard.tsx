import { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import type { Restaurants } from "../types/restaurants";

type Props = Pick<Restaurants, "cover" | "name">;

const OrderedCard: FC<Props> = ({ cover, name }) => {
  return (
    <Card
      sx={{
        width: 260,
      }}
      variant="outlined"
    >
      <CardMedia component="img" height={180} alt={name} image={cover} />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="subtitle1" component="div">
              {name}
            </Typography>
            <Typography variant="caption" component="div">
              {name}
            </Typography>
          </div>
          <Button sx={{ color: "red" }}>Re-order</Button>
        </Box>
      </CardContent>
    </Card>
  );
};
export default OrderedCard;
