"use client";
import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";

const boxSx = {
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
};

const avatarWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
`;

const AvatarWrapper = emotionStyled.div`
${avatarWrapper}
`;

export const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box component="section" sx={boxSx}>
        <AvatarWrapper>
          <Avatar
            alt="ねこのこ"
            src="/assets/img/ねこのこ.jpg"
            sx={{ width: "140px", height: "140px" }}
          />
          <Typography variant="h3" component="p" sx={{ color: "text.primary" }}>
            Hi, I am Shun
          </Typography>
        </AvatarWrapper>
      </Box>
    </Container>
  );
};
