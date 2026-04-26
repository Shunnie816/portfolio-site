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
                  <Typography>- TypeScript</Typography>
                  <Typography>- Next.js</Typography>
                  <Typography>- React</Typography>
                  <Typography>- Docker</Typography>
                  <Typography>- AWS</Typography>
                </div>
                <div>
                  <Typography
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    Responsibilities:
                  </Typography>
                  <Typography>
                    - Implement and test UI parts and pages
                  </Typography>
                  <Typography>- Code review and improvement</Typography>
                  <Typography>
                    - Fix bugs and improve user experience
                  </Typography>
                  <Typography>- Frontend system desgin</Typography>
                  <Typography>- Educating junior developers</Typography>
                </div>
              </div>
            </ProjectWrapper>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            <TitleWrapper>
              <Typography variant="h6" sx={{ color: "primary.light" }}>
                System Risk Response
              </Typography>
              <Typography variant="caption" sx={{ color: "secondary.dark" }}>
                October 2025 - April 2026
              </Typography>
            </TitleWrapper>
          </StepLabel>
          <StepContent>
            <ProjectWrapper>
              <Typography variant="body2">
                Led a major version upgrade of Next.js (14→16) and migration
                from Recoil to Jotai. Conducted end-to-end vulnerability
                assessment using Snyk as a lead engineer.
              </Typography>
              <div className="details">
                <div>
                  <Typography
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    Skill sets:
                  </Typography>
                  <Typography>- TypeScript</Typography>
                  <Typography>- Next.js</Typography>
                  <Typography>- React</Typography>
                  <Typography>- Docker</Typography>
                  <Typography>- AWS</Typography>
                </div>
                <div>
                  <Typography
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    Responsibilities:
                  </Typography>
                  <Typography>- Technical investigation and PoC</Typography>
                  <Typography>- Implementation and testing</Typography>
                  <Typography>- Vulnerability assessment with Snyk</Typography>
                  <Typography>
                    - Analysis and remediation of identified vulnerabilities
                  </Typography>
                  <Typography>- Lead engineer role</Typography>
                </div>
              </div>
            </ProjectWrapper>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            <TitleWrapper>
              <Typography variant="h6" sx={{ color: "primary.light" }}>
                Development Improvement Project
              </Typography>
              <Typography variant="caption" sx={{ color: "secondary.dark" }}>
                January 2026 - March 2026
              </Typography>
            </TitleWrapper>
          </StepLabel>
          <StepContent>
            <ProjectWrapper>
              <Typography variant="body2">
                Addressed document quality issues in the MY Page renewal
                project. Designed an AI-powered automated document checking
                mechanism and delivered results under limited capacity while
                managing concurrent projects.
              </Typography>
              <div className="details">
                <div>
                  <Typography
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    Skill sets:
                  </Typography>
                  <Typography>- Dify</Typography>
                  <Typography>- Python</Typography>
                </div>
                <div>
                  <Typography
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    Responsibilities:
                  </Typography>
                  <Typography>
                    - Designed AI-based automated document checking
                  </Typography>
                  <Typography>
                    - Created a Python tool to convert Excel to Markdown for AI
                    readability
                  </Typography>
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
