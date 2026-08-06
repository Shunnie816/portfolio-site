import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { breakpoint } from "@/assets/styles/variable";

const projectWrapper = css`
  margin-left: var(--spacing-4);
  margin-top: var(--spacing-3);

  .details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    margin-top: var(--spacing-3);
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-2);
    margin-top: var(--spacing-2);
  }

  .responsibilities {
    margin-top: var(--spacing-2);

    /* 箇条書きが詰まって読みにくいため、Typography の line-height を上書きして行間を広げる（#100） */
    p {
      line-height: 1.9;
    }
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    margin-left: var(--spacing-18);
  }
`;

const titleWrapper = css`
  margin-left: var(--spacing-4);

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    margin-left: var(--spacing-18);
  }
`;

export const ProjectWrapper = emotionStyled.div`${projectWrapper}`;
export const TitleWrapper = emotionStyled.div`${titleWrapper}`;

/** MUI sx styles */
/**
 * StepLabel の中身が「タイトル + 期間」の2行のため、
 * 既定の align-items: center では数字がラベル全体の中央 = タイトルより下に来る。
 * 上寄せにしたうえで、24px の数字の中心がタイトル1行目（line-height 32px）の中心に
 * 合うよう 4px だけ下げる（#99）。
 */
export const stepLabelSx = {
  alignItems: "flex-start",

  "& .MuiStepLabel-iconContainer": {
    pt: 0.5,
  },
};
