import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { WorkCard } from "@/components/parts/WorkCard";
import { URL } from "../../containers/constants";
import { WorksWrapper, CardsWrapper } from "./styles";

export const Works = () => {
  const t = useTranslations("Works");

  return (
    <WorksWrapper id="works">
      {/* 常に白背景のため、Experiences と同じく body の文字色を継承する（#97） */}
      <Typography variant="h3" textAlign="center">
        My Works
      </Typography>
      <CardsWrapper>
        <WorkCard
          title="Study Tracker"
          description={t("studyTracker.description")}
          skills={["TypeScript", "Next.js", "React", "Firebase"]}
          repogitoryUrl={URL.STUDY_TRACKER_REPO}
          zennUrl={URL.STUDY_TRACKER_ZENN}
          workUrl={URL.STUDY_TRACKER}
        />
        <WorkCard
          title="AI Radar"
          description={t("aiRadar.description")}
          skills={[
            "TypeScript",
            "Next.js",
            "React",
            "Firebase",
            "Cloud Functions",
            "Claude API",
          ]}
          repogitoryUrl={URL.AI_RADAR_REPO}
          workUrl={URL.AI_RADAR}
        />
      </CardsWrapper>
    </WorksWrapper>
  );
};
