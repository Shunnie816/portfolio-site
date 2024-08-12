import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { Divider, List, ListItemText, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Icon } from "../Icon";

const wrapper = css`
  padding: var(--spacing-12) var(--spacing-4) var(--spacing-10);
  background-color: var(--bg-color-dark);
`;

const itemWrapper = css`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
`;

const copyRight = css`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-3);
`;

const Wrapper = emotionStyled.footer`
  ${wrapper}
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
    },
    {
      component: (
        <ItemWrapper>
          <Icon icon="linkedIn" />
          Shun Yoshiya
        </ItemWrapper>
      ),
      id: "LinkedIn",
    },
    {
      component: (
        <ItemWrapper>
          <Icon icon="x" />
          Shun Yoshiya
        </ItemWrapper>
      ),
      id: "x",
    },
  ];

  return (
    <Wrapper>
      <Typography sx={{ color: "secondary.main" }}>Navigation</Typography>
      <List>
        {firstListItems.map((item) => {
          return (
            <div
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
            <React.Fragment key={item.id}>
              <ListItemText
                primary={item.component}
                sx={{ color: "text.disabled" }}
                primaryTypographyProps={{ variant: "caption" }}
              />
            </React.Fragment>
          );
        })}
      </List>
      <Divider sx={{ borderColor: "text.disabled" }} />
      <CopyRight>
        <Typography variant="caption" sx={{ color: "text.disabled" }}>
          © {currentYear} Shun Yoshiya. All rights are reserved.
        </Typography>
      </CopyRight>
    </Wrapper>
  );
};
