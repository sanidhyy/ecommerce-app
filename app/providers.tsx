"use client";

import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

import { StateContext } from "../context/StateContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <StateContext>
      <Toaster />
      {children}
    </StateContext>
  );
}
