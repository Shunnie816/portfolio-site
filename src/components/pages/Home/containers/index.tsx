"use client";
import { Avatar, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Footer } from "@/components/parts/Footer";
import { Header } from "@/components/parts/Header";
import { Icon } from "@/components/parts/Icon";
import { Experiences } from "../presentations/Experiences";
import { SkillLevel } from "../presentations/SkillLevel";
import { Skills } from "../presentations/Skills";
import { URL } from "./constants";
import {
  AvatarWrapper,
  IntroWrapper,
  IntroDescription,
  IconsWrapper,
} from "./styles";

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
          Hi, I am Nekonoko
        </Typography>
      </AvatarWrapper>
      <IntroWrapper id="about">
        <div>
          <IntroDescription>
            <Typography variant="h4">Nekonoko</Typography>
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
