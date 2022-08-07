import { Container } from "@mui/material";
import Router from "../../router";
import { useSelector } from "react-redux";
import { Height } from "@mui/icons-material";

export default function Main() {
  return (
    <Container
      style={{
        paddingBottom: '56px'
      }}
    >
      <Router />
    </Container>
  );
}
