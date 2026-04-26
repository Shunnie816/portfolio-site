import { Step, StepContent, StepLabel, Typography } from "@mui/material";
import React from "react";
import { ProjectWrapper, TitleWrapper } from "./styles";

export type ExperienceStepProps = {
  title: string;
  period: string;
  description: string;
  skillSets: string[];
  responsibilities: string[];
};

export const ExperienceStep = ({
  title,
  period,
  description,
  skillSets,
  responsibilities,
}: ExperienceStepProps) => {
  return (
    <Step expanded>
      <StepLabel>
        <TitleWrapper>
          <Typography variant="h6" sx={{ color: "primary.light" }}>
            {title}
          </Typography>
          <Typography variant="caption" sx={{ color: "secondary.dark" }}>
            {period}
          </Typography>
        </TitleWrapper>
      </StepLabel>
      <StepContent>
        <ProjectWrapper>
          <Typography variant="body2">{description}</Typography>
          <div className="details">
            <div>
              <Typography sx={{ fontWeight: "bold", color: "primary.main" }}>
                Skill sets:
              </Typography>
              {skillSets.map((skill) => (
                <Typography key={skill}>- {skill}</Typography>
              ))}
            </div>
            <div>
              <Typography sx={{ fontWeight: "bold", color: "primary.main" }}>
                Responsibilities:
              </Typography>
              {responsibilities.map((resp) => (
                <Typography key={resp}>- {resp}</Typography>
              ))}
            </div>
          </div>
        </ProjectWrapper>
      </StepContent>
    </Step>
  );
};
