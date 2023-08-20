import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Add from "../../component/addPost/add";
import Navbar from "../../component/navbar/navbar";
const Root = () => {
  return (
    <>
      <Navbar />
      <Box component="main" paddingTop={8}>
        <Outlet />
      </Box>
      <Add />
    </>
  );
};

export default Root;
