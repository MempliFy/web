import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { HamBurgerIcon } from "./icons";

const Navbar: React.FC = () => {
  return (
    <div className="bg-background sticky top-0 w-full px-3 py-3 justify-between flex flex-row items-center max-h-20">
      <HamBurgerIcon size={24} />
      <span>MempliFy</span>
      <div className="flex flex-row items-center gap-2">
        <Button asChild>
          <ThemeToggle />
        </Button>
        <Button className="py-2 px-3 h-fit font-normal" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};
Navbar.displayName = "Navbar";

export { Navbar };
