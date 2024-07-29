import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";

const circleBoxSx = {
  top: 25,
  left: 25,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const SkillLevel = () => {
  return (
    <Grid container spacing={4} marginTop={2} paddingBottom={4}>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <CircularProgress size={150} variant="determinate" value={75} />
        <Box sx={circleBoxSx}>
          <Typography variant="h3" component="span" color="primary.main">
            75%
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <CircularProgress size={150} variant="determinate" value={75} />
        <Box sx={circleBoxSx}>
          <Typography variant="h3" component="span" color="primary.main">
            75%
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <CircularProgress size={150} variant="determinate" value={75} />
        <Box sx={circleBoxSx}>
          <Typography variant="h3" component="span" color="primary.main">
            75%
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <CircularProgress size={150} variant="determinate" value={75} />
        <Box sx={circleBoxSx}>
          <Typography variant="h3" component="span" color="primary.main">
            75%
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
