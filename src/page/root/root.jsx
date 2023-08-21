import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import AddButton from "../../component/addButton";

import Navbar from "./navbar";
const Root = () => {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        paddingTop={8}
        bgcolor="background.default"
        color="text.primary"
      >
        <Outlet />
      </Box>
      <AddButton />
    </>
  );
};

export default Root;
