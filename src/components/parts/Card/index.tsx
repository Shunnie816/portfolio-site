import {
  Card as MUICard,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  avatarName: string;
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
        sx={{
          backgroundColor: "secondary.light",
          color: "primary.dark",
          height: "48px",
        }}
        titleTypographyProps={{ variant: "h6" }}
      />
      <Divider sx={{ borderColor: "primary.main" }} />
      <CardContent sx={{ backgroundColor: "common.white" }}>
        {children}
      </CardContent>
    </MUICard>
  );
};
