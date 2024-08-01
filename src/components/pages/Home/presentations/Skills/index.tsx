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
  margin: var(--spacing-4) 0 var(--spacing-9);
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
        <Card title="TypeScript" avatarName="ts.png">
          Experienced most of the developments with this.
        </Card>
        <Card title="TypeScript" avatarName="ts.png">
          Experienced most of the developments with this.
        </Card>
      </CardsWrapper>
    </SkillWrapper>
  );
};