import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import PriceSlider from "../PriceSlider";
import ListItemText from "@mui/material/ListItemText";
import {
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  ListItemButton,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function PermanentDrawerLeft() {
  const [expandFormat, setExpandFormat] = React.useState(true);
  const [expandPrice, setExpandPrice] = React.useState(true);
  const [expandOccasion, setExpandOccasion] = React.useState(true);
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        style: {
          position: "relative",
        },
      }}
      ModalProps={{
        container: document.getElementById("container"),
        disableAutoFocus: true,
        style: {
          position: "absolute",
        },
      }}
    >
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
            <FormGroup>
              {[
                "Buffet",
                "Mini Buffet",
                "Lunch Box",
                "Snack Box",
                "Live Counter",
                "Food Trucks",
                "Pop Up",
              ].map((item, index) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      style={{
                        height: "1.8rem",
                      }}
                    />
                  }
                  label={item}
                />
              ))}
            </FormGroup>
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
                onChange={() => {}}
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
            <FormGroup>
              {[
                "Birthday Celebration",
                "Baby Shower",
                "House Warming",
                "Society Event",
              ].map((item, index) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      style={{
                        height: "1.8rem",
                      }}
                    />
                  }
                  label={item}
                />
              ))}
            </FormGroup>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}
