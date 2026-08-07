import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";

const body = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  height: 100%;
  padding: var(--spacing-4);

  /* タイトルは3行で省略する */
  .title {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

/** emotion styled components */
export const Body = emotionStyled.div`${body}`;

/** MUI sx styles */
// Card は常にライトなサーフェスのため、モードに追従する text.primary は使わない
// （ダークモードでは paper と text.primary がどちらも gray になり文字が消える）
export const cardSx = {
  backgroundColor: "common.white",
  // WorkCard と縁の見え方を揃える（#98）
  border: "1px solid",
  borderColor: "divider",
  height: "100%",
  transition: "transform 0.2s ease-in-out",

  "&:hover": {
    transform: "translateY(-4px)",
  },
};

export const cardActionAreaSx = {
  height: "100%",
};

export const titleSx = {
  color: "primary.dark",
};

export const dateSx = {
  color: "text.disabled",
  marginTop: "auto",
};
