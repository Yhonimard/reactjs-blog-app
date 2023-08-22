import {
  AppBar,
  Avatar,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { useState } from "react";
import NavbarMenu from "./navbarMenu";
import { Search, StyledToolbar } from "./styled";
import { Menu } from "@mui/icons-material";
import NavbarDrawer from "./navbarDrawer";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const openDrawer = () => {
    setIsOpenDrawer(true);
  };

  const closeDrawer = () => {
    setIsOpenDrawer(false);
  };

  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant="subtitle1" display={{ xs: "none", sm: "block" }}>
          blog app
        </Typography>
        <IconButton
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={openDrawer}
        >
          <Menu
            sx={{
              color: "background.default",
            }}
            width={50}
            height={50}
          />
        </IconButton>
        <Search>
          <InputBase
            placeholder="search..."
            sx={{ width: "100%", color: "black" }}
          />
        </Search>
        <IconButton onClick={openMenu}>
          <Avatar sx={{ width: 30, height: 30 }} />
        </IconButton>
      </StyledToolbar>
      <NavbarMenu anchorEl={anchorEl} onClose={closeMenu} />
      <NavbarDrawer open={isOpenDrawer} onClose={closeDrawer} />
    </AppBar>
  );
};

export default Navbar;
