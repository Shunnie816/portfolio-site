import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import {
  ExperienceStep,
  type ExperienceStepProps,
} from "@/components/parts/ExperienceStep";
import { ExperienceWrapper } from "./styles";

type ExperienceData = ExperienceStepProps & { isActive?: boolean };

const EXPERIENCES: ExperienceData[] = [
  {
    title: "My Page renewal project",
    period: "July 2023 - January 2025",
    description:
      "Developing a SPA for outsourcing staffs. Join as a frontend developer in a scrum team.",
    skillSets: ["TypeScript", "Next.js", "React", "Docker", "AWS"],
    responsibilities: [
      "Implement and test UI parts and pages",
      "Code review and improvement",
      "Fix bugs and improve user experience",
      "Frontend system design",
      "Educating junior developers",
    ],
  },
  {
    title: "System Risk Response",
    period: "October 2025 - April 2026",
    description:
      "Led a major version upgrade of Next.js (14→16) and migration from Recoil to Jotai. Conducted end-to-end vulnerability assessment using Snyk as a lead engineer.",
    skillSets: ["TypeScript", "Next.js", "React", "Docker", "AWS"],
    responsibilities: [
      "Technical investigation and PoC",
      "Implementation and testing",
      "Vulnerability assessment with Snyk",
      "Analysis and remediation of identified vulnerabilities",
      "Lead engineer role",
    ],
  },
  {
    title: "Development Improvement Project",
    period: "January 2026 - March 2026",
    description:
      "Addressed document quality issues in the MY Page renewal project. Designed an AI-powered automated document checking mechanism and delivered results under limited capacity while managing concurrent projects.",
    skillSets: ["Dify", "Python"],
    responsibilities: [
      "Designed AI-based automated document checking",
      "Created a Python tool to convert Excel to Markdown for AI readability",
    ],
  },
  {
    title: "AI Product Development Standardization",
    period: "April 2026 - June 2026",
    description:
      "Leading standardization of AI-driven application development practices across the team. Providing Claude Code environment and sharing knowledge on AI-assisted development workflows.",
    skillSets: ["Claude Code", "Docker", "AWS"],
    responsibilities: [
      "Creating application development standards assuming AI-driven development",
      "Providing Claude Code usage environment for the team",
      "Sharing knowledge and best practices on utilizing Claude Code",
    ],
    isActive: true,
  },
];

export const Experiences = () => {
  const activeStepIndex = EXPERIENCES.findIndex((e) => e.isActive);

  return (
    <ExperienceWrapper id="experiences">
      <Typography variant="h3" textAlign="center">
        Experiences
      </Typography>
      <Stepper
        orientation="vertical"
        nonLinear
        activeStep={activeStepIndex >= 0 ? activeStepIndex : undefined}
      >
        {EXPERIENCES.map(({ isActive: _, ...experience }) => (
          <ExperienceStep key={experience.title} {...experience} />
        ))}
        <Step>
          <StepLabel />
        </Step>
      </Stepper>
    </ExperienceWrapper>
  );
};
