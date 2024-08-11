import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  TypographyProps,
} from "@mui/material";
import React from "react";

const circleBoxSx = {
  top: 44,
  left: 44,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "126px",
  height: "126px",
  borderRadius: 99,
  backgroundColor: "background.default",
};

type CustomProps = Omit<TypographyProps, "variant" | "component" | "color">;

const CustomTypography = ({ children, ...rest }: CustomProps) => {
  return (
    <Typography variant="h6" component="span" color="secondary.main" {...rest}>
      {children}
    </Typography>
  );
};

export const SkillLevel = () => {
  return (
    <Grid container spacing={4} marginTop={2} paddingBottom={4}>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <CircularProgress
          size={150}
          variant="determinate"
          value={75}
          sx={{ color: "info.main" }}
        />
        <Box sx={circleBoxSx}>
          <CustomTypography>TypeScript</CustomTypography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <CircularProgress
          size={150}
          variant="determinate"
          value={70}
          sx={{ color: "success.light" }}
        />
        <Box sx={circleBoxSx}>
          <CustomTypography>React</CustomTypography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <CircularProgress
          size={150}
          variant="determinate"
          value={70}
          sx={{ color: "secondary.dark" }}
        />
        <Box sx={circleBoxSx}>
          <CustomTypography>Next.js</CustomTypography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <CircularProgress
          size={150}
          variant="determinate"
          value={35}
          sx={{ color: "info.light" }}
        />
        <Box sx={circleBoxSx}>
          <CustomTypography>Docker</CustomTypography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <CircularProgress
          size={150}
          variant="determinate"
          value={30}
          sx={{ color: "warning.light" }}
        />
        <Box sx={circleBoxSx}>
          <CustomTypography>Firebase</CustomTypography>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ position: "relative" }}>
        <CircularProgress
          size={150}
          variant="determinate"
          value={85}
          sx={{ color: "error.light" }}
        />
        <Box sx={circleBoxSx}>
          <CustomTypography textAlign="center">
            English <br /> Proficiency
          </CustomTypography>
        </Box>
      </Grid>
    </Grid>
  );
};
