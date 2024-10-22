import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background sticky top-0 w-full px-3 py-3 justify-between flex flex-row items-center max-h-20">
      <SidebarTrigger />
      <span>MempliFy</span>
      <div className="flex flex-row items-center gap-2">
        <ThemeToggle />
        <Button className="py-2 px-3 h-fit font-normal" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </nav>
  );
};
Navbar.displayName = "Navbar";

export { Navbar };
