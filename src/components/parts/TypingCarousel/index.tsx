"use client";
import { Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

export interface TypingCarouselProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorChar?: string;
  loop?: boolean;
  onComplete?: () => void;
  className?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
  color?: string;
}

export const TypingCarousel: React.FC<TypingCarouselProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  showCursor = true,
  cursorChar = "|",
  loop = true,
  onComplete,
  className,
  variant = "h3",
  color = "text.primary",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (!isDeleting) {
      // タイピング中
      if (displayedText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // タイピング完了、一時停止
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // 削除中
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // 削除完了、次のテキストへ
        setIsDeleting(false);
        if (currentIndex < texts.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else if (loop) {
          setCurrentIndex(0);
        } else {
          onComplete?.();
        }
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    displayedText,
    currentIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
    onComplete,
  ]);

  return (
    <Typography
      variant={variant}
      component="span"
      sx={{
        color,
        minHeight: "1.2em", // テキストの高さを固定してレイアウトシフトを防止
        display: "inline-block",
        ...(showCursor && {
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
        }),
      }}
      className={className}
    >
      {displayedText}
      {showCursor && <span className="cursor">{cursorChar}</span>}
    </Typography>
  );
};
