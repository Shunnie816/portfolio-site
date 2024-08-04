import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import XIcon from "@mui/icons-material/X";
import { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";

export type IconType = "gitHub" | "linkedIn" | "x" | "menu";

type BaseProps = {
  icon: IconType;
};
type Props = BaseProps & SvgIconProps;

const iconMap = {
  gitHub: GitHubIcon,
  linkedIn: LinkedInIcon,
  x: XIcon,
  menu: MenuIcon,
};

export const Icon = ({ icon, ...rest }: Props) => {
  const SelectedIcon = iconMap[icon] || null;
  return <SelectedIcon {...rest} />;
};
