import { SxProps, Theme } from "@mui/material";
import { breakpoint } from "@/assets/styles/variable";

export const typingCarouselStyles: SxProps<Theme> = (theme) => ({
  color: "text.primary",
  minHeight: "1.2em",
  display: "inline-block",
  wordBreak: "break-word",
  whiteSpace: "pre-wrap",
  textAlign: "center",
  ...theme.typography.h4,
  padding: "0 16px",
  [`@media (min-width: ${breakpoint})`]: {
    ...theme.typography.h3,
  },
  "& .cursor": {
    animation: "blink 1s infinite",
    marginLeft: "2px",
  },
  "@keyframes blink": {
    "0%, 50%": {
      opacity: 1,
    },
    "51%, 100%": {
      opacity: 0,
    },
  },
});
