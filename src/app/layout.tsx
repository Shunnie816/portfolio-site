import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Layout } from "@/components/parts/Layout";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nekonoko's Portfolio",
  description:
    "This is Nekonoko, a frontend developer. This is my portfolio site which tells about myself and shows my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Layout>{children}</Layout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
