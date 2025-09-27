import { Typography } from "@mui/material";
import React from "react";
import { Card } from "@/components/parts/Card";
import { SkillWrapper, CardsWrapper } from "./styles";

export const Skills = () => {
  return (
    <SkillWrapper id="skills">
      <Typography variant="h3" textAlign="center">
        Skills
      </Typography>
      <CardsWrapper>
        <Card title="TypeScript" avatarName="ts.png" className="child">
          Type-safe coding for scalable and maintainable applications using
          TypeScript. Often using for frontend development with React and
          Next.js.
        </Card>
        <Card title="React" avatarName="react.png" className="child">
          My favorite frontend framework and my main skill base for career
          development.
        </Card>
        <Card title="Next.js" avatarName="nextjs.png" className="child">
          Building high-performance web applications with Next.js, focusing on
          server-side rendering and static generation.
        </Card>
        <Card title="Storybook" avatarName="storybook.png" className="child">
          Utilizing Storybook for isolated UI development, ensuring component
          reusability and visual consistency across projects.
        </Card>
        <Card title="MUI" avatarName="mui.png" className="child">
          Enhancing frontend development with MUI’s extensive UI components and
          customizable themes for a cohesive user experience.
        </Card>
        <Card title="Docker" avatarName="docker.png" className="child">
          Getting started with Docker to build and manage basic containers,
          enhancing development efficiency and consistency.
        </Card>
        <Card title="Firebase" avatarName="firebase.png" className="child">
          Implementing Firebase App Hosting and Firestore to streamline
          deployment processes and manage static assets with ease. Also,
          learning Firebase Auth for authentication.
        </Card>
      </CardsWrapper>
    </SkillWrapper>
  );
};
