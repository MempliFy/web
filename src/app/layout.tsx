import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "jotai";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { Navbar } from "@/components/custom/navbar";
import { AppSidebar } from "@/components/custom/app-sidebar";
import { SidebarProvider} from "@/components/ui/sidebar";

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
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
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
              <SidebarProvider>
                <AppSidebar />
                <div className="flex-grow">
                  <Navbar />
                  <main className="p-3">{children}</main>
                </div>
              </SidebarProvider>
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
