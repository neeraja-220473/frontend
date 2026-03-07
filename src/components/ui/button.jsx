import React from "react";
import { cn } from "../../lib/utils"; // optional utility for class merging

export const Button = ({ children, variant = "primary", asChild = false, className = "", ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-400",
    outline: "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 focus:ring-slate-400",
  };

  const Comp = asChild ? "span" : "button";

  return (
    <Comp className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
};