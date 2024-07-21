"use client";
import { Global, css } from "@emotion/react";
import React from "react";
import { variables } from "@/assets/styles/variable";

type Props = {
  children: React.ReactNode;
};

const globalStyles = css`
  ${variables}
`;

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Global styles={globalStyles} />
      {children}
    </div>
  );
};
