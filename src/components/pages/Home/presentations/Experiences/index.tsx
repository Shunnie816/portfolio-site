import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { commonWrapperStyle } from "../../containers/commonStyle";

const experienceWrapper = css`
  ${commonWrapperStyle}
  background-color: var(--bg-color-light);
  padding-bottom: var(--spacing-9);
`;

const projectWrapper = css`
  margin-top: var(--spacing-3);

  .details {
    margin-top: var(--spacing-2);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }
`;

const ExperienceWrapper = emotionStyled.section`${experienceWrapper}`;
const ProjectWrapper = emotionStyled.div`${projectWrapper}`;

export const Experiences = () => {
  return (
    <ExperienceWrapper>
      <Typography variant="h3" textAlign="center">
        Experiences
      </Typography>
      <ProjectWrapper>
        <Typography variant="h6" sx={{ color: "primary.light" }}>
          My Page renewal project
        </Typography>
        <Typography variant="caption" sx={{ color: "secondary.dark" }}>
          July 2023 - Present
        </Typography>
        <Typography variant="body2">
          Developing a SPA for outsourcing staffs. Join as a frontend developer
          in a scrum team.
        </Typography>
        <div className="details">
          <div>
            <Typography sx={{ fontWeight: "bold", color: "primary.main" }}>
              Skill sets:
            </Typography>
            <Typography>・TypeScript</Typography>
            <Typography>・Next.js</Typography>
            <Typography>・React</Typography>
            <Typography>・Docker</Typography>
            <Typography>・AWS</Typography>
          </div>
          <div>
            <Typography sx={{ fontWeight: "bold", color: "primary.main" }}>
              Responsibilities:
            </Typography>
            <Typography>・Implement and test UI parts and pages</Typography>
            <Typography>・Frontend system desgin</Typography>
            <Typography>・a part of scrum master</Typography>
          </div>
        </div>
      </ProjectWrapper>
    </ExperienceWrapper>
  );
};
