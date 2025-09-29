import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { breakpoint } from "@/assets/styles/variable";
import { commonWrapperStyle } from "./commonStyle";

const avatarWrapper = css`
  align-items: center;
  background-color: var(--bg-color-dark);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  height: 100vh;
  justify-content: center;
  position: relative;
  text-align: center;
`;

const arrowDownWrapper = css`
  animation: bounce 2s infinite;
  bottom: var(--spacing-6);
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  transition: transform 0.2s ease-in-out;

  &:hover {
    animation-play-state: paused;
    transform: translateX(-50%) translateY(-5px);
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(-50%) translateY(0);
    }

    40% {
      transform: translateX(-50%) translateY(-10px);
    }

    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const introWrapper = css`
  ${commonWrapperStyle}
  background-color: var(--bg-color-light);

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    flex-direction: row;
  }
`;

const introDescription = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const iconsWrapper = css`
  margin-top: var(--spacing-4);
`;

/** emotion styled components */
export const AvatarWrapper = emotionStyled.section`${avatarWrapper}`;
export const ArrowDownWrapper = emotionStyled.div`${arrowDownWrapper}`;
export const IntroWrapper = emotionStyled.section`${introWrapper}`;
export const IntroDescription = emotionStyled.div`${introDescription}`;
export const IconsWrapper = emotionStyled.div`${iconsWrapper}`;
