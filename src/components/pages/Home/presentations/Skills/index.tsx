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
    <SkillWrapper>
      <Typography variant="h3" textAlign="center">
        Skills
      </Typography>
      <CardsWrapper>
        <Card title="TypeScript" avatarName="ts.png">
          Experienced most of the developments with this.
        </Card>
        <Card title="React" avatarName="react.png">
          Experienced most of the developments with this.
        </Card>
        <Card title="Next.js" avatarName="nextjs.png">
          Experienced most of the developments with this.
        </Card>
        <Card title="Storybook" avatarName="storybook.png">
          Experienced most of the developments with this.
        </Card>
        <Card title="MUI" avatarName="storybook.png">
          Experienced most of the developments with this.
        </Card>
        <Card title="Sass" avatarName="storybook.png">
          CSS modules, emotion
        </Card>
        <Card title="Docker" avatarName="docker.png">
          Experienced most of the developments with this.
        </Card>
        <Card title="Firebase" avatarName="firebase.png">
          Experienced most of the developments with this.
        </Card>
        <Card title="Git" avatarName="firebase.png">
          Experienced most of the developments with this.
        </Card>
        <Card title="Java" avatarName="java.png">
          Experienced most of the developments with this.
        </Card>
        <Card title="Python" avatarName="java.png">
          Experienced most of the developments with this.
        </Card>
      </CardsWrapper>
    </SkillWrapper>
  );
};
