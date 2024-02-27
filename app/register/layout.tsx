"use client";

import { TComposition } from "../_packages/types";

export default function Layout({ children }: TComposition) {
  return (
    <>
      <div className="h-[52px] bg-black flex items-center px-8">
        <span className="text-white text-lg">Bacchus</span>
      </div>
      {children}
    </>
  );
}
