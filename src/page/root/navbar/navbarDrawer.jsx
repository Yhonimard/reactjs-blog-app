/* eslint-disable react/prop-types */
import { LogoDev } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";

const NavbarDrawer = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="left">
      <List sx={{ width: 300 }}>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <LogoDev />
            </ListItemIcon>
            <ListItemText primary="testing"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavbarDrawer;
