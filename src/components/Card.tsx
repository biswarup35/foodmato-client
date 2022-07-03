import { FC } from "react";
import type { Restaurants } from "../types/restaurants";
import TextPrimaryColor from "./TextPrimaryColor";
import StarIcon from "@mui/icons-material/Star";
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";

type Props = Partial<Omit<Restaurants, "id" | "format" | "occasion">>;

/**
 *
 * todo: Show veg, non-veg icons
 */
const Card: FC<Props> = ({
  name = "",
  cover = "",
  price = 0,
  rating = 0,
  totalDish = 0,
  totalRatings = 0,
  type = [],
}) => {
  return (
    <MuiCard variant="outlined" sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        alt={name}
        image={cover}
        height={180}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <TextPrimaryColor display="inline">{`₹${price}/-`}</TextPrimaryColor>
        <Typography variant="body2" color="text.secondary" display="inline">
          {` per head . ${totalDish} dishes`}
        </Typography>
        <Box sx={{ pt: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <Chip
            icon={<StarIcon fontSize="small" />}
            label={rating.toFixed(1)}
            color="primary"
            sx={{ borderRadius: 1 }}
            size="small"
          />
          <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
            {`${totalRatings} Ratings`}
          </Typography>
        </Box>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
