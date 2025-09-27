import {
  Card as MUICard,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Chip,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { Icon } from "../Icon";
import {
  LinkContainer,
  LinksWrapper,
  cardSx,
  cardHeaderSx,
  dividerSx,
  descriptionSx,
  chipSx,
  titleSx,
} from "./styles";

type Props = {
  title: string;
  description: string;
  skills: string[];
  repogitoryUrl: string;
  zennUrl: string;
  workUrl: string;
};

export const WorkCard = ({
  title,
  description,
  skills,
  repogitoryUrl,
  zennUrl,
  workUrl,
}: Props) => {
  return (
    <MUICard sx={cardSx}>
      <CardHeader
        title={title}
        sx={cardHeaderSx}
        titleTypographyProps={{ variant: "h6" }}
      />
      <Divider sx={dividerSx} />
      <CardContent>
        <Typography sx={descriptionSx}>{description}</Typography>

        <LinksWrapper>
          <Link href={repogitoryUrl} target="_blank" rel="noreferrer noopener">
            <LinkContainer>
              <Icon icon="gitHub" color="primary" />
              <Typography sx={titleSx}>{title}</Typography>
            </LinkContainer>
          </Link>
          <Link href={workUrl} target="_blank" rel="noreferrer noopener">
            <LinkContainer>
              <Icon icon="exitToApp" color="primary" />
              <Typography sx={titleSx}>View Application</Typography>
            </LinkContainer>
          </Link>
          <Link href={zennUrl} target="_blank" rel="noreferrer noopener">
            <LinkContainer>
              <Icon icon="zenn" color="primary" />
              <Typography sx={titleSx}>Details</Typography>
            </LinkContainer>
          </Link>
        </LinksWrapper>
        <div>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} color="primary" sx={chipSx} />
          ))}
        </div>
      </CardContent>
    </MUICard>
  );
};
