import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import XIcon from "@mui/icons-material/X";
import { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";

export type IconType =
  | "gitHub"
  | "x"
  | "menu"
  | "language"
  | "darkMode"
  | "lightMode"
  | "zenn";

type BaseProps = {
  icon: IconType;
};
type Props = BaseProps & SvgIconProps;

const iconMap = {
  gitHub: GitHubIcon,
  x: XIcon,
  menu: MenuIcon,
  language: LanguageIcon,
  darkMode: DarkModeIcon,
  lightMode: LightModeIcon,
  zenn: NewspaperIcon,
};

export const Icon = ({ icon, ...rest }: Props) => {
  const SelectedIcon = iconMap[icon] || null;
  return <SelectedIcon {...rest} />;
};
