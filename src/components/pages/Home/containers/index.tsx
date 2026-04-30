"use client";
import {
  Avatar,
  IconButton,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { Icon } from "@/components/parts/Icon";
import { TypingCarousel } from "@/components/parts/TypingCarousel";
import { darkTheme } from "@/components/themes";
import { Experiences } from "../presentations/Experiences";
import { SkillLevel } from "../presentations/SkillLevel";
import { Skills } from "../presentations/Skills";
import { Works } from "../presentations/Works";
import { TYPING_TEXT, URL } from "./constants";
import {
  AvatarWrapper,
  IntroWrapper,
  IntroDescription,
  IconsWrapper,
  ArrowDownWrapper,
} from "./styles";

export const Home = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* ヒーロー section は常にダーク背景のため darkTheme で固定する */}
      <ThemeProvider theme={darkTheme}>
        <AvatarWrapper id="home">
          <Avatar
            alt="ねこのこ"
            src="/assets/img/ねこのこ.jpg"
            sx={{ width: "140px", height: "140px" }}
          />
          <TypingCarousel texts={TYPING_TEXT} />
          <ArrowDownWrapper onClick={scrollToNextSection}>
            <IconButton aria-label="次のセクションにスクロール">
              <Icon
                icon="arrowDown"
                sx={{ color: "text.primary", fontSize: "3rem" }}
              />
            </IconButton>
          </ArrowDownWrapper>
        </AvatarWrapper>
      </ThemeProvider>
      <IntroWrapper id="about">
        <div>
          <IntroDescription>
            <Typography variant="h4">Nekonoko</Typography>
            <Typography variant="h6" sx={{ color: "primary.light" }}>
              Frontend Developer
            </Typography>
            <Typography>
              I am a dedicated software engineer with 3 years of professional
              experience, and a total of 5 years including personal projects.
            </Typography>
            <Typography>
              I specialize in frontend development with TypeScript, React, and
              Next.js. My goal is to take on architect and tech lead roles —
              driving teams through technical excellence.
            </Typography>
            <Typography>
              I am actively expanding into infrastructure (AWS, Firebase) and
              AI-driven development to strengthen my design capabilities beyond
              the frontend.
            </Typography>
          </IntroDescription>
          <IconsWrapper>
            <Tooltip title="GitHub">
              <IconButton>
                <Link
                  href={URL.GITHUB}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon icon="gitHub" color="primary" />
                </Link>
              </IconButton>
            </Tooltip>
            <Tooltip title="Zenn">
              <IconButton>
                <Link href={URL.ZENN} target="_blank" rel="noreferrer noopener">
                  <Icon icon="zenn" color="primary" />
                </Link>
              </IconButton>
            </Tooltip>
            <Tooltip title="X">
              <IconButton>
                <Link href={URL.X} target="_blank" rel="noreferrer noopener">
                  <Icon icon="x" color="primary" />
                </Link>
              </IconButton>
            </Tooltip>
          </IconsWrapper>
        </div>
        <SkillLevel />
      </IntroWrapper>
      <Skills />
      <Experiences />
      <Works />
    </>
  );
};
