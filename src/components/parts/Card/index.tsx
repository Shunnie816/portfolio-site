import {
  Card as MUICard,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  children: string;
  avatarName: string;
};

const cardHeaderSx = {
  backgroundColor: "secondary.light",
  color: "primary.dark",
  maxHeight: "48px",
};

export const Card = ({ title, children, avatarName }: Props) => {
  return (
    <MUICard>
      <CardHeader
        title={title}
        avatar={
          <Image
            src={`/assets/img/${avatarName}`}
            width={32}
            height={32}
            alt={avatarName}
          />
        }
        sx={cardHeaderSx}
        titleTypographyProps={{ variant: "h6" }}
      />
      <Divider sx={{ borderColor: "primary.main" }} />
      <CardContent sx={{ backgroundColor: "common.white" }}>
        <Typography sx={{ color: "primary.dark" }}>{children}</Typography>
      </CardContent>
    </MUICard>
  );
};
