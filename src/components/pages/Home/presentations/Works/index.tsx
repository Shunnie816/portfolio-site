import { Typography } from "@mui/material";
import React from "react";
import { WorkCard } from "@/components/parts/WorkCard";
import { URL } from "../../containers/constants";
import { WorksWrapper, CardsWrapper } from "./styles";

export const Works = () => {
  return (
    <WorksWrapper id="works">
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ color: "text.primary" }}
      >
        My Works
      </Typography>
      <CardsWrapper>
        <WorkCard
          title="Study Tracker"
          description="A web application for tracking your study progress. This is my first personal project with Next.js and Firebase."
          skills={["TypeScript", "Next.js", "React", "Firebase"]}
          repogitoryUrl={URL.STUDY_TRACKER_REPO}
          zennUrl={URL.STUDY_TRACKER_ZENN}
          workUrl={URL.STUDY_TRACKER}
        />
        <WorkCard
          title="AI Radar"
          description="A personal system that automatically collects and summarizes AI news daily from multiple RSS sources using Claude API to keep up with the latest AI trends."
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
