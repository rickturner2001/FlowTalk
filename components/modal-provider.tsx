"use client";

import { useIsHydrated } from "@/hooks/is-hydrated";
import { ProModal } from "./pro-modal";

export const ModalProvider = () => {
  const isHydrated = useIsHydrated();

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <ProModal />
    </>
  );
};
