import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import PriceSlider from "../PriceSlider";
import ListItemText from "@mui/material/ListItemText";
import { Collapse, ListItemButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ListFormats from "./ListFormats";
import ListOccasions from "./ListOccasions";
import { useAppDispatch } from "../../app/hooks";
import {
  setPrice,
  setFormat,
  setOccasion,
} from "../../features/filter/filterSlice";

const DrawerContents = () => {
  const dispatch = useAppDispatch();

  const [expandFormat, setExpandFormat] = React.useState(true);
  const [expandPrice, setExpandPrice] = React.useState(true);
  const [expandOccasion, setExpandOccasion] = React.useState(true);
  return (
    <>
      <Divider />
      <List>
        <ListItemButton dense onClick={() => setExpandFormat(!expandFormat)}>
          <ListItemText
            primary="Format"
            primaryTypographyProps={{
              variant: "button",
              sx: {
                textTransform: "none",
              },
            }}
          />
          {expandFormat || <ExpandMore />}
          {expandFormat && <ExpandLess />}
        </ListItemButton>
        <Collapse in={expandFormat} timeout="auto" unmountOnExit>
          <List sx={{ pl: 2, pt: 0 }} dense>
            <ListFormats
              onChange={(value) => {
                dispatch(setFormat(value));
              }}
            />
          </List>
        </Collapse>
        <ListItemButton dense onClick={() => setExpandPrice(!expandPrice)}>
          <ListItemText
            primary="Price"
            primaryTypographyProps={{
              variant: "button",
              sx: {
                textTransform: "none",
              },
            }}
          />
          {expandPrice || <ExpandMore />}
          {expandPrice && <ExpandLess />}
        </ListItemButton>
        <Collapse in={expandPrice} timeout="auto" unmountOnExit>
          <List sx={{ pr: 4, pl: 3, pt: 0, pb: 2 }} dense>
            <Box sx={{ pb: 2 }}>
              <PriceSlider
                getAriaLabel={() => "Price Range"}
                defaultValue={[50, 500]}
                onChange={(_, value) => {
                  dispatch(setPrice(value as number[]));
                }}
                valueLabelDisplay="on"
                valueLabelFormat={(value) => `₹${value}`}
                step={50}
                min={0}
                max={1000}
              />
            </Box>
          </List>
        </Collapse>
        <ListItemButton
          dense
          onClick={() => setExpandOccasion(!expandOccasion)}
        >
          <ListItemText
            primary="Occasion"
            primaryTypographyProps={{
              variant: "button",
              sx: {
                textTransform: "none",
              },
            }}
          />
          {expandOccasion || <ExpandMore />}
          {expandOccasion && <ExpandLess />}
        </ListItemButton>
        <Collapse in={expandOccasion} timeout="auto" unmountOnExit>
          <List sx={{ pl: 2, pt: 0 }} dense>
            <ListOccasions
              onChange={(value) => {
                dispatch(setOccasion(value));
              }}
            />
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default DrawerContents;
