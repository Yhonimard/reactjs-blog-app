import { IceSkating } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

const HomeSidebar = () => {
  return (
    <Box position="fixed" p={2}>
      <List sx={{ width: "200px" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IceSkating />
            </ListItemIcon>
            testing
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default HomeSidebar;
