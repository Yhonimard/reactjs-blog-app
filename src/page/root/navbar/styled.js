import { Box, Toolbar, styled } from "@mui/material";

// const Search = styled(Box)(({ theme }) => ({}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconBoxs = styled(Box)(({ theme }) => ({
  display: "flex",

}));

export { StyledToolbar, Search, IconBoxs };
