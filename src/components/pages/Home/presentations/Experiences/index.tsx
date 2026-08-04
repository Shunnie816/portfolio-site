import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useMessages, useTranslations } from "next-intl";
import React from "react";
import { ExperienceStep } from "@/components/parts/ExperienceStep";
import { ExperienceWrapper } from "./styles";

/**
 * 経歴の並びと使用技術。文言は messages の `Experiences.<id>` を参照する。
 * 技術名は翻訳の対象外のため、ここに残している。
 */
const EXPERIENCES = [
  {
    id: "myPageRenewal",
    skillSets: ["TypeScript", "Next.js", "React", "Docker", "AWS"],
  },
  {
    id: "systemRiskResponse",
    skillSets: ["TypeScript", "Next.js", "React", "Docker", "AWS"],
  },
  {
    id: "developmentImprovement",
    skillSets: ["Dify", "Python"],
  },
  {
    id: "aiStandardization",
    skillSets: ["Claude Code", "Docker", "AWS"],
    isActive: true,
  },
] as const;

export const Experiences = () => {
  const t = useTranslations("Experiences");
  // 担当業務は配列のため、any を返す t.raw ではなく型の付く useMessages から取る
  const experienceMessages = useMessages().Experiences;
  const activeStepIndex = EXPERIENCES.findIndex((it) => "isActive" in it);

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
        {EXPERIENCES.map(({ id, skillSets }) => (
          <ExperienceStep
            key={id}
            title={t(`${id}.title`)}
            period={t(`${id}.period`)}
            description={t(`${id}.description`)}
            skillSets={[...skillSets]}
            responsibilities={experienceMessages[id].responsibilities}
          />
        ))}
        <Step>
          <StepLabel />
        </Step>
      </Stepper>
    </ExperienceWrapper>
  );
};
