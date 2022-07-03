import { Box, Typography, Button, Toolbar } from "@mui/material";
import PermanentLeftDrawer from "./views/PermanentLeftDrawer";

const Filter = () => {
  return (
    <Box sx={{ width: 240 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        style={{
          paddingInline: 16,
        }}
        variant="dense"
      >
        <Typography variant="button" noWrap>
          Filters
        </Typography>
        <Button
          sx={{
            fontSize: ".7rem",
            textTransform: "none",
          }}
          size="small"
          variant="text"
        >
          Reset all
        </Button>
      </Toolbar>
      <PermanentLeftDrawer />
    </Box>
  );
};

export default Filter;
