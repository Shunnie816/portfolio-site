import { Typography } from "@mui/material";
import React from "react";
import { WorkCard } from "@/components/parts/WorkCard";
import { URL } from "../../containers/constants";
import { WorksWrapper, CardsWrapper } from "./styles";

export const Works = () => {
  return (
    <WorksWrapper id="works">
      <Typography variant="h3" textAlign="center">
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
      </CardsWrapper>
    </WorksWrapper>
  );
};
