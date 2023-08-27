import { Box, Divider, Paper, Typography } from "@mui/material";
import ColorButton from "../components/ColorButton";

const Public = () => {
  const content = (
    <Paper
      component="section"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          width: { xs: "17rem", sm: "34rem", lg: "50rem" },
          height: { xs: "8.5rem", sm: "17rem", lg: "25rem" },
          mb: { xs: "1rem", sm: "1.5rem", lg: "2.5rem" },
          borderRadius: "8px",
        }}
        alt="A Logo"
        src="/images/A-background.png"
      />
      <Divider />
      <Box component="main">
        <Typography
          color="text"
          sx={{ fontSize: { xs: "0.7rem", sm: "1.4rem", lg: "2rem" } }}
        >
         Task management
        </Typography>
      </Box>

      <Box
        component="footer"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "fit-content",
          mt: { xs: "1rem", sm: "2rem", lg: "3rem" },
        }}
      >
        <ColorButton variant="contained" color="primary" to="/login">
          User Login
        </ColorButton>

        <ColorButton variant="contained" color="primary" to="/register">
          Register (For Demo)
        </ColorButton>
      </Box>

      {/* Add the smaller inscription at the bottom */}
      <Typography
        color="text"
        sx={{
          fontSize: { xs: "0.5rem", sm: "0.8rem", lg: "1rem" },
          mt: "1rem",
        }}
      >
        Created in 2023
      </Typography>
    </Paper>
  );

  return content;
};

export default Public;
