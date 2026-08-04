"use client";
import {
  Avatar,
  IconButton,
  ThemeProvider,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useMessages, useTranslations } from "next-intl";
import React from "react";
import { Icon } from "@/components/parts/Icon";
import { TypingCarousel } from "@/components/parts/TypingCarousel";
import { darkTheme } from "@/components/themes";
import { type ZennArticle } from "@/lib/zenn";
import { Experiences } from "../presentations/Experiences";
import { Works } from "../presentations/Works";
import { Writing } from "../presentations/Writing";
import { URL } from "./constants";
import {
  AvatarWrapper,
  IntroWrapper,
  IntroDescription,
  IconsWrapper,
  ArrowDownWrapper,
} from "./styles";

type Props = {
  articles: ZennArticle[];
};

export const Home = ({ articles }: Props) => {
  const t = useTranslations("About");

  /**
   * 配列のメッセージは `t.raw` だと戻り値が any になるため useMessages から取る。
   * Provider が持つオブジェクトをそのまま参照するので、TypingCarousel の
   * useEffect 依存に渡っても参照が変わらない。
   */
  const typingTexts = useMessages().Hero.typing;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* ヒーロー section は常にダーク背景のため darkTheme で固定する */}
      <ThemeProvider theme={darkTheme}>
        <AvatarWrapper id="home">
          <Avatar
            alt="ねこのこ"
            src="/assets/img/ねこのこ.jpg"
            sx={{ width: "140px", height: "140px" }}
          />
          <TypingCarousel texts={typingTexts} />
          <ArrowDownWrapper onClick={scrollToNextSection}>
            <IconButton aria-label="次のセクションにスクロール">
              <Icon
                icon="arrowDown"
                sx={{ color: "text.primary", fontSize: "3rem" }}
              />
            </IconButton>
          </ArrowDownWrapper>
        </AvatarWrapper>
      </ThemeProvider>
      <IntroWrapper id="about">
        <IntroDescription>
          <Typography variant="h4">Nekonoko</Typography>
          <Typography variant="h6" sx={{ color: "primary.light" }}>
            {t("role")}
          </Typography>
          <Typography>{t("bio1")}</Typography>
          <Typography>{t("bio2")}</Typography>
          <Typography>{t("bio3")}</Typography>
        </IntroDescription>
        <IconsWrapper>
          <Tooltip title="GitHub">
            <IconButton>
              <Link href={URL.GITHUB} target="_blank" rel="noreferrer noopener">
                <Icon icon="gitHub" color="primary" />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Zenn">
            <IconButton>
              <Link href={URL.ZENN} target="_blank" rel="noreferrer noopener">
                <Icon icon="zenn" color="primary" />
              </Link>
            </IconButton>
          </Tooltip>
        </IconsWrapper>
      </IntroWrapper>
      <Works />
      <Writing articles={articles} />
      <Experiences />
    </>
  );
};
