import styled from "@emotion/styled";
import { Container, Paper, TextField } from "@mui/material";

const AuthWrapper = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "background.default",
}));

const AuthFormWrapper = styled(Paper)(({ theme }) => ({
  padding: "1em",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "0.3em",
}));

export { AuthWrapper, AuthFormWrapper };
