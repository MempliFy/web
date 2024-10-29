import Link from "next/link";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background sticky top-0 w-full px-3 py-3 justify-between flex flex-row items-center max-h-20">
      <SidebarTrigger />
      <span>MempliFy</span>
      <Button className="py-2 px-3 h-fit font-normal" asChild>
        <Link href="/login">Login</Link>
      </Button>
    </nav>
  );
};
Navbar.displayName = "Navbar";

export { Navbar };
