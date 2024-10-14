import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "jotai";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { Navbar } from "@/components/custom/navbar";

export const metadata: Metadata = {
  title: "MempliFy Web App",
  description: "MempliFy Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="antialiased  overflow-hidden">
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="top-center" />
            <Navbar />
            <div className="px-3 py-3">{children}</div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
