import {
  Chip,
  Step,
  StepContent,
  StepLabel,
  type StepProps,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { ProjectWrapper, TitleWrapper, stepLabelSx } from "./styles";

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
  ...stepProps
}: ExperienceStepProps & StepProps) => {
  const t = useTranslations("ExperienceStep");

  return (
    <Step expanded {...stepProps}>
      <StepLabel sx={stepLabelSx}>
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
          {/* 1行の概要が最も小さい文字だったため、箇条書きより大きくして拾い読みできるようにする（#100） */}
          <Typography variant="body1">{description}</Typography>
          <div className="details">
            <div>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                {t("skillSets")}
              </Typography>
              {/* My Works のカードと同じ Chip 表現に揃える（#100） */}
              <div className="skills">
                {skillSets.map((skill) => (
                  <Chip key={skill} label={skill} color="primary" />
                ))}
              </div>
            </div>
            <div>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                {t("responsibilities")}
              </Typography>
              <div className="responsibilities">
                {responsibilities.map((resp) => (
                  <Typography key={resp} variant="body2">
                    - {resp}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        </ProjectWrapper>
      </StepContent>
    </Step>
  );
};
