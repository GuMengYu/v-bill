import Header from "@/components/layout/Header";
import PageTransition from "@/components/PageTransition";
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default ({}: {}) => {
  function More() {
    return <IconButton>
      <MoreVert />
    </IconButton>
  }
  return <PageTransition>
    <Header title="设置" back more={ <More /> }></Header>
    
  </PageTransition>;
};
