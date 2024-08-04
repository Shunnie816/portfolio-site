import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Layout } from "@/components/parts/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shun's Portfolio",
  description:
    "This is Shun Yoshiya, a frontend developer. This is my portfolio site which tells about myself and shows my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
