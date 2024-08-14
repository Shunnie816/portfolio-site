import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LightModeIcon from "@mui/icons-material/LightMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import XIcon from "@mui/icons-material/X";
import { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";

export type IconType =
  | "gitHub"
  | "linkedIn"
  | "x"
  | "menu"
  | "language"
  | "darkMode"
  | "lightMode";

type BaseProps = {
  icon: IconType;
};
type Props = BaseProps & SvgIconProps;

const iconMap = {
  gitHub: GitHubIcon,
  linkedIn: LinkedInIcon,
  x: XIcon,
  menu: MenuIcon,
  language: LanguageIcon,
  darkMode: DarkModeIcon,
  lightMode: LightModeIcon,
};

export const Icon = ({ icon, ...rest }: Props) => {
  const SelectedIcon = iconMap[icon] || null;
  return <SelectedIcon {...rest} />;
};
