import { List } from "@mui/material";
import StreamItem from "./StreamItem";
export default function StreamList() {
  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      maxHeight: 'calc(100vh - 300px)',
      overflow: 'auto',
    }}>
      <StreamItem />
      <StreamItem />
    </List>
  );
}
