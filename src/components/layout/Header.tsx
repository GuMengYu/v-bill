import { Box, IconButton, Toolbar, Typography } from "@mui/material";

import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function Header({
  title = "",
  back = false,
  more,
}: {
  title: string;
  back?: boolean;
  more?: JSX.Element;
}) {
  const navigate = useNavigate();

  return (
    <Toolbar
      sx={{
        padding: 0,
        margin: "0 -16px",
        justifyContent: "center",
      }}
    >
      {back ? (
        <IconButton
          sx={{
            position: "absolute",
            left: 0,
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBack />
        </IconButton>
      ) : (
        ""
      )}

      <Typography variant="subtitle1">{title}</Typography>
      <Box
        sx={{
          position: "absolute",
          right: 0,
        }}
      >
        {more}
      </Box>
    </Toolbar>
  );
}
