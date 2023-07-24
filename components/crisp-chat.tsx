"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0d2801c5-0aa3-418f-a578-851c1d2868db");
  }, []);

  return null;
};
