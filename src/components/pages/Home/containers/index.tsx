"use client";
import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { Avatar, IconButton, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@/components/parts/Icon";
import { SkillLevel } from "../presentations/SkillLevel";

const avatarWrapper = css`
  align-items: center;
  background-color: var(--bg-color-dark);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  height: 100vh;
  justify-content: center;
`;

const commonWrapperStyle = css`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-14) var(--spacing-4) 0;
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

const skillWrapper = css`
  ${commonWrapperStyle}
`;

const experienceWrapper = css`
  ${commonWrapperStyle}
  background-color: var(--bg-color-light);
`;

const educationWrapper = css`
  ${commonWrapperStyle}
`;

/** emotion styled components */
const AvatarWrapper = emotionStyled.section`${avatarWrapper}`;
const IntroWrapper = emotionStyled.section`${introWrapper}`;
const IntroDescription = emotionStyled.div`${introDescription}`;
const IconsWrapper = emotionStyled.div`${iconsWrapper}`;
const SkillWrapper = emotionStyled.section`${skillWrapper}`;
const ExperienceWrapper = emotionStyled.section`${experienceWrapper}`;
const EducationWrapper = emotionStyled.section`${educationWrapper}`;

export const Home = () => {
  return (
    <>
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
      <SkillWrapper>
        <Typography variant="h3" textAlign="center">
          Skills
        </Typography>
      </SkillWrapper>
      <ExperienceWrapper>
        <Typography variant="h3" textAlign="center">
          Experiences
        </Typography>
      </ExperienceWrapper>
      <EducationWrapper>
        <Typography variant="h3" textAlign="center">
          Education
        </Typography>
      </EducationWrapper>
    </>
  );
};
