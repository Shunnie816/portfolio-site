import { Typography } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { ArticleCard } from "@/components/parts/ArticleCard";
import { type ZennArticle } from "@/lib/zenn";
import { URL } from "../../containers/constants";
import { CardsWrapper, Fallback, WritingWrapper } from "./styles";

type Props = {
  articles: ZennArticle[];
};

export const Writing = ({ articles }: Props) => {
  const t = useTranslations("Writing");

  return (
    <WritingWrapper id="writing">
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ color: "text.primary" }}
      >
        Writing
      </Typography>

      {articles.length > 0 ? (
        <CardsWrapper>
          {articles.map((article) => (
            <ArticleCard key={article.url} {...article} />
          ))}
        </CardsWrapper>
      ) : (
        // feed の取得に失敗してもセクションが空にならないよう Zenn への導線を残す
        <Fallback>
          <Typography sx={{ color: "text.primary" }}>
            {t.rich("fallback", {
              link: (chunks) => (
                <Link href={URL.ZENN} target="_blank" rel="noreferrer noopener">
                  {chunks}
                </Link>
              ),
            })}
          </Typography>
        </Fallback>
      )}
    </WritingWrapper>
  );
};
