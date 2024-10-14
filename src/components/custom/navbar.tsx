import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-background sticky top-0 w-dvw px-3 py-3 justify-between flex flex-row items-center z-30">
        <div>title</div>
        <div className="flex flex-row items-center gap-2">
          <Button asChild>
            <ThemeToggle />
          </Button>
          <Button className="py-2 px-3 h-fit font-normal" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
Navbar.displayName = "Navbar";

export { Navbar };
