import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
      {children}
    </div>
  );
}