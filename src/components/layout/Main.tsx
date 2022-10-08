import { Container } from "@mui/material";
import Router from "../../router";
export default function Main() {
  return (
    <Container
      sx={{
        height: '100vh',
        pb: '56px'
      }}
    >
      <Router />
    </Container>
  );
}
