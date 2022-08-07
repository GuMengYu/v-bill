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
        minHeight: 128,
        alignItems: 'initial',
        flexDirection: 'column',
      }}
    >
      {back ? (
        <IconButton
          sx={{
            alignSelf: 'start',
            position: 'relative',
            left: '-12px',
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBack />
        </IconButton>
      ) : (
        ""
      )}

      <Typography variant="h5" mt="auto">{title}</Typography>
      {/* <Box
        sx={{
          position: "absolute",
          right: 0,
        }}
      >
        {more}
      </Box> */}
    </Toolbar>
  );
}
