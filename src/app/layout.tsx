import { Layout } from "@/components/parts/Layout";
import type { Metadata } from "next";
import "../assets/styles/reset.scss";
import "../assets/styles/global.scss";

export const metadata: Metadata = {
  title: "Shun's Portfolio",
  description:
    "This is Shun Yoshiya, a frontend developer. This page tells about myself and shows my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
