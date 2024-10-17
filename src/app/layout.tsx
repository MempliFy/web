import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "jotai";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { Navbar } from "@/components/custom/navbar";
import { Sidebar } from "@/components/custom/sidebar";

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
            <div className="flex w-dvw">
              <Sidebar />
              <div className="flex-grow">
                <Navbar />
                <div className="p-3">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
