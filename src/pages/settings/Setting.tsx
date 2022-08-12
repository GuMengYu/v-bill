import { Item } from "@/components/Item";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/PageTransition";
import { MoreVert, Inbox, Drafts } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";

export default function Setting() {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <Welcome />
      <Header title="设置" height={64}/>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>
    </PageTransition>
  );
}
