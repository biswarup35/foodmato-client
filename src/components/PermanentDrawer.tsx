import * as React from "react";
import { Drawer } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const PermanentDrawer: React.FC<Props> = ({ children }) => {
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
      {children}
    </Drawer>
  );
};

export default PermanentDrawer;
