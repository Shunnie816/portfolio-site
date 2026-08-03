import { Card as MUICard, CardActionArea, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Body, cardActionAreaSx, cardSx, dateSx, titleSx } from "./styles";

type Props = {
  title: string;
  url: string;
  /** ISO 8601 形式 */
  publishedAt?: string;
};

/** ロケールに依存しないよう UTC の年月日で表示する */
const formatDate = (publishedAt: string) =>
  publishedAt.slice(0, 10).replace(/-/g, ".");

export const ArticleCard = ({ title, url, publishedAt }: Props) => {
  return (
    <MUICard sx={cardSx}>
      <CardActionArea
        component={Link}
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        sx={cardActionAreaSx}
      >
        <Body>
          <Typography variant="body2" className="title" sx={titleSx}>
            {title}
          </Typography>
          {publishedAt && (
            <Typography variant="caption" sx={dateSx}>
              {formatDate(publishedAt)}
            </Typography>
          )}
        </Body>
      </CardActionArea>
    </MUICard>
  );
};
