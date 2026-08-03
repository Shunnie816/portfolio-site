import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { ArticleCard } from "@/components/parts/ArticleCard";
import { type ZennArticle } from "@/lib/zenn";
import { URL } from "../../containers/constants";
import { CardsWrapper, Fallback, WritingWrapper } from "./styles";

type Props = {
  articles: ZennArticle[];
};

export const Writing = ({ articles }: Props) => {
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
            記事を読み込めませんでした。
            <Link href={URL.ZENN} target="_blank" rel="noreferrer noopener">
              Zenn
            </Link>
            で公開しています。
          </Typography>
        </Fallback>
      )}
    </WritingWrapper>
  );
};
