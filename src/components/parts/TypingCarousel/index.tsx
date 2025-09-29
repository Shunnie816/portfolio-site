"use client";
import { Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { typingCarouselStyles } from "./styles";

export interface TypingCarouselProps {
  texts: string[];
}

export const TypingCarousel: React.FC<TypingCarouselProps> = ({ texts }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // タイピングアニメーションの設定値
  const TYPING_SPEED = 100; // タイピング速度（ミリ秒）
  const DELETING_SPEED = 50; // 削除速度（ミリ秒）
  const PAUSE_DURATION = 2000; // タイピング完了後の一時停止時間（ミリ秒）

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (!isDeleting) {
      // タイピング中
      if (displayedText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        // タイピング完了、一時停止
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION);
      }
    } else {
      // 削除中
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, DELETING_SPEED);
      } else {
        // 削除完了、次のテキストへ
        setIsDeleting(false);
        if (currentIndex < texts.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0); // 常にループ
        }
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayedText, currentIndex, isDeleting, texts]);

  return (
    <Typography component="span" sx={typingCarouselStyles}>
      {displayedText}
      <span className="cursor">|</span>
    </Typography>
  );
};
