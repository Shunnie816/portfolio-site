"use client";
import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { Avatar, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { breakpoint } from "@/assets/styles/variable";
import { Footer } from "@/components/parts/Footer";
import { Header } from "@/components/parts/Header";
import { Icon } from "@/components/parts/Icon";
import { Experiences } from "../presentations/Experiences";
import { SkillLevel } from "../presentations/SkillLevel";
import { Skills } from "../presentations/Skills";
import { commonWrapperStyle } from "./commonStyle";
import { URL } from "./constants";

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

  @media (min-width: ${breakpoint}) {
    flex-direction: row;
  }
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
      <AvatarWrapper id="home">
        <Avatar
          alt="ねこのこ"
          src="/assets/img/ねこのこ.jpg"
          sx={{ width: "140px", height: "140px" }}
        />
        <Typography variant="h3" component="p" sx={{ color: "text.primary" }}>
          Hi, I am Shun
        </Typography>
      </AvatarWrapper>
      <IntroWrapper id="about">
        <div>
          <IntroDescription>
            <Typography variant="h4">Shun Yoshiya</Typography>
            <Typography variant="h6" sx={{ color: "primary.light" }}>
              Frontend Developer
            </Typography>
            <Typography>
              I am a dedicated software engineer with 2 years of professional
              experience, and a total of 4 years including personal projects.
            </Typography>
            <Typography>
              Currently, I specialize in frontend development, focusing on
              technologies such as TypeScript, React, and Next.js. My goal is to
              eventually take on roles as a Tech Lead or Full-Stack Engineer.
            </Typography>
            <Typography>
              I am actively expanding my skill set to include Docker, Firebase,
              and Python.
            </Typography>
          </IntroDescription>
          <IconsWrapper>
            <IconButton>
              <Link href={URL.GITHUB} target="_blank" rel="noreferrer noopener">
                <Icon icon="gitHub" color="primary" />
              </Link>
            </IconButton>
            <IconButton>
              <Link
                href={URL.LINKEDIN}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon icon="linkedIn" color="primary" />
              </Link>
            </IconButton>
            <IconButton>
              <Link href={URL.X} target="_blank" rel="noreferrer noopener">
                <Icon icon="x" color="primary" />
              </Link>
            </IconButton>
          </IconsWrapper>
        </div>
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
      <Footer />
    </>
  );
};
