import React from "react";
import { cn } from "../../lib/utils"; // optional utility

export const Card = ({ children, className = "" }) => (
  <div className={cn("rounded-lg border bg-white shadow-sm", className)}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={cn("p-4 border-b", className)}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={cn("text-lg font-semibold", className)}>{children}</h3>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={cn("p-4", className)}>{children}</div>
);