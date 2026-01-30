import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "blue" | "pattern";
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-slate-50",
    blue: "bg-blue-900 text-white",
    pattern: "bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]",
  };

  return (
    <section id={id} className={cn("py-16 md:py-24 relative overflow-hidden", backgrounds[background], className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {children}
      </div>
    </section>
  );
}
