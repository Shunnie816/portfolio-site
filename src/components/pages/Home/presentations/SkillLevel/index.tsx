import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  TypographyProps,
} from "@mui/material";
import React from "react";
import { PcLayout, SpLayout } from "./styles";

export const SkillLevel = () => {
  return (
    <>
      <SkillLevelSp />
      <SkillLevelPc />
    </>
  );
};

type CustomProps = Omit<TypographyProps, "variant" | "component" | "color">;

const CustomTypography = ({ children, ...rest }: CustomProps) => {
  return (
    <Typography variant="h6" component="span" color="secondary.main" {...rest}>
      {children}
    </Typography>
  );
};

const circleWrapperSx = {
  position: "relative",
  display: "inline-flex",
};

const spCircleBoxSx = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "126px",
  height: "126px",
  borderRadius: 99,
  backgroundColor: "background.default",
};

const pcCircleBoxSx = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "110px",
  height: "110px",
  borderRadius: 99,
  backgroundColor: "background.default",
};

const SkillLevelSp = () => {
  return (
    <SpLayout>
      <Grid container spacing={4} marginTop={2} paddingBottom={4}>
        <Grid size={{ xs: 6 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={150}
              variant="determinate"
              value={80}
              sx={{ color: "info.main" }}
            />
            <Box sx={spCircleBoxSx}>
              <CustomTypography>TypeScript</CustomTypography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={150}
              variant="determinate"
              value={75}
              sx={{ color: "success.light" }}
            />
            <Box sx={spCircleBoxSx}>
              <CustomTypography>React</CustomTypography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={150}
              variant="determinate"
              value={70}
              sx={{ color: "secondary.dark" }}
            />
            <Box sx={spCircleBoxSx}>
              <CustomTypography>Next.js</CustomTypography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={150}
              variant="determinate"
              value={30}
              sx={{ color: "info.light" }}
            />
            <Box sx={spCircleBoxSx}>
              <CustomTypography>Docker</CustomTypography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={150}
              variant="determinate"
              value={40}
              sx={{ color: "warning.light" }}
            />
            <Box sx={spCircleBoxSx}>
              <CustomTypography>Firebase</CustomTypography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={150}
              variant="determinate"
              value={90}
              sx={{ color: "error.light" }}
            />
            <Box sx={spCircleBoxSx}>
              <CustomTypography textAlign="center">
                English <br /> Proficiency
              </CustomTypography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </SpLayout>
  );
};

const SkillLevelPc = () => {
  return (
    <PcLayout>
      <Grid container spacing={2} paddingBottom={4} paddingLeft={2}>
        <Grid size={{ xs: 4 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={130}
              variant="determinate"
              value={80}
              sx={{ color: "info.dark" }}
            />
            <Box sx={pcCircleBoxSx}>
              <CustomTypography>TypeScript</CustomTypography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={130}
              variant="determinate"
              value={75}
              sx={{ color: "success.light" }}
            />
            <Box sx={pcCircleBoxSx}>
              <CustomTypography>React</CustomTypography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={130}
              variant="determinate"
              value={70}
              sx={{ color: "secondary.dark" }}
            />
            <Box sx={pcCircleBoxSx}>
              <CustomTypography>Next.js</CustomTypography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={130}
              variant="determinate"
              value={30}
              sx={{ color: "info.light" }}
            />
            <Box sx={pcCircleBoxSx}>
              <CustomTypography>Docker</CustomTypography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={130}
              variant="determinate"
              value={40}
              sx={{ color: "warning.light" }}
            />
            <Box sx={pcCircleBoxSx}>
              <CustomTypography>Firebase</CustomTypography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Box sx={circleWrapperSx}>
            <CircularProgress
              size={130}
              variant="determinate"
              value={90}
              sx={{ color: "error.light" }}
            />
            <Box sx={pcCircleBoxSx}>
              <CustomTypography textAlign="center" fontSize="1rem">
                English <br /> Proficiency
              </CustomTypography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PcLayout>
  );
};
