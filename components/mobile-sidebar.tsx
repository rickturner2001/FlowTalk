"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import { useIsHydrated } from "@/hooks/is-hydrated";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar = ({
  apiLimitCount,
  isPro = false,
}: MobileSidebarProps) => {
  const isHydrated = useIsHydrated();
  if (!isHydrated) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button size={"icon"} variant={"ghost"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="p-0" side={"left"}>
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
