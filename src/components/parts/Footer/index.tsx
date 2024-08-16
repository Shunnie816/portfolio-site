import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { Divider, List, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { breakpoint } from "@/assets/styles/variable";
import { URL } from "@/components/pages/Home/containers/constants";
import { Icon } from "../Icon";

const wrapper = css`
  padding: var(--spacing-12) var(--spacing-4) var(--spacing-10);
  background-color: var(--bg-color-dark);
`;

const pcWrapper = css`
  @media (min-width: ${breakpoint}) {
    padding: 0 var(--spacing-24) var(--spacing-2);

    .item:hover {
      cursor: pointer;
    }
  }
`;

const itemWrapper = css`
  display: flex;
  align-items: flex-end;
  gap: var(--spacing-2);
  color: var();
`;

const copyRight = css`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-3);
`;

const Wrapper = emotionStyled.footer`
  ${wrapper}
`;

const PcWrapper = emotionStyled.div`
  ${pcWrapper}
`;

const ItemWrapper = emotionStyled.div`
  ${itemWrapper}
`;

const CopyRight = emotionStyled.div`
  ${copyRight}
`;

export const Footer = () => {
  /** コピーライト用 */
  const currentYear = new Date().getFullYear();

  const router = useRouter();

  const firstListItems = [
    { text: "About", anchor: "about" },
    { text: "Skills", anchor: "skills" },
    { text: "Experiences", anchor: "experiences" },
  ];
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
          <Icon icon="linkedIn" />
          Shun Yoshiya
        </ItemWrapper>
      ),
      id: "LinkedIn",
      url: URL.LINKEDIN,
    },
    {
      component: (
        <ItemWrapper>
          <Icon icon="x" />
          @nekonoko2323
        </ItemWrapper>
      ),
      id: "x",
      url: URL.X,
    },
  ];

  return (
    <Wrapper>
      <PcWrapper>
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
          © {currentYear} Shun Yoshiya. All rights are reserved.
        </Typography>
      </CopyRight>
    </Wrapper>
  );
};
