import { Menu, MenuItem } from "@mui/material";

// eslint-disable-next-line react/prop-types
const NavbarMenu = ({ anchorEl, onClose }) => {
  const isOpen = Boolean(anchorEl);

  return (
    <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
      <MenuItem>logout</MenuItem>
    </Menu>
  );
};

export default NavbarMenu;