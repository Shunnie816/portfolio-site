"use client";
import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { Avatar, IconButton, Typography } from "@mui/material";
import React from "react";
import { Header } from "@/components/parts/Header";
import { Icon } from "@/components/parts/Icon";
import { Experiences } from "../presentations/Experiences";
import { SkillLevel } from "../presentations/SkillLevel";
import { Skills } from "../presentations/Skills";
import { commonWrapperStyle } from "./commonStyle";

const avatarWrapper = css`
  align-items: center;
  background-color: var(--bg-color-dark);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  height: 100vh;
  justify-content: center;
`;

const introWrapper = css`
  ${commonWrapperStyle}
  background-color: var(--bg-color-light);
`;

const introDescription = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const iconsWrapper = css`
  margin-top: var(--spacing-4);
`;

// const learningWrapper = css`
//   ${commonWrapperStyle}
// `;

/** emotion styled components */
const AvatarWrapper = emotionStyled.section`${avatarWrapper}`;
const IntroWrapper = emotionStyled.section`${introWrapper}`;
const IntroDescription = emotionStyled.div`${introDescription}`;
const IconsWrapper = emotionStyled.div`${iconsWrapper}`;
// const LearningWrapper = emotionStyled.section`${learningWrapper}`;

export const Home = () => {
  return (
    <>
      <Header />
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
      <IntroWrapper>
        <IntroDescription>
          <Typography variant="h4">Shun Yoshiya</Typography>
          <Typography variant="h6" sx={{ color: "primary.light" }}>
            Frontend Developer
          </Typography>
          <Typography>
            I am a passionate software engineer with x years of working
            experience. I built OSS tools for Kubernetes using GO. My tools help
            people to deploy their workloads in Kubernetes. Sometimes, I work on
            some fun projects such as writing a theme, etc.
          </Typography>
        </IntroDescription>
        <IconsWrapper>
          <IconButton>
            <Icon icon="gitHub" color="primary" />
          </IconButton>
          <IconButton>
            <Icon icon="linkedIn" color="primary" />
          </IconButton>
          <IconButton>
            <Icon icon="x" color="primary" />
          </IconButton>
        </IconsWrapper>
        <SkillLevel />
      </IntroWrapper>
      <Skills />
      <Experiences />

      {/* 
      TODO: 追加予定
      <LearningWrapper>
        <Typography variant="h3" textAlign="center">
          Education
        </Typography>
      </LearningWrapper> */}
    </>
  );
};
