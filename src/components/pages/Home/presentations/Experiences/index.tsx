import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import { ExperienceWrapper, ProjectWrapper, TitleWrapper } from "./styles";

export const Experiences = () => {
  return (
    <ExperienceWrapper id="experiences">
      <Typography variant="h3" textAlign="center">
        Experiences
      </Typography>
      <Stepper orientation="vertical">
        <Step>
          <StepLabel>
            <TitleWrapper>
              <Typography variant="h6" sx={{ color: "primary.light" }}>
                My Page renewal project
              </Typography>
              <Typography variant="caption" sx={{ color: "secondary.dark" }}>
                July 2023 - Present
              </Typography>
            </TitleWrapper>
          </StepLabel>
          <StepContent>
            <ProjectWrapper>
              <Typography variant="body2">
                Developing a SPA for outsourcing staffs. Join as a frontend
                developer in a scrum team.
              </Typography>
              <div className="details">
                <div>
                  <Typography
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    Skill sets:
                  </Typography>
                  <Typography>・TypeScript</Typography>
                  <Typography>・Next.js</Typography>
                  <Typography>・React</Typography>
                  <Typography>・Docker</Typography>
                  <Typography>・AWS</Typography>
                </div>
                <div>
                  <Typography
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    Responsibilities:
                  </Typography>
                  <Typography>
                    ・Implement and test UI parts and pages
                  </Typography>
                  <Typography>・Frontend system desgin</Typography>
                  <Typography>・A part of scrum master</Typography>
                </div>
              </div>
            </ProjectWrapper>
          </StepContent>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
    </ExperienceWrapper>
  );
};
