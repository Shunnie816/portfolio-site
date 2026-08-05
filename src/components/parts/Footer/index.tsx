import { Divider, List, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  FOOTER_NAV_ITEMS,
  URL,
} from "@/components/pages/Home/containers/constants";
import { Icon } from "../Icon";
import { Wrapper, PcWrapper, ItemWrapper, CopyRight } from "./styles";

export const Footer = () => {
  /** コピーライト用 */
  const currentYear = new Date().getFullYear();

  const router = useRouter();

  const firstListItems = FOOTER_NAV_ITEMS;
  const secondListItems = [
    {
      component: (
        <ItemWrapper>
          <Icon icon="gitHub" />
          Shunnie816
        </ItemWrapper>
      ),
      id: "gitHub",
      url: URL.GITHUB,
    },
    {
      component: (
        <ItemWrapper>
          <Icon icon="zenn" />
          ねこのこ -Nekonoko-
        </ItemWrapper>
      ),
      id: "zenn",
      url: URL.ZENN,
    },
  ];

  return (
    <Wrapper>
      <PcWrapper>
        {/* 見出しはナビゲーションの一部として英語で固定する（#92） */}
        <Typography sx={{ color: "secondary.main" }}>Navigation</Typography>
        <List>
          {firstListItems.map((item) => {
            return (
              <div
                className="item"
                key={item.text}
                onClick={() => {
                  router.push(`#${item.anchor}`);
                }}
              >
                <ListItemText
                  primary={item.text}
                  sx={{ color: "text.disabled" }}
                  primaryTypographyProps={{ variant: "body2" }}
                />
              </div>
            );
          })}
        </List>
        <Typography sx={{ color: "secondary.main" }}>Contact Me</Typography>
        <List>
          {secondListItems.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <ListItemText
                  primary={item.component}
                  sx={{ color: "text.disabled" }}
                  primaryTypographyProps={{ variant: "caption" }}
                />
              </Link>
            );
          })}
        </List>
      </PcWrapper>
      <Divider sx={{ borderColor: "text.disabled" }} />

      <CopyRight>
        <Typography variant="caption" sx={{ color: "text.disabled" }}>
          © {currentYear} Nekonoko. All rights are reserved.
        </Typography>
      </CopyRight>
    </Wrapper>
  );
};
