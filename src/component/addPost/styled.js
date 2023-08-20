import { Box, Modal, styled } from "@mui/material";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const InnerModalWrap = styled(Box)(({ theme }) => ({
  width: "30%",
  height: 230,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
  padding: 10,

  [theme.breakpoints.down("lg")]: {
    minWidth: "50%"
  },
  [theme.breakpoints.down("lg")]: {
    width: "40%",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
}));

export { StyledModal, InnerModalWrap, UserBox };
