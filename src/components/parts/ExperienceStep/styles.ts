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
