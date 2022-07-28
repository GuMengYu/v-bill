import { IconButton } from "@mui/material";
import { ChevronRight, ChevronLeft, Refresh } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'
export default function BF() {
  const navigate = useNavigate()
  return (
    <div>
      <IconButton color="inherit" onClick={ () => navigate(-1) }>
        <ChevronLeft />
      </IconButton>
      <IconButton color="inherit" onClick={ () => navigate(1) }>
        <ChevronRight />
      </IconButton>
      <IconButton color="inherit" onClick={ () => location.reload() }>
        <Refresh />
      </IconButton>
    </div>
  );
}
