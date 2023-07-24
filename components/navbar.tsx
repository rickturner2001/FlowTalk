import MobileSidebar from "./mobile-sidebar";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";

interface NavbarProps {
  apiLimitCount: number;
  isPro: boolean;
}
const Navbar = ({ apiLimitCount, isPro = false }: NavbarProps) => {
  return (
    <nav className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
