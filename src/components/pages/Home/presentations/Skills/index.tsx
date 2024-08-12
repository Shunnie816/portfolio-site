import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { Card } from "@/components/parts/Card";
import { commonWrapperStyle } from "../../containers/commonStyle";

const skillWrapper = css`
  ${commonWrapperStyle}
`;

const cardsWrapper = css`
  padding: var(--spacing-4) 0 var(--spacing-9);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const SkillWrapper = emotionStyled.section`${skillWrapper}`;
const CardsWrapper = emotionStyled.div`${cardsWrapper}`;

export const Skills = () => {
  return (
    <SkillWrapper id="skills">
      <Typography variant="h3" textAlign="center">
        Skills
      </Typography>
      <CardsWrapper>
        <Card title="TypeScript" avatarName="ts.png">
          Type-safe coding for scalable and maintainable applications using
          TypeScript.
        </Card>
        <Card title="React" avatarName="react.png">
          Skilled in integrating React with modern tools and libraries for
          efficient development.
        </Card>
        <Card title="Next.js" avatarName="nextjs.png">
          Building high-performance web applications with Next.js, focusing on
          server-side rendering and static generation.
        </Card>
        <Card title="Storybook" avatarName="storybook.png">
          Utilizing Storybook for isolated UI development, ensuring component
          reusability and visual consistency across projects.
        </Card>
        <Card title="MUI" avatarName="mui.png">
          Enhancing frontend development with MUI’s extensive UI components and
          customizable themes for a cohesive user experience.
        </Card>
        <Card title="Sass" avatarName="sass.png">
          Optimizing CSS with Sass to create maintainable, scalable, and modular
          stylesheets for efficient frontend development.
        </Card>
        <Card title="Docker" avatarName="docker.png">
          Getting started with Docker to build and manage basic containers,
          enhancing development efficiency and consistency.
        </Card>
        <Card title="Firebase" avatarName="firebase.png">
          Implementing Firebase Hosting and Storage to streamline deployment
          processes and manage static assets with ease.
        </Card>
        <Card title="Git" avatarName="git.png">
          Utilizing GitHub and GitLab for effective source code management and
          team collaboration, ensuring smooth development processes and version
          control.
        </Card>
        <Card title="Java" avatarName="java.png">
          Holding Java Silver certification, with a strong grasp of Java
          fundamentals and a readiness to build upon this knowledge with
          practical experience.
        </Card>
        <Card title="Python" avatarName="python.png">
          Beginning my journey with Python, eager to apply and expand my skills
          in personal development projects and explore its full potential.
        </Card>
      </CardsWrapper>
    </SkillWrapper>
  );
};
